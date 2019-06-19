import { configure } from "@storybook/react";
import { addParameters } from "@storybook/react";
// automatically import all files ending in *.stories.tsx
const req = require.context("../src/stories", true, /\.stories\.tsx$/);
const newViewports = {
  kindleFire2: {
    name: "Kindle Fire 2",
    styles: {
      width: "600px",
      height: "963px"
    }
  },
  kindleFireHD: {
    name: "Kindle Fire HD",
    styles: {
      width: "533px",
      height: "801px"
    }
  },
  iphone5: {
    name: "iPhone 5",
    styles: {
      height: "568px",
      width: "320px"
    },
    type: "mobile"
  },
  iphone6: {
    name: "iPhone 6",
    styles: {
      height: "667px",
      width: "375px"
    },
    type: "mobile"
  },
  ipad: {
    name: "iPad",
    styles: {
      height: "1024px",
      width: "768px"
    },
    type: "tablet"
  },
  ipad10p: {
    name: "iPad Pro 10.5-in",
    styles: {
      height: "1112px",
      width: "834px"
    },
    type: "tablet"
  },
  ipad12p: {
    name: "iPad Pro 12.9-in",
    styles: {
      height: "1366px",
      width: "1024px"
    },
    type: "tablet"
  }
};
function loadStories() {
  req.keys().forEach(req);
}

addParameters({ viewport: { viewports: newViewports } });
configure(loadStories, module);
