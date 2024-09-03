export default function Buttonlogin(props) {
    return (
      <button
        type="submit"
        className="btn btn-primary"
        onClick={props.onClick}
        style={{ backgroundColor: "green" }}
      >
        {props.children}
        Login
      </button>
    );
  }
  