import { Link } from "react-router-dom";

const Logo = ({ size = "default" }: { size?: "default" | "large" }) => {
  const imgClass = size === "large" ? "h-14" : "h-10";

  return (
    <Link to="/" className="flex items-center">
      <img
        src="/logo-360airo.jpeg"
        alt="360Airo"
        className={`${imgClass} w-auto object-contain mix-blend-lighten contrast-150 brightness-110`}
      />
    </Link>
  );
};

export default Logo;

