import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import NavSm from "./NavSm";

import { useState } from "react";
import SmDropDownMenu from "./SmDropDownMenu";
const Navbar = () => {
  const [visible, setVisible] = useState({
    user: false,
    form: false,
    dropDown: false,
  });
  const { Logout } = useLogout();
  const { user } = useAuthContext();
  const handleClick = () => {
    Logout();
  };

  return (
    <header>
      <SmDropDownMenu
        visible={visible}
        handleClick={handleClick}
        setVisible={setVisible}
      />

      <div className="container">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
        <nav>
          {user && (
            <div onClick={handleClick}>
              <span className="user-email">{user.email}</span>
              <button>Log out</button>
            </div>
          )}
          {!user && (
            <div className="action-links">
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
        <NavSm setVisible={setVisible} visible={visible} />
      </div>
    </header>
  );
};

export default Navbar;
