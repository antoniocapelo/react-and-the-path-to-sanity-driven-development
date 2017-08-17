import React from "react";
import {
  Link,
  Slide,
  List,
  ListItem,
  Text,
  Heading,
  Layout,
  Fill,
  Appear,
  Image,
} from "spectacle";

import CustomListItem from './CustomListItem';

class Title extends React.Component  {
    render() {
      return <div>
            <Heading size={2} caps fit lineHeight={2} textColor="tertiary">
                Client Side
            </Heading>
        </div>
    }
}

class Intro extends React.Component  {
    render() {
      return <div>
            <Heading size={2} caps lineHeight={1} textColor="tertiary">
                New stacks
            </Heading>
            <Image src={ this.props.img } width={'600px'}/>
        </div>
    }
}

class NewPlayers extends React.Component  {
    render() {
      return <div>
            <Heading size={2} caps lineHeight={1} textColor="secondary" margin="40px" bgColor="primary">
                New Players
            </Heading>
        </div>
    }
}

class Story extends React.Component  {
    render() {
      return <div>
            <Heading size={3} lineHeight={2} textColor="secondary" >
                The flow becomes:
            </Heading>
            <Appear>
                <Text lineHeight={1.5} textColor="secondary" >
                    Browser asks for page
                </Text>
            </Appear>
            <Appear>
                <Text lineHeight={1.5} textColor="secondary" >
                    Server returns minimal markup
                </Text>
            </Appear>
            <Appear>
                <Text lineHeight={1.5} textColor="secondary" >
                    Client (JS) picks up and does all the templating and additional requests
                </Text>
            </Appear>
        </div>
    }
}

class ProsCons extends React.Component  {
    render() {
      return <div>
              <Layout margin="0 -100">
                <Fill>
                  <Heading size={5} textColor="primary">
                        Pros
                  </Heading>
                    <List padding="10px 20px" caps>
                        <CustomListItem>
                            ++ dev. speed
                        </CustomListItem>
                        <CustomListItem>
                            Progressive loading
                        </CustomListItem>
                        <CustomListItem>
                            Richer interactions
                        </CustomListItem>
                        <CustomListItem>
                            Quick rendering
                        </CustomListItem>
                    </List>
                </Fill>
                <Fill>
                  <Heading size={5} textColor="secondary">
                        Cons
                  </Heading>
                    <List textColor="secondary" padding="10px 40px" caps>
                        <CustomListItem>
                            -- SEO
                        </CustomListItem>
                        <CustomListItem>
                            FOC
                        </CustomListItem>
                        <CustomListItem>
                            Initial load might require more time
                        </CustomListItem>
                        <CustomListItem>
                            JS apps become more and more complex
                        </CustomListItem>
                    </List>
                </Fill>
              </Layout>
        </div>
    }
}

class Mix extends React.Component  {
    render() {
      return <div>
          <Heading size={2} fit caps textColor="other">
                Mixin' styles
          </Heading>
        </div>
    }
}

class Now extends React.Component  {
    render() {
      return <div>
              <Heading size={3} caps lineHeight={2} textColor="primary" textAlign="left">
                Now we have:
              </Heading>
            <List padding="10px 40px" caps textColor="secondary">
                <CustomListItem>
                    Server Side Rendering
                </CustomListItem>
                <CustomListItem>
                    Component-driven systems
                </CustomListItem>
                <CustomListItem>
                    Library that empowers our to be more <Link href="https://github.com/ryanmcdermott/3rs-of-software-architecture">Readable, Reusable & Refactorable</Link>
                </CustomListItem>
            </List>
        </div>
    }
}

export {
    Title,
    Intro,
    NewPlayers,
    Story,
    ProsCons,
    Mix,
    Now,
}
