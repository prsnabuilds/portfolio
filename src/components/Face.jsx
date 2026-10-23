export default function Face({ size = "lg", className = "" }) {
  return (
    <span className={`face face--${size} ${className}`} aria-hidden="true">
      <img className="face__star" src={size === "sm" ? "/assets/star-small.svg" : "/assets/star-big.svg"} alt="" />
      <span className="face__vector">
        <span className="face__vector-inner">
          <img src={size === "sm" ? "/assets/vector-small.svg" : "/assets/vector-big.svg"} alt="" />
        </span>
      </span>
      <span className="face__eyes">
        <span className="face__eye face__eye--l">
          <span className="face__pupil" />
        </span>
        <span className="face__eye face__eye--r" />
      </span>
    </span>
  );
}
