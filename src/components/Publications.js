import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

// will use for img https://mui.com/material-ui/react-image-list/

const Publications = () => {
    //   const navigate = useNavigate();
    
    //   const navSchools = () => {
    //     return navigate("/schools");
    //   };
    
    //   const navVolunteerLogging = () => {
    //     return navigate("/volunteer");
    //   };
    
    
      return (
      <section className="container p-5 m-3">
      <Card className="card bg-secondary text-center">
        <CardBody className="text-center">
          <CardTitle>
            <h2 className="font-weight-bold font-italic text-warning">
            Our Publications: 
            </h2>
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
};
    
    export default Publications;