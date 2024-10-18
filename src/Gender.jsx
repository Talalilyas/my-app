export default function Gender(props) {


  const onChange = (event) => {
    const valuess = event.target.value;
    console.log(valuess);
    props.onChange(valuess, props.name);
  };

  return (
    <span class="_5k_2 _5dba">
      <label class="_58mt">
        <input
          type="radio"
          class="_8esa"
          name={props.name}
          value={props.value}
          id={props.id}
          onChange={onChange}
        />
        {props.label}
      </label>
    </span>
  );
}
