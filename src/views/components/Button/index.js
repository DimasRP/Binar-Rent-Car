import PropTypes from "prop-types";
import "./Button.css";

const Button = (props) => {
  const { variant, color, children, size, fullWidth, ...nativeProps } = props;

  const colorVariants = (color) => {
    switch (color) {
      case "primary":
        return "btn-primary";

      case "secondary":
        return "btn-secondary";
      case "accent":
        return "btn-accent";

      case "success":
        return "btn-success";
      case "warning":
        return "btn-warning";

      case "error":
        return "btn-error";
      case "info":
        return "btn-info";

      case "default":
        return "";

      default:
        return "";
    }
  };

  const buttonVariants = (variant) => {
    switch (variant) {
      case "contained":
        return "";
      case "outlined":
        return "btn-outline";

      case "link":
        return "link";

      case "button":
        return "btn-ghost";

      default:
        return "";
    }
  };

  return (
    <button
      className={`btn ${fullWidth ? "w-full" : "w-auto"} ${colorVariants(
        color
      )} ${buttonVariants(variant)} capitalize p-3 rounded-sm ${
        props?.className
      }`}
      {...nativeProps}
    >
      <>{children || "BUTTON"}</>
    </button>
  );
};

Button.defaultProps = {
  variant: "contained",
  color: "default",
  fullWidth: false,
};

Button.propTypes = {
  fullWidth: PropTypes.bool,
  variant: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
