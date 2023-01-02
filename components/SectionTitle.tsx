import React from "react";

export interface ISectionTitle {
  title: string;
}

function SectionTitle({ title }: ISectionTitle) {
  return (
    <div className="mi-section-title">
      <h2>{title}</h2>
      <span>{title}</span>
    </div>
  );
}

export { SectionTitle };
