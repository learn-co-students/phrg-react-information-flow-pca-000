import React, { Component } from 'react'
import { getReducedColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      childColor: getReducedColor(this.props.color),
    }
  }

  render() {

    return (
      <div className="tier2" onClick={props.handleClick} style={{backgroundColor: this.props.color, color: this.props.color}}>
        <Tier3 handleClick={props.handleChildClick} color={props.childColor} />
        <Tier3 handleClick={props.handleChildClick} color={props.childColor} />
      </div>
    )
  }
}
