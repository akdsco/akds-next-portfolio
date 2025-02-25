import React, {PropsWithChildren} from "react";
import { ReactProps } from "../lib";

export const Loader = ({ className }: PropsWithChildren<ReactProps>) => (
  <div className={`mi-loader ${className}`}>
    <div />
    <div />
    <div />
    <div />
  </div>
);
