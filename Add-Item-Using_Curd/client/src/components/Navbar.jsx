// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// const Navbar = () => {
//   const { isAuthenticated, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   };

//   return (
//     <nav>
//       <h1>My MERN App</h1>
//       <div>
//         {isAuthenticated ? (
//           <>
//             <button onClick={handleLogout}>Logout</button>
//           </>
//         ) : (
//           <>
//             <button onClick={() => navigate('/login')}>Login</button>
//             <button onClick={() => navigate('/signup')}>Signup</button>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
