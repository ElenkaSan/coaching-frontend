import React from "react";

import { Card, CardBody, CardTitle } from "reactstrap";
import about from '../img/about.png'

const AboutUs = () => {
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
            About Company
            </h2> 
            {/* will put text later */}
            <img src={about} className="card-img-top img-thumbnail"
                           alt='author' objectFit='cover' quality={75} loading='eager'/> 
          </CardTitle>
        </CardBody>
      </Card>
    </section>
  );
    };
    
    export default AboutUs;