import * as React from "react";
import Toggle from "../components/Toggle";
import { storiesOf } from "@storybook/react";
import "bootstrap/dist/css/bootstrap.css";

storiesOf("Toggle", module)
  .add("Simple toggle button with text", () => <Toggle text='Sample text' />)
  .add("Simple toggle button without text", () => <Toggle />)
  .addParameters({ viewport: { defaultViewport: "kindleFire2" } });
