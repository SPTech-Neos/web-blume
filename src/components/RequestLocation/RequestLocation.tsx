// import React, { useContext } from 'react';
// // import { AuthContextClient } from '../../contexts/User/AuthContextProviderClient'; 

// const RequestLocation: React.FC = () => {
//   // const { isAuthenticated, userLocation, requestUserLocation } = useContext(AuthContextClient);

//   // const handleRequestLocation = () => {
//   //   requestUserLocation();
//   // };

//   return (
//     <div>
//       {isAuthenticated && (
//         <div>
//           <p>User is authenticated.</p>
//           {userLocation ? (
//             <div>
//               <p>User location:</p>
//               <p>CEP: {userLocation.address.zipCode}</p>
//               <p>Street: {userLocation.address.publicPlace}</p>
//               <p>City: {userLocation.address.city}</p>
//               <p>State: {userLocation.address.uf}</p>
//               <p>Number: {userLocation.number}</p>
//               <p>Floor: {userLocation.floor}</p>
//               <p>Bloc: {userLocation.block}</p>
//               <p>Complement: {userLocation.complement}</p>
//             </div>
//           ) : (
//             <button onClick={handleRequestLocation}>Request User Location</button>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default RequestLocation;
