import * as React from "react";
import Button from "../components/Button";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import { linkTo } from "@storybook/addon-links";
import "bootstrap/dist/css/bootstrap.css";
import Content from "./../components/Content";

storiesOf("Links", module)
  .add(
    "Simple button with action",
    () => (
      <Button buttonText='With action' handleClick={action("button-click")} />
    ),
    {
      notes: "A very simple example of addon notes"
    }
  )
  .add("Go to Content", () => (
    <Button
      buttonText='Go to Content'
      handleClick={linkTo("Links", "Content")}
    />
  ))

  .add("Content", () => <Content />)

  .add("Simple button without action", () => <Button buttonText='No action' />);

/*storiesOf("Link", module)
  .add("First", () => (
    <Button
      buttonText='First'
      handleClick={LinkTo("Button", "First")}
    />
  ))
  .add("Second", () => <Content />);*/
