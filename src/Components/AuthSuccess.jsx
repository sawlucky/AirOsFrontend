// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const AuthSuccess = () => {
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Get token from URL query param
//     const params = new URLSearchParams(window.location.search);
//     const token = params.get("token");
//     if (token) {
//       localStorage.setItem("token", token);
//       // Optionally, fetch user profile here and store in context/state
//       navigate("/", { replace: true }); // Redirect to home or dashboard
//     } else {
//       // If no token, redirect to login or show error
//       navigate("/login", { replace: true });
//     }
//   }, [navigate]);

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded shadow text-center">
//         <h2 className="text-xl font-bold mb-2">Signing you in...</h2>
//         <p className="text-gray-600">Please wait while we complete your login.</p>
//       </div>
//     </div>
//   );
// };

// export default AuthSuccess;