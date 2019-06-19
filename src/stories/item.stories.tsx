import * as React from "react";
import Item from "../components/Item";
import { storiesOf } from "@storybook/react";

storiesOf("Item with light", module)
  .add("Item with light", () => (
    <Item
      title='Item test'
      text={
        <>
          <p className='lead'>
            We built high-profile solutions for large enterprises. Some of them
            won awards. All of them add great business value.
          </p>
          <ul>
            <li>Online Trading Platforms</li>
            <li>CRM Systems</li>
            <li>Financial Customer On-boarding Workflows</li>
          </ul>
        </>
      }
      light={false}
    />
  ))
  .add("Item without light", () => (
    <Item
      title='Item test'
      text={
        <>
          <p className='lead'>
            We built high-profile solutions for large enterprises. Some of them
            won awards. All of them add great business value.
          </p>
          <ul>
            <li>Online Trading Platforms</li>
            <li>CRM Systems</li>
            <li>Financial Customer On-boarding Workflows</li>
          </ul>
        </>
      }
      light={true}
    />
  ))
  .addParameters({ viewport: { defaultViewport: "kindleFire2" } });
