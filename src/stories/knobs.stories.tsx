import * as React from "react";
import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  text,
  boolean,
  number,
  object
} from "@storybook/addon-knobs";

const stories = storiesOf("Dinamic variable", module);

stories.addDecorator(withKnobs);

// Knobs as dynamic variables.
stories.add("as dynamic variables", () => {
  const name = text("Name", "klug+milke");
  const age = number("Age", 2014);

  const label = "Styles";
  const defaultValue = {
    backgroundColor: "yellow",
    fontSize: "16px"
  };
  const groupId = "GROUP-ID1";

  const value = object(label, defaultValue, groupId);

  const content = ` ${name} was founded ${age} by serial IT entrepreneurs and creators of award-winning web applications`;
  return <div style={value}>{content}</div>;
});
