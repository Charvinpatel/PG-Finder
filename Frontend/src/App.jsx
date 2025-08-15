// import { Routes, Route, Navigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Header from "./Components/Header";
// import Footer from "./Components/Footer";
// import Home from "./Pages/Home";
// import Listings from "./Pages/Listings";
// import PgDetailPage from "./Pages/PgDetailPage";

// import "./App.css";

// function App() {
//   return (
//     <div className="app-wrapper">
//       <Header />
//       <main className="flex-fill">
//         <Routes>
//           <Route path="/" element={<Navigate to="/home" />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/listings" element={<Listings />} />
//           <Route path="/pg/:id" element={<PgDetailPage />} />
//         </Routes>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Listings from "./Pages/Listings";
import SavedPage from "./Pages/SavedPage";
import NotificationPage from "./Pages/NotificationPage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import PgDetailPage from "./Pages/PgDetailPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/saved" element={<SavedPage />} />
          <Route path="/notifications" element={<NotificationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/pg/:id" element={<PgDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
