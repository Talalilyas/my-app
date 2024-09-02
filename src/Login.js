import Fristname from "./Firstname";

import { useState } from "react";
import Buttonlogin from "./Butoonlogin";
import validator from "email-validator";
export default function Login() {
  const [password, setPassword] = useState("");
  const [Passworderorr, setPasswordErorr] = useState(false);
  const [email, setEmail] = useState(false);
  const [emailerorr, setEmailError] = useState("");

  const handleChange = (valuess, name) => {
    console.log([valuess, name]);

    if (name === "password") {
      setPassword(valuess);
      setPasswordErorr(valuess === "");
    }
    if (name === "email") {
      setEmail(valuess);
      setEmailError(!validator.validate(valuess));
    }
  };
  const handleClick = (event) => {
    if (password === "") {
      setPasswordErorr(true);
    }

    if (!validator.validate(email)) {
      setEmailError(!validator.validate(email));
    }

    console.log(password, email);
  };

  return (
    <div class="row">
      <div class="col-4">
        
       
      </div>
      <div class="col-5">
        <div
          class="card   "
          style={{ marginTop: "100px", maxHeight: "900px", maxWidth: "410px" }}
        >
          <div class="card-header bg-white">
            <h3> Login</h3>
            <button
              style={{
                height: "5px",
                width: "5px",
                marginRight: "3px",
                marginTop: "4px",
              }}
              type="button"
              class="btn-close position-absolute top-0 end-0 "
              aria-label="Close"
            ></button>
            <p class="text-muted fs-6">it's quick and easy</p>
          </div>
          <div class="card-body">
            <div className="col-md-12" style={{ maxHeight: "50px" }}>
              <Fristname
                type="text"
                className="form-control"
                id="lastName"
                name="email"
                placeholder="Email address"
                value={email}
                onChange={handleChange}
              />
              {emailerorr && (
                <p className="text-danger" style={{ fontSize: "10px" }}>
                  please enter you email adress
                </p>
              )}
            </div>
            <div className="col-md-12" style={{ maxHeight: "100px" }}>
              <Fristname
                type="password"
                className="form-control"
                id="lastName"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleChange}
              />
              {Passworderorr && (
                <p className="text-danger" style={{ fontSize: "10px" }}>
                  Please enter your password
                </p>
              )}
            </div>

            <div
              class="d-grid gap-2 col-6 mx-auto"
              style={{ marginTop: "15px" }}
            >
              <Buttonlogin onClick={handleClick} />
            </div>
          </div>
        </div>
      </div>
      <div class="col-3 ">
        
        </div>

    </div>
  );
}
