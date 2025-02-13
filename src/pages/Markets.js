

import React, { Component } from "react";
import {observer} from "mobx-react"
import marketsStore from "../stores/markets.store"
import MarketsTableView from "../components/MarketsTableView";
import PlatformIcon from "../components/PlatformIcon";
import { capitalizeFirstLetter } from "../utils";

class Markets extends Component {

  constructor(props) {
    super(props);
  }

  render () {
    console.log(marketsStore.loading)
    const urlParams = new URLSearchParams(window.location.search);
    const platform = urlParams.get('platform')
    console.log('markets for platform:',platform);
    return (
      <div>
        <article>
          <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <PlatformIcon name={platform}/> 
            <h2 style={{margin: '10px', textAlign: 'center'}}>{capitalizeFirstLetter(platform)} Bad Debt</h2>
          </header>
          {!marketsStore.loading &&  <MarketsTableView data={marketsStore.tableData[platform]}/>}
          {marketsStore.loading && <div>
            <div style={{minHeight: '80vh'}} aria-busy="true"></div>
          </div>}
          <footer style={{display: 'flex', justifyContent: 'space-around'}}>
          </footer>
        </article>
      </div>
    )
  }
}

export default observer(Markets)