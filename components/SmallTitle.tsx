import React from "react";

interface ISmallTiTle {
  Icon: any;
  title: string;
}

function SmallTitle({ Icon, title }: ISmallTiTle) {
  return (
    <div className="mi-small-title">
      <Icon className="mi-small-title-icon" />
      <h4>{title}</h4>
    </div>
  );
}

export { SmallTitle };
