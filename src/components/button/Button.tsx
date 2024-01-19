export interface ButtonProps {
  text: string;
  primary: boolean;
  disabled: boolean;
  size: "small" | "medium" | "large";
  onClick: () => void;
}
const Button = ({
  text = "Button",
  primary = true,
  disabled = false,
  size = "small",
  onClick = () => {},
}: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      style={{
        backgroundColor: primary ? "blue" : "gray",
        color: "white",
        padding: size === "small" ? "5px 10px" : "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
};

export default Button;
