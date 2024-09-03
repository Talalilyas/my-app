import React from "react";

export default function SelectDropdown(props) {
  console.log("-----props--------");
  console.log(props);
  console.log("-----props--------");
  const onChange = (event) => {
    const valuess = event.target.value;
    console.log(valuess);
    props.onChange(valuess, props.name);
  };

  let button = <label>Good AfterNoon</label>;
  if (props.name === "selectyear") {
    button = <label>Good Morning</label>;
  }

  if (props.value === "custom") {
    return <label>Good Morning</label>;
  }

  console.log(props.valuer);

  return (
    <div className="mb-3">
      {/* {props.value === 3 && <label>Good Morning</label>}
      {props.name === "selectyear" ? <label>Good Morning</label> : <label>Good AfterNoon</label> } */}
      {props.label && (
        <label htmlFor={props.name} className="form-label">
          {props.label}
        </label>
      )}
      <select
        className="form-select"
        id={props.name}
        name={props.name}
        value={props.value}
        onChange={onChange}
      >
        {props.options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
