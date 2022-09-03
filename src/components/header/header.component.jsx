import { Link } from "react-router-dom";
import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header">
          <Link className="logo-container" to="/practice">
              <span className="logo">practice</span>
      </Link>
    </div>
  );
};

export default Header;
