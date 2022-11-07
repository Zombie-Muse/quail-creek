// import { Button } from 'react-bootstrap';
import { ButtonGroup } from 'react-bootstrap';
import CustomButton from './CustomButton';

const Home = () => {
  return (
    <div className="container mx-auto ">
      {/* <style type="text/css">
        {`
                .btn-qc {
                    background-color: orange;
                    color: purple;
                }
                
                `}
      </style> */}

      <h1>Home page</h1>
      {/* <Button variant="qc">Click Here</Button> */}
      <ButtonGroup onClick={() => alert('FUCK!!!')}>
        <CustomButton label="?" />
      </ButtonGroup>
    </div>
  );
};

export default Home;
