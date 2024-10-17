import { useState } from "react";
import { Form, Input, Select, Button, DatePicker, Radio } from "antd";
import validator from "email-validator";
import { useNavigate } from "react-router-dom";
import useLocalStorageState from "use-local-storage-state";

const { Option } = Select;

export default function FromCard() {
  const [isLogin, setIsLogin] = useLocalStorageState("isLogin", false);
  const [user, setUser] = useLocalStorageState("user", false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [selectYear, setSelectYear] = useState("");
  const [selectDay, setSelectDay] = useState("");
  const [gender, setGender] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (value, name) => {
  if (name === "firstName") {
    setFirstName(value);
    setErrors((prevErrors) => ({ ...prevErrors, firstName: "" }));
  }
  if (name === "lastName") {
    setLastName(value);
    setErrors((prevErrors) => ({ ...prevErrors, lastName: "" }));
  }
  if (name === "password") {
    setPassword(value);
    setErrors((prevErrors) => ({ ...prevErrors, password: "" }));
  }
  if (name === "email") {
    setEmail(value);
    setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
  }
  if (name === "selectedOption") {
    setSelectedOption(value);
    setErrors((prevErrors) => ({ ...prevErrors, selectedOption: "" }));
  }
  if (name === "selectYear") {
    setSelectYear(value);
    setErrors((prevErrors) => ({ ...prevErrors, selectYear: "" }));
  }
  if (name === "selectDay") {
    setSelectDay(value);
    setErrors((prevErrors) => ({ ...prevErrors, selectDay: "" }));
  }
  if (name === "gender") {
    setGender(value);
    setErrors((prevErrors) => ({ ...prevErrors, gender: "" }));
  }
};

  const validateForm = () => {
    let formErrors = {};
    if (!firstName) formErrors.firstName = "Please enter your first name";
    if (!lastName) formErrors.lastName = "Please enter your last name";
    if (!password) formErrors.password = "Please enter your password";
    if (!validator.validate(email)) formErrors.email = "Please enter a valid email address";
    if (!selectedOption) formErrors.selectedOption = "Please select a month";
    if (!selectYear) formErrors.selectYear = "Please select a year";
    if (!selectDay) formErrors.selectDay = "Please select a day";
    if (!gender) formErrors.gender = "Please select your gender";
    return formErrors;
  };

  const handleClick = () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      const userData = { firstName, lastName, email, password, selectedOption, selectYear, selectDay, gender };
      setIsLogin(true);
      setUser(userData);
      navigate("/");
    } else {
      setErrors(formErrors);
    }
  };

  const monthOptions = [
    { value: "1", label: "January" },
    { value: "2", label: "February" },
    { value: "3", label: "March" },
    { value: "4", label: "April" },
    { value: "5", label: "May" },
    { value: "6", label: "June" },
    { value: "7", label: "July" },
  ];

  return (
    <div style={{ marginTop: "50px", display: "flex", justifyContent: "center" }}>
      <Form
        layout="vertical"
        style={{ width: "400px", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}
      >
        <h3>Sign up</h3>
        <p style={{ marginBottom: "20px" }}>It's quick and easy</p>

        <Form.Item
          label="First Name"
          validateStatus={errors.firstName ? "error" : ""}
          help={errors.firstName}
        >
          <Input
            placeholder="First Name"
            value={firstName}
            onChange={(e) => handleChange(e.target.value, "firstName")}
          />
        </Form.Item>

        <Form.Item
          label="Last Name"
          validateStatus={errors.lastName ? "error" : ""}
          help={errors.lastName}
        >
          <Input
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => handleChange(e.target.value, "lastName")}
          />
        </Form.Item>

        <Form.Item
          label="Email"
          validateStatus={errors.email ? "error" : ""}
          help={errors.email}
        >
          <Input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => handleChange(e.target.value, "email")}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          validateStatus={errors.password ? "error" : ""}
          help={errors.password}
        >
          <Input.Password
            placeholder="Password"
            value={password}
            onChange={(e) => handleChange(e.target.value, "password")}
          />
        </Form.Item>

        <Form.Item
          label="Date of Birth"
          validateStatus={errors.selectedOption ? "error" : ""}
          help={errors.selectedOption}
        >
          <Select
            placeholder="Select Month"
            onChange={(value) => handleChange(value, "selectedOption")}
          >
            {monthOptions.map((option) => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Select Year"
          validateStatus={errors.selectYear ? "error" : ""}
          help={errors.selectYear}
        >
          <DatePicker
            picker="year"
            onChange={(date, dateString) => handleChange(dateString, "selectYear")}
          />
        </Form.Item>

        <Form.Item
          label="Select Day"
          validateStatus={errors.selectDay ? "error" : ""}
          help={errors.selectDay}
        >
          <DatePicker
            picker="day"
            onChange={(date, dateString) => handleChange(dateString, "selectDay")}
          />
        </Form.Item>

        <Form.Item
          label="Gender"
          validateStatus={errors.gender ? "error" : ""}
          help={errors.gender}
        >
          <Radio.Group
            onChange={(e) => handleChange(e.target.value, "gender")}
            value={gender}
          >
            <Radio value="Female">Female</Radio>
            <Radio value="Male">Male</Radio>
            <Radio value="Custom">Custom</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item>
          <Button type="primary" onClick={handleClick}>
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
