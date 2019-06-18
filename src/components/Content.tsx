import * as React from "react";
import Item from "./Item";

const Content = () => {
  return (
    <div>
      <Item
        title='EXPERIENCE AND DEDICATION'
        text={
          <p className='lead'>
            klug+milke was founded 2014 by serial IT entrepreneurs and creators
            of award-winning web applications. We have 20+ years of experience
            in the planning, architecture, development, roll-out and management
            of large-scale enterprise e-commerce solutions. Since 2005 our focus
            is on the financial sector.
          </p>
        }
      />
      <Item
        title='TECHNOLOGIES WE ARE USING'
        text={
          <p className='lead'>
            Backend: we primarily use the Microsoft stack (.NET and SqlServer)
            in the backend. We've been working with .NET since its inception in
            2001. Frontend: we use Typescript and Node everwhere, and mature JS
            frameworks like React or Angular where it makes sense — but whenever
            we can, we'll just #UseThePlatform.
          </p>
        }
        light={true}
      />
      <Item
        title='WE DELIVER ON-TIME AND ON-BUDGET'
        text={
          <>
            <p className='lead'>
              We built high-profile solutions for large enterprises. Some of
              them won awards. All of them add great business value.
            </p>
            <ul>
              <li>Online Trading Platforms</li>
              <li>CRM Systems</li>
              <li>Financial Customer On-boarding Workflows</li>
            </ul>
          </>
        }
      />
    </div>
  );
};

export default Content;
