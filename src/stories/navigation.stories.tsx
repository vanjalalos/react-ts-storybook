import * as React from "react";

import { storiesOf } from "@storybook/react";

import Navigation from "../components/Navigation";

import "bootstrap/dist/css/bootstrap.css";

storiesOf("Navigation", module).add("Simple Navigation", () => <Navigation />);
