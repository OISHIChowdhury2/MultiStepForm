import { useState } from "react";
import FirstStep from "../../component/first";
import SecondStep from "../../component/second";
import ThirtStep from "../../component/third";
import loginform from "./loginform"

const signup = () => {
  const [registration, setRegistration] = useState({
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
  });

  const handleNextStep = () => {
    let newStep = registration.step + 1;
    setRegistration({ ...registration, step: newStep });
    
  };


  const handlePrevStep = () => {
    let prevStep = registration.step - 1;
    setRegistration({ ...registration, step: prevStep });

  };

  switch (registration.step) {
    case 1:
      return (
        <FirstStep
          nextStep={handleNextStep}
          setRegistration={setRegistration}
          registration={registration}

        />
      );
    case 2:
      return (
        <SecondStep
          nextStep={handleNextStep}
          prevStep={handlePrevStep}
          setRegistration={setRegistration}
          registration={registration}


        />
      );
      case 3:
        return (
          <ThirtStep

          nextStep={handleNextStep}
          prevStep={handlePrevStep}
          setRegistration={setRegistration}
          registration={registration}

         
  
          />
        );

        case 4:
          return (
            <loginform
            values={registration} 
       
            />
          );
  }
};

export default signup;
