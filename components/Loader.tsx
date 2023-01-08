import React from "react";
import { ReactProps } from "../lib";

export const Loader: React.FC<ReactProps> = ({ className }) => (
  <div className={`mi-loader ${className}`}>
    <div />
    <div />
    <div />
    <div />
  </div>
);
