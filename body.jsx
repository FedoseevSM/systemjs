import ReactDOM from "react-dom"
import React from "react"

export const ReactAppFrom = () => {
  return <div className="content">My React App Body Component Or Another</div>
}

ReactDOM.render(<ReactAppFrom />, document.querySelector("#body"))
