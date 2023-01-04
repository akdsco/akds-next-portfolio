import React from "react";
import { Review } from "../pages/about";

function Testimonial({ content, author }: Review) {
  const { name, designation } = author;
  return (
    <div className="mi-testimonial-slider-item">
      <div className="mi-testimonial">
        <div className="mi-testimonial-content">
          <p>{content}</p>
        </div>
        <div className="mi-testimonial-author">
          <h5>{name}</h5>
          <h6>{designation}</h6>
        </div>
      </div>
    </div>
  );
}

export { Testimonial };
