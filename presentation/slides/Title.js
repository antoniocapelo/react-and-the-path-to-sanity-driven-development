import React from "react";
import {
  Link,
  Slide,
  Text,
  Heading,
} from "spectacle";


//<Slide transition={["zoom"]} bgColor="primary">
class MainSlide extends React.Component  {
  constructor(props) {
      super(props);
      this.transition = ["Zoom"];
      this.bgColor = "primary";
    }
    render() {
      return <div>
            <Heading size={1} caps lineHeight={1} textColor="primary">
                React
            </Heading>
            <Heading size={3} fit caps lineHeight={1} textColor="tertiary">
                and the path to sanity driven development
            </Heading>
        </div>
    }
}

export default MainSlide;
