import * as React from "react";

interface IButton {
  buttonText: string;
  handleClick?: () => void;
}

const ToggleText = ({ buttonText, handleClick }: IButton) => {
  return (
    <div>
      <button className='nav-link js-scroll-trigger' onClick={handleClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default ToggleText;
