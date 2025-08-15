// // import { Link } from "react-router-dom";
// // import SearchForm from "../Components/SearchForm";
// // import FeaturedPgs from "../Components/FeaturedPgs";
// // import WhyChooseUs from "../Components/WhyChooseUs";

// // const Home = () => {
// //   return (
// //     <div className="home-page">
// //       {/* Hero Section */}
// //       <section className="hero-section py-5 bg-light">
// //         <div className="container">
// //           <div className="row align-items-center">
// //             <div className="col-lg-6">
// //               <h1 className="display-4 fw-bold mb-4">Find Your Perfect PG</h1>
// //               <p className="lead mb-4">
// //                 Discover comfortable and affordable paying guest accommodations
// //                 in your preferred location with all modern amenities.
// //               </p>
// //               <Link to="/listings" className="btn btn-primary btn-lg">
// //                 Browse Listings
// //               </Link>
// //             </div>
// //             <div className="col-lg-6">
// //               <SearchForm />
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Featured PGs */}
// //       <section className="py-5">
// //         <div className="container">
// //           <FeaturedPgs />
// //         </div>
// //       </section>

// //       {/* Why Choose Us */}
// //       <section className="py-5 bg-light">
// //         <div className="container">
// //           <WhyChooseUs />
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default Home;

// import { Link } from "react-router-dom";
// import SearchForm from "../Components/SearchForm";
// import FeaturedPgs from "../Components/FeaturedPgs";
// import WhyChooseUs from "../Components/WhyChooseUs";
// import { useEffect, useState } from "react";

// const Home = () => {
//   const [typedText, setTypedText] = useState("");
//   const phrases = ["Comfortable", "Affordable", "Safe", "Verified"];
//   const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [typingSpeed, setTypingSpeed] = useState(150);

//   useEffect(() => {
//     const type = () => {
//       const currentPhrase = phrases[currentPhraseIndex];

//       if (isDeleting) {
//         setTypedText(currentPhrase.substring(0, typedText.length - 1));
//         setTypingSpeed(100);
//       } else {
//         setTypedText(currentPhrase.substring(0, typedText.length + 1));
//         setTypingSpeed(150);
//       }

//       if (!isDeleting && typedText === currentPhrase) {
//         setTimeout(() => setIsDeleting(true), 1000);
//       } else if (isDeleting && typedText === "") {
//         setIsDeleting(false);
//         setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
//         setTypingSpeed(500);
//       }
//     };

//     const timer = setTimeout(type, typingSpeed);
//     return () => clearTimeout(timer);
//   }, [typedText, currentPhraseIndex, isDeleting, typingSpeed]);

//   return (
//     <div className="home-page">
//       {/* Hero Section */}
//       <section className="hero-section py-5 bg-primary text-white position-relative overflow-hidden">
//         <div className="position-absolute top-0 start-0 w-100 h-100">
//           <div className="position-absolute top-0 start-0 w-100 h-100 bg-primary opacity-75"></div>
//           <div
//             className="position-absolute top-0 start-0 w-100 h-100"
//             style={{
//               background:
//                 "url(https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80) center/cover",
//             }}
//           ></div>
//         </div>

//         <div className="container position-relative py-5">
//           <div className="row align-items-center">
//             <div className="col-lg-6 mb-5 mb-lg-0">
//               <h1 className="display-4 fw-bold mb-4">
//                 Find Your <span className="text-warning">{typedText}</span>
//                 <span className="text-warning blinking-cursor">|</span> PG
//               </h1>
//               <p className="lead mb-4">
//                 Discover comfortable and affordable paying guest accommodations
//                 in your preferred location with all modern amenities.
//               </p>
//               <div className="d-flex gap-3">
//                 <Link to="/listings" className="btn btn-light btn-lg px-4">
//                   Browse Listings
//                 </Link>
//                 <Link to="/about" className="btn btn-outline-light btn-lg px-4">
//                   Learn More
//                 </Link>
//               </div>
//             </div>
//             <div className="col-lg-6">
//               <SearchForm isHero={true} />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Featured PGs */}
//       <section className="py-5">
//         <div className="container">
//           <FeaturedPgs />
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-5 bg-light">
//         <div className="container">
//           <WhyChooseUs />
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-5 bg-white">
//         <div className="container">
//           <div className="text-center mb-5">
//             <h2 className="display-5 fw-bold">What Our Users Say</h2>
//             <p className="lead text-muted">
//               Hear from students and professionals who found their perfect PG
//             </p>
//           </div>
//           <div className="row g-4">
//             {[
//               {
//                 name: "Rahul Sharma",
//                 role: "Student",
//                 text: "Found my perfect PG near college with all facilities. The process was so easy!",
//                 rating: 5,
//               },
//               {
//                 name: "Priya Patel",
//                 role: "Software Engineer",
//                 text: "As a working professional, I needed a safe and comfortable place. PG Finder delivered!",
//                 rating: 4,
//               },
//               {
//                 name: "Amit Kumar",
//                 role: "Intern",
//                 text: "Affordable options with food included. Exactly what I needed for my internship period.",
//                 rating: 5,
//               },
//             ].map((testimonial, index) => (
//               <div className="col-md-4" key={index}>
//                 <div className="card h-100 border-0 shadow-sm">
//                   <div className="card-body p-4">
//                     <div className="mb-3 text-warning">
//                       {Array(testimonial.rating)
//                         .fill(0)
//                         .map((_, i) => (
//                           <i key={i} className="bi bi-star-fill"></i>
//                         ))}
//                     </div>
//                     <p className="mb-4">"{testimonial.text}"</p>
//                     <div className="d-flex align-items-center">
//                       <div className="flex-shrink-0 me-3">
//                         <div
//                           className="rounded-circle bg-light d-flex align-items-center justify-content-center"
//                           style={{ width: "50px", height: "50px" }}
//                         >
//                           <i className="bi bi-person-fill text-muted fs-4"></i>
//                         </div>
//                       </div>
//                       <div>
//                         <h6 className="mb-0">{testimonial.name}</h6>
//                         <small className="text-muted">{testimonial.role}</small>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;

"use client";

import { Link } from "react-router-dom";
import SearchForm from "../Components/SearchForm";
import FeaturedPgs from "../Components/FeaturedPgs";
import WhyChooseUs from "../Components/WhyChooseUs";
import { useEffect, useState, useMemo } from "react";

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const phrases = useMemo(
    () => ["Comfortable", "Affordable", "Safe", "Verified"],
    []
  );
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const type = () => {
      const currentPhrase = phrases[currentPhraseIndex];

      if (isDeleting) {
        setTypedText(currentPhrase.substring(0, typedText.length - 1));
        setTypingSpeed(100);
      } else {
        setTypedText(currentPhrase.substring(0, typedText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && typedText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(type, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, currentPhraseIndex, isDeleting, typingSpeed, phrases]);

  return (
    <div className="home-page">
      {/* Hero Section with Gradient Background */}
      <section className="hero-section py-5 text-white position-relative overflow-hidden">
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            opacity: 0.9,
          }}
        ></div>

        {/* Animated Background Elements */}
        <div className="position-absolute top-0 start-0 w-100 h-100">
          <div
            className="position-absolute rounded-circle"
            style={{
              width: "200px",
              height: "200px",
              background: "rgba(255,255,255,0.1)",
              top: "10%",
              right: "10%",
              animation: "float 6s ease-in-out infinite",
            }}
          ></div>
          <div
            className="position-absolute rounded-circle"
            style={{
              width: "150px",
              height: "150px",
              background: "rgba(255,255,255,0.05)",
              bottom: "20%",
              left: "5%",
              animation: "float 8s ease-in-out infinite reverse",
            }}
          ></div>
        </div>

        <div className="container position-relative py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="display-4 fw-bold mb-4">
                Find Your <span className="text-warning">{typedText}</span>
                <span className="text-warning blinking-cursor">|</span> PG
              </h1>
              <p className="lead mb-4">
                Discover comfortable and affordable paying guest accommodations
                in your preferred location with all modern amenities.
              </p>
              <div className="d-flex gap-3">
                <Link to="/listings" className="btn btn-light btn-lg px-4">
                  Browse Listings
                </Link>
                <Link to="/about" className="btn btn-outline-light btn-lg px-4">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <SearchForm isHero={true} />
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }

          .blinking-cursor {
            animation: blink 1s infinite;
          }

          @keyframes blink {
            0%,
            50% {
              opacity: 1;
            }
            51%,
            100% {
              opacity: 0;
            }
          }
        `}</style>
      </section>

      {/* Featured PGs */}
      <section className="py-5">
        <div className="container">
          <FeaturedPgs />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-5 bg-light">
        <div className="container">
          <WhyChooseUs />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5 bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold">What Our Users Say</h2>
            <p className="lead text-muted">
              Hear from students and professionals who found their perfect PG
            </p>
          </div>
          <div className="row g-4">
            {[
              {
                name: "Rahul Sharma",
                role: "Student",
                text: "Found my perfect PG near college with all facilities. The process was so easy!",
                rating: 5,
              },
              {
                name: "Priya Patel",
                role: "Software Engineer",
                text: "As a working professional, I needed a safe and comfortable place. PG Finder delivered!",
                rating: 4,
              },
              {
                name: "Amit Kumar",
                role: "Intern",
                text: "Affordable options with food included. Exactly what I needed for my internship period.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div className="col-md-4" key={index}>
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body p-4">
                    <div className="mb-3 text-warning">
                      {Array(testimonial.rating)
                        .fill(0)
                        .map((_, i) => (
                          <i key={i} className="bi bi-star-fill"></i>
                        ))}
                    </div>
                    <p className="mb-4">"{testimonial.text}"</p>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 me-3">
                        <div
                          className="rounded-circle bg-light d-flex align-items-center justify-content-center"
                          style={{ width: "50px", height: "50px" }}
                        >
                          <i className="bi bi-person-fill text-muted fs-4"></i>
                        </div>
                      </div>
                      <div>
                        <h6 className="mb-0">{testimonial.name}</h6>
                        <small className="text-muted">{testimonial.role}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
