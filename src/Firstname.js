export default function Fristname(props) {
  console.log("-----props--------");
  console.log(props);
  console.log("-----props--------");
  const onChange = (event) => {
    const valuess = event.target.value;
    console.log(valuess);
    props.onChange(valuess, props.name);
  };
  return (
    <>
      <form>
        <div>
          <label for="firstName" class="form-label"></label>
          <input
            type={props.type}
            className={props.className}
            id="firstName"
            onChange={onChange}
            value={props.value}
            placeholder={props.placeholder}
          ></input>
        </div>
      </form>
    </>
  );
}
