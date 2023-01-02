import React from "react";

interface ISmallTiTle {
  Icon: any;
  title: string;
}

function SmallTitle({ Icon, title }: ISmallTiTle) {
  return (
    <div className="mi-small-title">
      <span className="mi-small-title-icon">
        <Icon htmlColor="#fff" />
      </span>
      <h4>{title}</h4>
    </div>
  );
}

export { SmallTitle };
