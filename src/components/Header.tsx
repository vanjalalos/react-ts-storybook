import * as React from "react";

interface IProps {
  title?: string;
  text: string;
}

const Header = ({ title, text }: IProps) => {
  return (
    <header className='bg-primary text-white'>
      <div className='container text-center'>
        <h1>{title}</h1>
        <p className='lead'>{text}</p>
      </div>
    </header>
  );
};

export default Header;
