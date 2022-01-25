import { useState } from "react";
import useMeasure from "react-use-measure";
import { useSpring, animated } from "@react-spring/web";

interface Props{
  onClickOpenModal:()=>null;
}

function GetStartedButton(props:Props) {
  const [open, toggle] = useState(false);
  const [ref, { width }] = useMeasure();
  const props1 = useSpring({config:{friction:35},to:{width: open ? width : 0 }});

  return (
    <div className="divButton">
      <div
        ref={ref}
        className="button__main"
        onClick={()=>props.onClickOpenModal()}
        onMouseOver={() => toggle(true)}
        onMouseOut={() => toggle(false)}
      >
        <animated.div className="button__fill" style={props1} />
        <p
          className="buttondesc__main"
          style={{ color: open ? "white" : "#5b10a8" }}
        >
          Get Started Now
        </p>
      </div>
    </div>
  );
}

export default GetStartedButton;
