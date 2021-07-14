import React from "react";
import "./index.css";

function Cards(props) {
  return (
    <>
      <body>
        <div className="Cards">
          <div className="card">
            <img src={props.imgsrc} alt="mypic" class="img-class"></img>
            <div className="info">
              <span>{props.title}</span>
              <h3 className="title">{props.sname}</h3>
              <a herf={props.link}>
                <button>Watch Now</button>
              </a>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default Cards;
