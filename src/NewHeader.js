import { Link } from "react-router-dom";

export default function NewHeader() {
  return (
    <header class="blog-header py-3">
      <div class="row flex-nowrap justify-content-between align-items-center">
        <div class="container">
          <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <div class="col-md-3 mb-2 mb-md-0">
              <a
                href="/"
                class="d-inline-flex link-body-emphasis text-decoration-none"
              >
                <svg
                  class="bi"
                  width="40"
                  height="32"
                  role="img"
                  aria-label="Bootstrap"
                >
                  <use></use>
                </svg>
              </a>
            </div>

            <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              {/* <div class="col-md-3 text-center" style={{ marginRight: "40px" }}>
                <Link to="/Login">
                  <button type="button" class="btn btn-outline-primary me-2">
                    Login
                  </button>
                </Link>
              </div> */}
              <div class="col-md-12 t">
                <Link to="/NewHeader">
                  <button type="button" class="btn btn-primary">
                    Sign-up
                  </button>
                </Link>
              </div>
            </ul>

            <div class="col-md-3 text-end"></div>
          </header>
        </div>
        <div class="col-4 text-center"></div>
      </div>
    </header>
  );
}
