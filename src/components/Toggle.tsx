import * as React from "react";

interface IButton {
  text?: string;
}

const Toggle = ({ text = "No Text" }: IButton) => {
  const [isToggleOn, setIsToggleOn] = React.useState(false);
  const handleClick = () => {
    setIsToggleOn(!isToggleOn);
  };
  return (
    <div>
      <button className='nav-link js-scroll-trigger' onClick={handleClick}>
        {isToggleOn ? "Hide text" : "Show text"}
      </button>
      {isToggleOn ? <p>{text}</p> : null}
    </div>
  );
};

export default Toggle;
