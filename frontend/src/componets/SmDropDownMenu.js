import React from "react";
import { UserCircle, PlusCircle } from "@phosphor-icons/react";
import UserSm from "../Pages/UserSm";
import AddWorkoutSm from "./AddWorkoutSm";
import { useAuthContext } from "../hooks/useAuthContext";
const SmDropDownMenu = ({ setVisible, visible, handleClick }) => {
  const { user } = useAuthContext();
  return (
    <div
      className={`drop-down-container ${
        visible.dropDown === true ? "drop-down-visible" : ""
      }`}
    >
      {user && user ? (
        <div className="choose-con">
          <div className="choose-buttons">
            <div
              onClick={() => {
                setVisible({
                  user: true,
                  form: false,
                  dropDown: true,
                });
              }}
              className="svg"
            >
              <UserCircle
                className={visible.user === true ? "active" : ""}
                color="#000"
              />
            </div>
            <div
              onClick={() => {
                setVisible({
                  user: false,
                  form: true,
                  dropDown: true,
                });
              }}
              className="svg"
            >
              <PlusCircle
                className={
                  visible.form === true ? "active" : "" && !user ? "none" : ""
                }
                color="#000"
              />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      <UserSm
        setVisible={setVisible}
        visible={visible}
        handleClick={handleClick}
      />
      <AddWorkoutSm setVisible={setVisible} visible={visible} />
    </div>
  );
};

export default SmDropDownMenu;
