import React from 'react';
import ReactDOM from 'react-dom';

//presentation component

class Tabs extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      selected : 0
    }
  }
  render(){
    return(
      <header>
        <ul className="tabs">
          { this.props.tabs.map((tab) => (
            <li>
              <h1 className="tabsTitle">{ tab.title }</h1>
            </li>
          ))};
            <article>{ this.props.tabs[this.state.selected].content }</article>
        </ul>
      </header>
    )
  }
}

export default Tabs;


// <ul>
// { this.tabs.map((tab) => {
//   <li>
//     <h1>{ tab.title }</h1>
//   </li>
// })};
//   <article>{ this.tabs[this.state.selected].content }</article>
// </ul>

