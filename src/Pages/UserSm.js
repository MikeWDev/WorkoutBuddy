import { Link } from "react-router-dom";

import { useAuthContext } from "../hooks/useAuthContext";

const UserSm = ({ handleClick, visible, setVisible }) => {
  const { user } = useAuthContext();
  return (
    <div
      className={`user-sm ${
        visible && visible.user === true ? "user-sm-drop" : ""
      }`}
    >
      {user && (
        <div onClick={handleClick}>
          <span className="user-email">{user.email}</span>
          <button
            onClick={() => {
              setVisible({
                dropDown: false,
              });
            }}
          >
            Log out
          </button>
        </div>
      )}
      {!user && (
        <div className="action-links">
          <Link
            onClick={() => {
              setVisible({
                dropDown: false,
              });
            }}
            to="/login"
          >
            Login
          </Link>
          <Link
            onClick={() => {
              setVisible({
                dropDown: false,
              });
            }}
            to="/signup"
          >
            Signup
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserSm;
