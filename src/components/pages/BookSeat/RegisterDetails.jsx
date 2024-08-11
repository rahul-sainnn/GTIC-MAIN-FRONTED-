import "./RegisterDetails.css";
import { registrationDetailsData } from "./ticketData.js";

const RegisterDetails = () => {
  return (
    <div className="register-content">
      {registrationDetailsData.map((reg) => (
        <div className="reg-details">
          <h3>{ reg.title }</h3>
          <p> { reg.details } </p>
          <p></p>
        </div>
      ))}
    </div>
  );
};

export default RegisterDetails;
