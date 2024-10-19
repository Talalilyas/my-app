export default function Button(props) {
  return (
    <button
      type="submit"
      className="btn btn-primary"
      onClick={props.onClick}
      style={{ backgroundColor: "green" }}
    >
      {props.children}
      Sign in
    </button>
  );
}
