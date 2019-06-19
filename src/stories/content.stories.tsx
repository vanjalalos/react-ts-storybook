import * as React from "react";
import Content from "./../components/Content";
import { storiesOf } from "@storybook/react";

storiesOf("Content", module)
  .add("Content", () => <Content />)
  .addParameters({ viewport: { defaultViewport: "iphone6" } });
