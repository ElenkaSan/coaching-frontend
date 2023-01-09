import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";

import "../index.css";

export function Carousell(props) {
  const items = [
    {
      name: "Aya Bouchiha",
      image: "../images/format.jpeg",
      description: "Full Stack Web Developer",
    },
    {
      name: "John Doe",
      image: "../images/format2.png",
      description: "Author",
    },
    {
      name: "Pitsu Coma",
      image: "../images/format3.png",
      description: "Math Student",
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

      <h1 className="centered">{name}</h1>
      <p className="centered1">{description}</p>

      {/* <Paper>
        <h2>{name}</h2>
        <p>{description}</p>
        <img src={image} alt="Grapefruit slice atop a pile of other slices" />

        <Button>more info...</Button>
      </Paper> */}
    </>
  );
};
