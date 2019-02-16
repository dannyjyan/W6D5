import React from 'react'
import Clock from './clock'
import Tabs from './tabs'
//functional component


const tabInfo = [
  { title: "one", content: "First is the best"} ,
  { title: "two", content: "Second is ok"} ,
  { title: "three", content: "Third is the worst"} 
]

const Root = (props) => (
  <div>
  <Clock />
  <Tabs tabs={tabInfo}/>
</div>
)
// no state, no lifecycle methods 

export default Root;