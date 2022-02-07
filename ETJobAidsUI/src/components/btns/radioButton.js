import React, { Component } from "react"

const RadioButton = (props) => {
  const [chk, setChk] = React.useState(props.lbl[0]);

  const handleChange = (event) => {
    setChk('')
  }

    return (
        <label name={props.name}>
          <input type="radio" name={props.name} value={props.lbl}  checked={chk === props.lbl[0]} onChange={handleChange}/>
          <span>{props.lbl}</span>
        </label>
    )
}
export default RadioButton;