import * as React from "react";
import Button from "../components/Button";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import "bootstrap/dist/css/bootstrap.css";

storiesOf("Button", module)
  .add(
    "Simple button with action",
    () => (
      <Button buttonText='With action' handleClick={action("button-click")} />
    ),
    {
      notes: "A very simple example of addon notes"
    }
  )
  .add("Simple button without action", () => <Button buttonText='No action' />);
