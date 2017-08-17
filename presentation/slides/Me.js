import React from "react";
import {
  Link,
  Slide,
  Text,
  Heading,
  Appear,
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
            <Heading size={2} caps lineHeight={2} textColor="secondary">
                Hi there
            </Heading>
            <Heading size={5} caps lineHeight={1} textColor="secondary">
                My name's António Capelo
            </Heading>
            <Appear>
                <div>
                    <Text margin="10px 0 0" textColor="tertiary" size={3} lineHeight={ 1 } bold>
                        Frontend Engineer at MOXY
                    </Text>
                    <Text margin="10px 0 0" textColor="tertiary" size={1} padding="20" bold>
                         <Link href="http://capelo.me/" target="_blank" textColor="secondary" padding="20" bold> 
                            @antoniocapelo
                        </Link>
                    </Text>
                </div>
            </Appear>
        </div>
    }
}

export default MainSlide;
