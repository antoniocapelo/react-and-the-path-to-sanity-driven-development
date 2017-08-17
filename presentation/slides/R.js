import React from "react";
import {
  Link,
  CodePane,
  S,
  Code,
  Slide,
  List,
  ListItem,
  Text,
  Heading,
  Layout,
  Fill,
  Appear,
  Image,
  ComponentPlayground,
} from "spectacle";


class Title extends React.Component  {
    render() {
      return <div>
            <Heading size={2} caps fit lineHeight={2} textColor="secondary">
                Why React?
            </Heading>
        </div>
    }
}


// Things to put on the react side
// - graph with adoption
// - live demo with componentization
// - points from https://medium.freecodecamp.com/yes-react-is-taking-over-front-end-development-the-question-is-why-40837af8ab76 and https://blog.syncano.io/reactjs-reasons-why-part-1/
// - react native and react native web
// - ssr
// - testing (shallow)
// - functional VS imperative
// - live demo?

class Test extends React.Component  {
    render() {
      return <div>
            <ComponentPlayground>
                hey hey
            </ComponentPlayground>
        </div>
    }
}

class JustFn  extends React.Component  {
    render() {
      return <div>
            <Heading size={1} caps fit lineHeight={2} textColor="other">
                It's just functions
            </Heading>
            <Appear>
                <Code>(props) => markup || more functions</Code>
            </Appear>
        </div>
    }
}

class SimplesComponent  extends React.Component  {
    render() {
      return <div>
            <Heading size={4} lineHeight={2} textColor="other">
                Simplest React Component:
            </Heading>
            <CodePane
                lang="jsx"
                source={require("raw-loader!./simple-component.example")}
                textSize="30px"
                padding="20px"
                margin="20px 0" />
        </div>
    }
}

class QuickWins  extends React.Component  {
    render() {
      return <div>
            <Heading size={2} lineHeight={2} textColor="secondary" textAlign="center">
                ⚡ Wins
            </Heading>
            <Appear>
                <Text textSize={30} textColor="secondary" margin={ 20 } lineHeight={1.4}>
                    ✔ Great adoption -> Strong dev community
                </Text>
            </Appear>
            <Appear>
                <Text textSize={30} textColor="secondary" margin={ 20 } lineHeight={1.4}>
                    ✔ Great developer tools
                </Text>
            </Appear>
            <Appear>
                <div style={{padding: '20px'}}>
                    <Text textSize={30} textColor="secondary" margin={ 20 } lineHeight={1.4}>
                        ✔  Security features
                    </Text>
                    <Image src={ this.props.img } />
                </div>
            </Appear>
        </div>
    }
}

class QuickWins2  extends React.Component  {
    render() {
      return <div>
            <Heading size={2} lineHeight={2} textColor="secondary" textAlign="center">
                ⚡ Wins
            </Heading>
            <Text textSize={30} textColor="secondary" margin={ 20 } lineHeight={1.4}>
                ✔ Understanding how react works -> React Native becomes a lot easier
            </Text>
            <Appear>
                <div style={{padding: '20px'}}>
                    <Text textSize={30} textColor="secondary" margin={ 20 } lineHeight={1.4}>
                        ✔ It's quick, thanks to the virtual DOM and <S type="italic">Tree Reconciliation</S> 
                    </Text>
                    <Image src={ this.props.img } width={ '50%' }/>
                </div>
            </Appear>
        </div>
    }
}


// security -> http://sebastian-lekies.de/slides/appsec2017.pdf page 37

class OtherWins  extends React.Component  {
    render() {
      return <div>
            <Heading size={2} lineHeight={2} textColor="secondary" textAlign="center">
                ⚡ Wins
            </Heading>
            <Text textSize={30} textColor="secondary" margin={ 20 } lineHeight={1.4}>
                ✔ It's a library for building UI, not a framework
            </Text>
            <Text textSize={30} textColor="secondary" margin={ 20 } lineHeight={1.4}>
                ✔ Server Side Rendering
            </Text>
            <Appear>
                <Text textSize={30} textColor="secondary">
                    Plus...
                </Text>
            </Appear>
        </div>
    }
}

class JsxIsCool  extends React.Component  {
    render() {
      return <div>
            <Heading size={2} lineHeight={2} textColor="secondary" textAlign="center">
                ⚡ Wins
            </Heading>
            <Text lineHeight={1.4} textColor="other">
                JSX is cool 😎
            </Text>
            <Text textColor="secondary" textSize="28px">
                You don't need to learn a new templating syntax
            </Text>
            <CodePane
                lang="jsx"
                source={require("raw-loader!./map.example")}
                textSize="22px"
                margin="20px 0" />
        </div>
    }
}

class Demo1  extends React.Component  {
    render() {
      return (
            <Heading size={2} lineHeight={2} textColor="primary" caps textAlign="center">
                Demo Time
            </Heading>
      );
    }
}

class SeparationOfConcerns  extends React.Component  {
    render() {
      return (
            <Heading size={2} lineHeight={2} textColor="primary" caps textAlign="center">
                But that's not all
            </Heading>
      );
    }
}

class Audio  extends React.Component  {
    render() {
      return (<div>
            <Heading size={2} lineHeight={2} fit textColor="other" caps textAlign="center">
                Composing (Audio) Components
            </Heading>
            <Appear>
                <Image src={this.props.images[0]} />
            </Appear>
            <Appear>
                <Image src={this.props.images[1]} />
            </Appear>
            <Appear>
                <Image src={this.props.images[2]} />
            </Appear>
          </div>
      );
    }
}

class Audio2  extends React.Component  {
    render() {
      return (<div>
            <Heading size={2} lineHeight={2} fit textColor="other" caps textAlign="center">
                Translation to React Components
            </Heading>
            <Image src={this.props.image} />
          </div>
      );
    }
}

export {
    Title,
    Test,
    JustFn,
    SimplesComponent,
    JsxIsCool,
    QuickWins,
    QuickWins2,
    Demo1,
    OtherWins,
    Audio,
    Audio2,
}

