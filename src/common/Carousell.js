import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";

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
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} {...item} />
      ))}
    </Carousel>
  );
}

const Item = ({ name, description, image }) => {
  return (
    <>
      <img
        src={image}
        style={{ width: "100%", objectFit: "cover" }}
        alt="Snow"
      />

      <h1 className="centered text-info">{name}</h1> 
      <br></br>
      <h4 className="centered1 text-info">{description}</h4>

    </>
  );
};
