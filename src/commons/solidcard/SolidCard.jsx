import styles from "./SolidCard.module.css";

const SolidCard = (props) => {
  return (
    <>
      <div
        className="relative isolate"
        style={{
          width: `${
            typeof props.width === "number" ? `${props.width}px` : props.width
          }`,
          height: `${props.height}px`,
        }}
      >
        {/*<div className="#f00"></div>*/}
        <div
          style={{
            backgroundColor: `${props.solidColor}`,
            top: `${props.top}`,
            height: props.circleHeight,
          }}
          className={`absolute z-[2] right-[50%] translate-x-[50%]  w-[40%] ${
            !props.circleHeight && "h-[50%]"
          } rounded-full p-[5%] flex items-center justify-center`}
        >
          <div
            style={{ backgroundColor: `${props.circleColor}` }}
            className="w-full h-full rounded-full relative z-[50] flex justify-center items-center"
          >
            {props.icon}
          </div>
          <div
            id={`${styles["curved-corner-topleft"]}`}
            className={`z-[10] bottom-[15%] right-[-32%] ${props.rightSolidClasses}`}
          >
            <span
              style={{ boxShadow: `-50px -50px 0 0 ${props.solidColor}` }}
            ></span>
          </div>
          <div
            id={`${styles["curved-corner-topright"]}`}
            className={`z-[10] bottom-[15%] left-[-32%] ${props.leftSolidClasses}`}
          >
            <span
              style={{ boxShadow: `50px -50px 0 0 ${props.solidColor}` }}
            ></span>
          </div>
        </div>
        <div
          style={{ backgroundColor: `${props.backgroundColor}` }}
          className={`absolute z-[1] inset-0 rounded-[16px] overflow-hidden ${props.containerClassNames}`}
        >
          {props.children}
        </div>
      </div>
    </>
  );
};

export default SolidCard;
