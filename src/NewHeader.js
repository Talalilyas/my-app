import { Link, useLocation } from "react-router-dom";

export default function NewHeader() {
  const location = useLocation();

  return (
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-center ">
        <div className="col-12 col-md-auto justify-content-center">
          {location.pathname === "/" && (
            <div className="col-md-12 t">
              <Link to="/NewHeader">
                <button type="button" className="btn btn-primary">
                  Sign-up
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
