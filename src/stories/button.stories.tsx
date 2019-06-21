import * as React from "react";
import Button from "../components/Button";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import "bootstrap/dist/css/bootstrap.css";
import {
  withKnobs,
  text,
  boolean,
  number,
  object
} from "@storybook/addon-knobs";

const stories = storiesOf("Button", module);
stories.addDecorator(withKnobs);

stories.add(
  "Simple button with action",
  () => (
    <Button buttonText='With action' handleClick={action("button-click")} />
  ),
  {
    notes: "A very simple example of addon notes"
  }
);

stories.add("Button without action", () => (
  <button disabled={boolean("Disabled", false)}>
    {text("Label", "No action")}
  </button>
));
