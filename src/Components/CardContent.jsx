import React from "react";

function Chip(props) {
  return (
    <span
      className="chip"
      style={{ backgroundColor: props.color, color: props.text ?? "black" }}
    >
      {props.skill}
      {props.emoji}
    </span>
  );
}

export default function CardContent() {
  return (
    <div className="card-content">
      <h1>Arman Soltani</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui mollitia
        obcaecati voluptatibus natus animi? Consequuntur adipisci consequatur
        doloribus inventore ipsa at minus corporis voluptate alias autem tenetur
        tempore reiciendis, molestiae sit, dolores dicta? Dolorem, ab.
      </p>
      <div className="chip-wrapper">
        <Chip skill="HTML+CSS" emoji={"😊"} color="yellow" />
        <Chip skill="JavaScript" emoji={"😍"} color="blue" text="white" />
        <Chip skill="React" emoji={"🚀"} color="red" text="white" />
        <Chip skill="Svelte" emoji={"😒"} color="orange" text="white" />
        <Chip skill="WebDesign" emoji={"👌"} color="green" text="white" />
      </div>
    </div>
  );
}
