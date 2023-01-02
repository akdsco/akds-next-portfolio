import React from "react";
import { Experience } from "../pages/resume";

interface TimelineItemProps extends Experience {
  position?: string;
  graduation?: string;
  university?: string;
  company?: string;
}
function TimelineItem({
  year,
  position,
  graduation,
  university,
  company,
  details,
}: TimelineItemProps) {
  return (
    <div className="mi-resume mt-30">
      <div className="mi-resume-summary">
        <h6 className="mi-resume-year">{year}</h6>
      </div>
      <div className="mi-resume-details">
        <h5>{position || graduation}</h5>
        <h6 className="mi-resume-company">{company || university}</h6>
        <p>{details}</p>
      </div>
    </div>
  );
}

export { TimelineItem };
