import Fristname from "./Firstname";
import Gender from "./Gender";
import SelectDropdown from "./SelectDropdown";
import { useState } from "react";
import Button from "./Button";
import validator from "email-validator";
import { useNavigate } from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";

export default function FromCard() {
  const [isLogin, setIsLogin] = useLocalStorageState("isLogin", false);

  const [firstName, setFirstName] = useState("");
  const [firstnameerror, setfirstnameError] = useState(false);
  const [lastName, setLastName] = useState("");
  const [lastnameeror, setLastnameErorr] = useState(false);
  const [password, setPassword] = useState("");
  const [Passworderorr, setPasswordErorr] = useState(false);
  const [email, setEmail] = useState("");
  const [emailerorr, setEmailError] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectError, setSelectError] = useState(false);
  const [selectyear, setsselectyear] = useState("");
  const [selectyearerorr, setyearerorr] = useState(false);
  const [selectday, setselectday] = useState("");
  const [selectdayerorr, setselectdayerorr] = useState(false);
  const [gender, setGender] = useState("");
  const [genderError, setGenderError] = useState(false);
  const navigate = useNavigate();
  const handleChange = (valuess, name) => {
    console.log([valuess, name]);
    if (name === "firstName") {
      setFirstName(valuess);
      setfirstnameError(valuess === "");
    }
    if (name === "lastName") {
      setLastName(valuess);
      setLastnameErorr(valuess === "");
    }

    if (name === "password") {
      setPassword(valuess);
      setPasswordErorr(valuess === "");
    }
    if (name === "email") {
      setEmail(valuess);
      setEmailError(!validator.validate(valuess));
    }
    if (name === "selectedOption") {
      setSelectedOption(valuess);
      setSelectError(valuess === "");
    }
    if (name === "selectyear") {
      setsselectyear(valuess);
      setyearerorr(valuess === "");
    }
    if (name === "selectday") {
      setselectday(valuess);
      setselectdayerorr(valuess === "");
    }
    if (name === "gender") {
      setGender(valuess);
      setGenderError(false);
    }
  };
  const handleClick = (event) => {
    if (firstName === "") {
      setfirstnameError(true);
    }
    if (lastName === "") {
      setLastnameErorr(true);
    }
    if (password === "") {
      setPasswordErorr(true);
    }
    if (!validator.validate(email)) {
      setEmailError(!validator.validate(email));
    }
    if (selectedOption === "") {
      setSelectError(true);
    }
    if (selectyear === "") {
      setyearerorr(true);
    }
    if (selectday === "") {
      setselectdayerorr(true);
    }
    if (gender === "") {
      setGenderError(true);
    }
    console.log(firstName);

    if (
      firstName !== "" &&
      lastName !== "" &&
      password !== "" &&
      validator.validate(email) &&
      selectedOption !== "" &&
      selectyear !== "" &&
      selectday !== "" &&
      gender !== ""
    ) {
      const userData = {
        firstName,
        lastName,
        email,
        password,
        selectedOption,
        selectyear,
        selectday,
        gender,
      };

      localStorage.setItem("todos", JSON.stringify(userData));

      setIsLogin(true);

      navigate("/");
    }
  };

  const monthOptions = [
    { value: "1", label: "January" },
    { value: "2", label: "February" },
    { value: "3", label: "March" },
    { value: "4", label: "April" },
    { value: "5", label: "May" },
    { value: "6", label: "june" },
    { value: "7", label: "July" },
  ];
  const yearOptions = [
    { value: "2024", label: "2024" },
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
    { value: "2021", label: "2021" },
    { value: "2020", label: "2020" },
    { value: "2019", label: "2019" },
    { value: "2018", label: "2018" },
    { value: "2017", label: "2017" },
  ];
  const dayoptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7", label: "7" },
    { value: "8", label: "8" },
    { value: "9", label: "9" },
    { value: "10", label: "10" },
    { value: "11", label: "11" },
    { value: "12", label: "12" },
    { value: "13", label: "13" },
    { value: "14", label: "14" },
    { value: "15", label: "15" },
    { value: "16", label: "16" },
    { value: "17", label: "17" },
    { value: "18", label: "18" },
    { value: "19", label: "19" },
    { value: "20", label: "20" },
  ];
  return (
    <div class="row">
      <div class="col-4"></div>
      <div class="col-5">
        <div
          class="card   "
          style={{ marginTop: "100px", maxHeight: "900px", maxWidth: "410px" }}
        >
          <div class="card-header bg-white">
            <h3> Sign up</h3>
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
            <div class="row">
              <div className="col-md-6" style={{ maxHeight: "50px" }}>
                <Fristname
                  type="text"
                  className="form-control"
                  id="firstname"
                  name="firstName"
                  placeholder="Firstname"
                  value={firstName}
                  onChange={handleChange}
                />
                {firstnameerror && (
                  <p className="text-danger" style={{ fontSize: "10px" }}>
                    Please enter your first name
                  </p>
                )}
              </div>
              <div className="col-md-6" style={{ maxHeight: "50px" }}>
                <Fristname
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  placeholder="Lastname"
                  value={lastName}
                  onChange={handleChange}
                />
                {lastnameeror && (
                  <p className="text-danger" style={{ fontSize: "10px" }}>
                    Please enter your last name
                  </p>
                )}
              </div>
            </div>
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
            <div className="row">
              <div className="row">
                <div className="col-md-5">
                  <div className="mtm mbs _2_68">
                    <p className="fs-6 text-muted ">Date of birth</p>
                    <SelectDropdown
                      options={monthOptions}
                      onChange={handleChange}
                      name="selectedOption"
                    />
                  </div>
                  {selectError && (
                    <p className="text-danger" style={{ fontSize: "10px" }}>
                      select month{" "}
                    </p>
                  )}
                </div>

                <div className="col-md-4" style={{ marginTop: "26px" }}>
                  <div className="mtm mbs _2_68" style={{ marginTop: "16px" }}>
                    <SelectDropdown
                      options={yearOptions}
                      onChange={handleChange}
                      name="selectyear"
                    />
                  </div>
                  {selectyearerorr && (
                    <p className="text-danger" style={{ fontSize: "10px" }}>
                      select year
                    </p>
                  )}
                </div>
                <div className="col-md-3" style={{ marginTop: "26px" }}>
                  <div className="mtm mbs _2_68" style={{ marginTop: "16px" }}>
                    <SelectDropdown
                      options={dayoptions}
                      onChange={handleChange}
                      name="selectday"
                    />
                  </div>
                  {selectdayerorr && (
                    <p className="text-danger" style={{ fontSize: "10px" }}>
                      select day
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <p className="fs-6 text-muted ">SelectGender</p>
              <div
                className="col-md-4"
                style={{ maxHeight: "50px", fontSize: "15px" }}
              >
                <div className="card">
                  <div className="card-body" style={{ maxHeight: "45px" }}>
                    <Gender
                      name="gender"
                      value="Female"
                      label="Female"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              <div
                className="col-md-4"
                style={{ maxHeight: "100px", fontSize: "15px" }}
              >
                <div className="card">
                  <div className="card-body" style={{ maxHeight: "45px" }}>
                    <Gender
                      name="gender"
                      value="Male"
                      label="Male"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                {genderError && (
                  <p className="text-danger" style={{ fontSize: "10px" }}>
                    Please select your gender
                  </p>
                )}
              </div>
              <div
                className="col-md-4"
                style={{
                  maxHeight: "100px",
                  fontSize: "15px",
                  maxWidth: "40%",
                }}
              >
                <div className="card">
                  <div className="card-body" style={{ maxHeight: "45px" }}>
                    <Gender
                      name="gender"
                      value="Custom"
                      label="Custom"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
              {/* Add a fourth empty column if needed */}
              <div className="col-md-3"></div>
            </div>

            <div
              class="d-grid gap-2 col-6 mx-auto"
              style={{ marginTop: "15px" }}
            >
              <Button onClick={handleClick} />
            </div>
          </div>
        </div>
      </div>
      <div class="col-3 "></div>
    </div>
  );
}
