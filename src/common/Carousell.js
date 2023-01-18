import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
import Box from '@mui/material/Box';

import "../index.css";

export function Carousell(props) {
  const items = [
    {
      name: "Multi-Format Development Center",
      image: "../images/format.jpeg",
      description: "Form + you = your new form; Many different formats for personal growth; With our help you create your best form",
    },
    {
      name: "Personality Development Center",
      image: "../images/format2.png",
      description: "Every personality is star, a bright flash; The place where they appear supernova people; The place where the eyes light up with ideas",
    },
    {
      name: "Anna's Rubleva Development Center",
      image: "../images/format3.png",
      description: "Call to action, update; Broadcasts active position; Charges on the brave, decisive action",
    },
  ];
  

  return (
    <Box className="container p-5" 
    // sx={{ maxWidth: "90%", display: "block", marginLeft: "auto", marginRight: "auto" }}
    >
    <Carousel style={{}}>
      {items.map((item, i) => (
        <Item key={i} {...item} />
      ))}
    </Carousel>
    </Box>
  );
}

const Item = ({ name, description, image }) => {
  return (
    <>
      <img className="border rounded"
        src={image}
        style={{ objectFit: "cover", width: "100%"
        // ,  borderRadius: "8px"
       }}
        alt="Snow"
      />

      <h1 className="centered">{name}</h1>
      <p className="centered1">{description}</p>
    </>
  );
};
