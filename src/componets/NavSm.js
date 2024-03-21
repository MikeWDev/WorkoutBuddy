import React from "react";
import { DotsThreeCircle } from "@phosphor-icons/react";
const NavSm = ({ setVisible, visible }) => {
  return (
    <div className="nav-con">
      <div
        onClick={() => {
          setVisible({
            user: !visible.user,
            form: false,
            dropDown: !visible.dropDown,
          });
        }}
        className={`svg ${visible.dropDown === true ? "active" : ""}`}
      >
        <DotsThreeCircle
          className={visible.dropDown === true ? "active" : ""}
          color="#000"
        />
      </div>
    </div>
  );
};

export default NavSm;
