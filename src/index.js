import React from "react";
import ReactDOM from "react-dom";
import Cards from "./Card";
import Sdata from "./Sdata";
import "./index.css";


ReactDOM.render(
  <>
    <h1 className="heading">Top 5 Netflix Series</h1>
    {Sdata.map((value) => {
      return (
        <Cards
          imgsrc={value.imgsrc}
          title={value.title}
          sname={value.sname}
          link={value.link}
        />
      );
    })}
  </>,

  document.getElementById("root")
);
