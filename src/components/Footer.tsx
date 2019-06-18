import * as React from "react";

interface IFooter {
  text: string;
}

const Footer = ({ text }: IFooter) => {
  return (
    <footer className='py-5 bg-dark'>
      <div className='container'>
        <p className='m-0 text-center text-white'>{text}</p>
      </div>
    </footer>
  );
};

export default Footer;
