import React from "react";
import { ISectionTitle } from "./SectionTitle";

function SectionTitleModal({ title }: ISectionTitle) {
  return (
    <div className="mi-section-title-modal">
      <h2>{title}</h2>
      <span>{title}</span>
    </div>
  );
}

export { SectionTitleModal };
