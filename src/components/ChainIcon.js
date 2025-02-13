import React, { Component } from "react";
import {observer} from "mobx-react"
import { capitalizeFirstLetter } from "../utils";

class ChainIcon extends Component {

  constructor(props) {
    super(props);
  }

  render () {
    const chains = this.props.chain.split(",").map(c => c.toLowerCase()).filter(c => c)
    return (
      <div style={{display: "inline-block"}}>
        {chains.map((chain, i) => <img key={i} title={capitalizeFirstLetter(chain)} alt={chain} style={{borderRadius: '50%'}} src={`/images/chains/${chain}.webp`}/>)}
      </div>
    )
  }
}

export default ChainIcon;