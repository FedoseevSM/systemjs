import React from "react"

export const ReactAppFrom = () => {
  const [checked, setChecked] = React.useState(false)
  const toggleChecked = () => setChecked((value) => !value)
  console.log("hello from component in jsx")
  return (
    <div>
      <p>My React App with CDN {checked ? "ON" : "OFF"}</p>
      <button onClick={toggleChecked}>Toggle Text</button>
    </div>
  )
}

console.log("hello from jsx")
