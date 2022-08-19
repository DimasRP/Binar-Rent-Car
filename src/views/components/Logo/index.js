import { Link } from "react-router-dom";
import "./Logo.css";
const Logo = () => {
  return (
    <Link onClick={() => window.scrollTo(0, 0)} to={"/"}>
      <div className="logo" />
    </Link>
  );
};

export default Logo;
