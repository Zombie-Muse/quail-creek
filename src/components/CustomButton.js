import React from 'react';
import { Button } from 'react-bootstrap';

const QCButton = ({ label }) => {
  return (
    <>
      <Button
        style={{
          backgroundColor: 'orange',
        }}
      >
        {label}
      </Button>
    </>
  );
};

// const QCButton: React.FC<Props> = ({ children }) => {
//   return (
//     <Button
//       style={{
//         backgroundColor: 'orange',
//       }}
//     >
//       {children}
//     </Button>
//   );
// };

export default QCButton;
