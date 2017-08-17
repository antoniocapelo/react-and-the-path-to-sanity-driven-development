import React from "react";
import {
  Link,
  Code,
  Layout, 
  Fill,
  Slide,
  Text,
  Heading,
  Appear,
  Image,
  S,
  List,
  ListItem,
} from "spectacle";

import CustomListItem from './CustomListItem';

class Intro extends React.Component  {
  constructor(props) {
      super(props);
      this.transition = ["Zoom"];
      this.bgColor = "primary";
    }
    render() {
      return <div>
            <Image width="100%" src={this.props.img.replace('/', '')}/>

            <Heading size={4} lineHeight={2} textColor="tertiary" >
            Remember this?
            </Heading>
        </div>
    }
}

class Story extends React.Component  {
    render() {
      return <div>
            <Heading size={2} lineHeight={1.5} textColor="secondary" >
                Typical flow:
            </Heading>
            <Appear>
                <Text lineHeight={1.5} textColor="secondary" >
                    Browser asks for page
                </Text>
            </Appear>
            <Appear>
                <Text lineHeight={1.5} textColor="secondary" >
                    Server fetches data from DB 
                </Text>
            </Appear>
            <Appear>
                <Text lineHeight={1.5} textColor="secondary" >
                    Server fills templates with data
                </Text>
            </Appear>
            <Appear>
                <Text lineHeight={1.5} textColor="secondary" >
                    Full markup is returned
                </Text>
            </Appear>
            <Appear>
                <Text lineHeight={1} textColor="secondary" >
                    Need some UI interactions?
                </Text>
            </Appear>
            <Appear>
                <Text fit lineHeight={1.5} textColor="secondary" >
                    Add a bunch of <S type="bold">JavaScript files</S>!
                </Text>
            </Appear>
        </div>
    }
}

class JS extends React.Component  {
  constructor(props) {
      super(props);
    }
    render() {
      return (
          <div>
              <Appear>
                  <div>
                  <Image src={this.props.img}/>
                  <Heading size={6} lineHeight={1} textColor="primary">
                      (back in 2010's...)
                  </Heading>
                  </div>
              </Appear>
              <Heading size={1} fit caps lineHeight={1} textColor="primary">
                  JavaScript
              </Heading>
          </div>
      );
    }
}

class JS2 extends React.Component  {
  constructor(props) {
      super(props);
    }
    render() {
      return (
          <div>
              <Text lineHeight={2}>
                  <Code textColor="tertiary" >
                        undefined is not a function
                  </Code>
              </Text>
              <Text lineHeight={2}>
                  <Code textColor="tertiary">
                        caps is not defined
                  </Code>
              </Text>
              <Text lineHeight={2}>
                  <Code textColor="tertiary">
                        cannot read property 'length' of undefined
                  </Code>
              </Text>
              <Text lineHeight={2}>
                  <Code textColor="tertiary">
                        ...
                  </Code>
              </Text>
          </div>
      );
    }
}

class Problems extends React.Component  {
  constructor(props) {
      super(props);
    }
    render() {
      return (
          <div>
              <Heading size={3} caps lineHeight={2} textColor="secondary" textAlign="left">
                Main Problems
              </Heading>
            <List>
                <Appear>
                    <CustomListItem>
                        Big Payload
                    </CustomListItem>
                </Appear>
                <Appear>
                    <CustomListItem>
                        Templating languages with some limitations
                    </CustomListItem>
                </Appear>
                <Appear>
                    <CustomListItem>
                      <S type="italic">Pair</S> our JavaScript logic with the markup
                    </CustomListItem>
                </Appear>
                <Appear>
                    <CustomListItem>
                        Weak (or absent) module/component system
                    </CustomListItem>
                </Appear>
                <Appear>
                    <CustomListItem>
                        Bad/lack of dependency management
                    </CustomListItem>
                </Appear>
            </List>
          </div>
      );
    }
}

class OldSchool extends React.Component  {
    render() {
      return (
          <div>
               <Appear>
                  <Heading size={1} caps fit lineHeight={2} textColor="primary">
                        Old School
                  </Heading>
               </Appear>
               <Appear>
                   <Image src={this.props.img} />
               </Appear>
          </div>
      );
    }
}

class Pairing extends React.Component  {
    render() {
      return (
          <div>
              <Heading size={3} caps lineHeight={2} textColor="tertiary">
                Pairing stuff?
              </Heading>
              <Text margin="0 0 40px 0" lineHeight={1.2}>
                When rendering a simple list, we had to implement methods like:
              </Text>
          <Layout>
              <Fill>
                <List>
                    <Appear>
                        <ListItem>
                            render()
                        </ListItem>
                    </Appear>
                    <Appear>
                        <ListItem>
                            update();
                        </ListItem>
                    </Appear>
                    <Appear>
                        <ListItem>
                            delete();
                        </ListItem>
                    </Appear>
                </List>
              </Fill>
              <Fill>
                <Appear>
                      <Text padding={ 20 } bgColor="quaternary">
                      all these were 'glued' to the markup by class names, data attributes, etc
                      </Text>
                </Appear>
              </Fill>
          </Layout>
          </div>
      );
    }
}


export {
    Intro,
    Story,
    JS,
    JS2,
    Problems,
    OldSchool,
    Pairing,
};
