import * as React from "react";

interface IItem {
  title: string;
  text: React.ReactNode;
  light?: boolean;
}

const Item = ({ title, text, light }: IItem) => {
  return (
    <section id='about' className={light ? "bg-light" : ""}>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 mx-auto'>
            <h2>{title}</h2>
            {text}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Item;
