import React from "react";
import {
  ListItem,
} from "spectacle";

export default class CustomListItem extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <ListItem textSize="34" caps margin="20px 0" style={ { textTransform: 'upercase' } }{ ...this.props } />
    }
} 

