// // const WhyChooseUs = () => {
// //   const features = [
// //     {
// //       title: "Verified Properties",
// //       description: "All PGs are verified for safety and quality",
// //       icon: "bi bi-check-circle-fill",
// //     },
// //     {
// //       title: "Modern Amenities",
// //       description: "WiFi, AC, and all essential facilities",
// //       icon: "bi bi-wifi",
// //     },
// //     {
// //       title: "Prime Locations",
// //       description: "Near IT hubs and educational institutions",
// //       icon: "bi bi-geo-alt-fill",
// //     },
// //     {
// //       title: "Quality Food",
// //       description: "Hygienic and nutritious meals included",
// //       icon: "bi bi-egg-fried",
// //     },
// //   ];

// //   return (
// //     <div className="why-choose-us">
// //       <div className="text-center mb-5">
// //         <h2 className="display-5 fw-bold">Why Choose Our Platform?</h2>
// //         <p className="lead text-muted">
// //           We provide the best PG accommodations with verified quality
// //         </p>
// //       </div>
// //       <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
// //         {features.map((feature, index) => (
// //           <div className="col" key={index}>
// //             <div className="card h-100 border-0 shadow-sm">
// //               <div className="card-body text-center p-4">
// //                 <div className="icon-wrapper mb-3">
// //                   <i
// //                     className={`bi ${feature.icon} text-primary`}
// //                     style={{ fontSize: "2rem" }}
// //                   ></i>
// //                 </div>
// //                 <h3 className="h5 fw-bold mb-2">{feature.title}</h3>
// //                 <p className="text-muted mb-0">{feature.description}</p>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default WhyChooseUs;

// // WhyChooseUs.jsx

// import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons

// const WhyChooseUs = () => {
//   const features = [
//     {
//       title: "Verified Properties",
//       description: "All PGs are verified for safety and quality",
//       icon: "bi-check-circle-fill",
//     },
//     {
//       title: "Modern Amenities",
//       description: "WiFi, AC, and all essential facilities",
//       icon: "bi-wifi",
//     },
//     {
//       title: "Prime Locations",
//       description: "Near IT hubs and educational institutions",
//       icon: "bi-geo-alt-fill",
//     },
//     {
//       title: "Quality Food",
//       description: "Hygienic and nutritious meals included",
//       icon: "bi-egg-fried",
//     },
//   ];

//   return (
//     <div className="why-choose-us">
//       <div className="text-center mb-5">
//         <h2 className="display-5 fw-bold">Why Choose Our Platform?</h2>
//         <p className="lead text-muted">
//           We provide the best PG accommodations with verified quality
//         </p>
//       </div>
//       <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
//         {features.map((feature, index) => (
//           <div className="col" key={index}>
//             <div className="card h-100 border-0 shadow-sm">
//               <div className="card-body text-center p-4">
//                 <div className="icon-wrapper mb-3">
//                   <i
//                     className={`bi ${feature.icon} text-primary`}
//                     style={{ fontSize: "2rem" }}
//                   ></i>
//                 </div>
//                 <h3 className="h5 fw-bold mb-2">{feature.title}</h3>
//                 <p className="text-muted mb-0">{feature.description}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default WhyChooseUs;

import { Shield, Search, Heart, Clock } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield size={48} className="text-primary" />,
      title: "Verified Properties",
      description: "All PGs are verified for safety and quality standards",
    },
    {
      icon: <Search size={48} className="text-primary" />,
      title: "Easy Search",
      description: "Find your perfect PG with our advanced search filters",
    },
    {
      icon: <Heart size={48} className="text-primary" />,
      title: "Save Favorites",
      description:
        "Save and compare your favorite PGs for easy decision making",
    },
    {
      icon: <Clock size={48} className="text-primary" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your queries",
    },
  ];

  return (
    <div className="why-choose-us">
      <div className="text-center mb-5">
        <h2 className="display-5 fw-bold">Why Choose PG Finder?</h2>
        <p className="lead text-muted">
          We make finding your perfect PG simple and hassle-free
        </p>
      </div>
      <div className="row g-4">
        {features.map((feature, index) => (
          <div className="col-md-6 col-lg-3" key={index}>
            <div className="text-center h-100">
              <div className="mb-3">{feature.icon}</div>
              <h4 className="h5 fw-bold mb-3">{feature.title}</h4>
              <p className="text-muted">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
