import * as React from "react";
import Item from "../components/Item";
import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  text,
  boolean,
  number,
  object
} from "@storybook/addon-knobs";

const stories = storiesOf("Items", module);
stories.addDecorator(withKnobs);

stories
  .add("Item without light", () => {
    const name = text("Name", "klug+milke");
    const age = number("Age", 2014);

    const label = "Styles";
    const defaultValue = {
      backgroundColor: "yellow",
      fontSize: "16px",
      font: "bold"
    };
    const groupId = "GROUP-ID1";

    const content = text(
      "Text",
      `${name} was founded ${age} by serial IT entrepreneurs and creators of award-winning web applications. We have 20+ years of experience in the planning, architecture, development, roll-out and management of large-scale enterprise e-commerce solutions. Since 2005 our focus is on the financial sector.`
    );
    const value = object(label, defaultValue, groupId);
    const title = text("Title", "EXPERIENCE AND DEDICATION");
    const textNote = text("Text", content);
    return (
      <div style={value}>
        <Item title={title} text={textNote} light={false} />;
      </div>
    );
  })
  /*.add("Item with light", () => {
    const title = text("Title", "EXPERIENCE AND DEDICATION");
    const textNote = text(
      "Text",
      "klug+milke was founded 2014 by serial IT entrepreneurs and creators of award-winning web applications. We have 20+ years of experience in the planning, architecture, development, roll-out and management of large-scale enterprise e-commerce solutions. Since 2005 our focus is on the financial sector."
    );
    return (
      <div style={value}>
        <Item title={title} text={textNote} light={true} />;
      </div>
    );
  })*/
  .addParameters({ viewport: { defaultViewport: "kindleFire2" } });
