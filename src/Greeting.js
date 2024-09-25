import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigationlink from "./Navigationlink";
import UserDetails from "./UserDetails";
import Username from "./Username";

export default function Greeting() {
 

  
  
  const [userData, setUserData] = useState("");

  useEffect(() => {
    const data = localStorage.getItem('todos');
    if (data) {
      const parsedData = JSON.parse(data);
      setUserData(parsedData);
    }
  }, []);

 
 


  const {
    firstName = "",
    lastName = "",
    email = "",
    password = "",
    selectedOption = "",
    selectyear = "",
    selectday = "",
    gender = "",
  } = userData;

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <a
              href="/"
              className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none"
            >
              <span className="fs-5 d-none d-sm-inline">Menu</span>
            </a>
            <Navigationlink />
            
            {/* Pass data to Username component */}
            <Username firstName={firstName} lastName={lastName} />
          </div>
        </div>
        <div className="col py-3">
          {/* Pass data to UserDetails component */}
          <UserDetails
            firstName={firstName}
            lastName={lastName}
            email={email}
            password={password}
            selectedOption={selectedOption}
            selectyear={selectyear}
            selectday={selectday}
            gender={gender}
          />
        </div>
      </div>
    </div>
  );
}
