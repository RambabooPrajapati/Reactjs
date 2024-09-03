// Dashboard.js
import React, { useState } from 'react';
import Modal from '../components/Modal'; // Import the custom Modal component
import Login from './Login'; // Import the Login component

const Dashboard = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(true);

  // const handleOpenLogin = () => setIsLoginOpen(true);
  const handleCloseLogin = () => setIsLoginOpen(false);

  return (
    <div>
      {/* <h1>Dashboard</h1>
      <button onClick={handleOpenLogin}>Open Login Popup</button> */}

      {/* Use the Modal component */}
      <Modal isOpen={isLoginOpen} onClose={handleCloseLogin}>
        <Login />
      </Modal>
    </div>
  );
};

export default Dashboard;

































// // Dashboard.js
// import React, { useState } from 'react';
// import { Button, Modal, Box } from '@mui/material';
// import Login from './Login';  // Import the Login component

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
//   borderRadius: 3
// };

// const Dashboard = () => {
//   const [isLoginOpen, setIsLoginOpen] = useState(true);

//   // const handleOpenLogin = () => setIsLoginOpen(true);
//   const handleCloseLogin = () => setIsLoginOpen(false);

//   return (
//     <div>
//       {/* <h1>Dashboard</h1> */}
//       {/* <Button variant="contained" color="primary" onClick={handleOpenLogin}>
//         Open Login Popup
//       </Button> */}
      
//       {/* Login Modal */}
//       <Modal
//         open={isLoginOpen}
//         onClose={handleCloseLogin}
//         aria-labelledby="login-modal-title"
//         aria-describedby="login-modal-description"
//       >
//         <Box sx={style}>
//           {/* Render the Login component inside the modal */}
//           <Login />
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default Dashboard;
