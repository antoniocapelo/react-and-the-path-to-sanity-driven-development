// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Link,
  Appear,
  Image,
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";
import images from './getImages';

import slidesMarkdown from "raw-loader!./slides/me.md";
import TalkTitle from './slides/Title';
import Me from './slides/Me';
import TimeTravel from './slides/TimeTravel';
import * as LAMP from './slides/LAMP';
import * as NewStyles from './slides/NewStyles';
import * as R from './slides/R';

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

preloader(images);

const theme = createTheme({
  primary: "#ebebeb",
  secondary: "#22212f",
  tertiary: "#ed4545",
  quaternary: "#d7d7d7",
  other: "#19a974",
  otherOld: "#01d8cc"
}, {
  primary: "Montserrat",
  secondary: "Montserrat"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} theme={theme} transitionDuration={500} progress={'bar'}>

        <Slide transition={["slide"]} bgImage={images.peace.replace("/", "")} bgDarken={0.55}>
            <TalkTitle />
        </Slide>

        <Slide transition={["zoom"]} bgColor="primary">
            <Me />
        </Slide>

        <Slide transition={["slide"]} bgImage={images.timeMachine.replace("/", "")} bgDarken={0.75}>
            <TimeTravel />
        </Slide>

        <Slide transition={["zoom"]} >
            <LAMP.Intro img={images.lamp} />
        </Slide>

        <Slide transition={["slide"]} >
            <LAMP.Story />
        </Slide>

        <Slide transition={["zoom"]} bgColor="secondary">
            <LAMP.JS img={images.ohNo}/>
        </Slide>

        <Slide transition={["fade", "slide"]} bgColor="secondary">
            <LAMP.JS2 />
        </Slide>

        <Slide transition={["slide"]} bgImage={images.oldSchool.replace("/", "")} bgDarken={0.6} align={' center flex-end'}>
            <LAMP.OldSchool img={images.oldJs}/>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
            <LAMP.Problems />
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
              <Text lineHeight={1} textColor="primary" margin="0 0 40px 0">
                    Screenshot from the final part of a fellow developer's SO question:
             </Text>
            <Image src={images.stackoverflow1} />
            <Appear>
              <Text lineHeight={1} textColor="primary" textSize={30}>
                🤔 He's clearly not 100% sure if all of the 1000 necessary js files are being pulled
             </Text>
            </Appear>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" textColor="secondary">
            <LAMP.Pairing />
        </Slide>

        <Slide transition={["slide"]} bgImage={images.client2} bgDarken={0.75}>
            <NewStyles.Title />
        </Slide>

        <Slide transition={["zoom"]} >
            <NewStyles.Intro img={ images.stacksChange }/>
        </Slide>

        <Slide transition={["spin"]} bgImage={ images.newPlayers} >
            <NewStyles.NewPlayers />
        </Slide>

        <Slide transition={["slide"]} >
            <NewStyles.Story />
        </Slide>

        <Slide transition={["slide"]}  style={{ background: 'linear-gradient(90deg, #19a974 50%, #ebebeb 50%'}} textColor="primary">
            <NewStyles.ProsCons />
        </Slide>

        <Slide transition={["zoom", "fade"]} bgColor="other" >
            <R.Title />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" align="flex-start flex-start">
            <R.QuickWins img={ images.security} />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" align="flex-start flex-start">
            <R.QuickWins2 img={ images.diff} />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" align="flex-start flex-start">
            <R.JsxIsCool />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" align="flex-start flex-start">
            <R.OtherWins />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" >
            <R.JustFn />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" >
            <R.SimplesComponent />
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" bgImage={images.demo1} bgDarken={ 0.5 }>
            <R.Demo1 />
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
            <Image src={ images.concerns } />
            <Text textSize={ 28 } textColor="primary" textAlign="center">
                Great slide from <Link textColor="other" href="https://speakerdeck.com/didoo/let-there-be-peace-on-css">Cristiano Rastelli's talk</Link>
            </Text>
        </Slide>

        <Slide transition={["zoom", "fade"]} bgImage={ images.compose } bgDarken={0.2}>
          <Heading size={2} textColor="primary" caps>Composability</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
            <R.Audio images={[images.compose0, images.compose1, images.compose2]}/>
        </Slide>

        <Slide transition={["fade", "slide"]} bgColor="primary">
            <R.Audio2 image={images.conversion}/>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" bgImage={images.pray2} bgDarken={ 0.5 } align="flex-start center">
            <Heading size={2} lineHeight={2} textColor="primary" caps textAlign="left">
                Demo Time
            </Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="other">
            <Text margin="10px 0 0" textColor="primary" size={1} padding="20" bold>
                Thank you for listening!
            </Text>
            <Heading size={2} lineHeight={2} textColor="primary" caps textAlign="center">
                Questions ?
            </Heading>
            <Text margin="10px 0 0" textColor="tertiary" size={1} padding="30" bold>
                 <Link href="http://capelo.me/" target="_blank" textColor="primary" padding="20" bold> 
                    @antoniocapelo
                </Link>
            </Text>
        </Slide>
      </Deck>
    );
  }
}
