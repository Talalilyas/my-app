import { Link, useLocation } from "react-router-dom";

export default function NewHeader() {
  const location = useLocation();

  return (
   
      
        <div >
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
     
  
  );
}

