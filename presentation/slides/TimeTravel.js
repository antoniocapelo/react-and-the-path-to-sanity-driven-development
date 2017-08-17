import React from "react";
import {
  Link,
  Slide,
  Text,
  Heading,
  Appear,
} from "spectacle";


class TimeTravel extends React.Component  {
  constructor(props) {
      super(props);
      this.transition = ["Zoom"];
      this.bgColor = "primary";
    }
    render() {
      return <div>
            <Heading size={4} lineHeight={2} textColor="tertiary" style={{ textAlign: 'left' }}>
                let's
            </Heading>
            <Heading size={2} caps lineHeight={2} textColor="tertiary" style={{ textAlign: 'left' }}>
                Time travel
            </Heading>
            <Heading size={4} lineHeight={2} textColor="tertiary" style={{ textAlign: 'left' }}>
                a bit
            </Heading>
        </div>
    }
}

export default TimeTravel;
