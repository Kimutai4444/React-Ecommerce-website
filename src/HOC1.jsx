import React from 'react'

function HOC1(Mycomponent) {
    return function (props) {
      return <div>
        <Mycomponent name={props.name}/>
        <h1>{props.name }</h1>
      </div>
  }
}

export default HOC1;