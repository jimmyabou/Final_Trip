// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Modal from '@mui/material/Modal';

// import { DatePicker } from '@mui/x-date-pickers/DatePicker';


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
// };

// const NavSearchDateModal = () => {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div>
//       <Button onClick={handleOpen}>Days</Button>
//       <Modal open={open} onClose={handleClose}>
//         <Box sx={style}>
//           <DatePicker className="nav-form-middle" label="Start date" />
//           <DatePicker className="nav-form-middle" label="End date" />
//         </Box>
//       </Modal>
//     </div>
//   );
// };

// export default NavSearchDateModal;