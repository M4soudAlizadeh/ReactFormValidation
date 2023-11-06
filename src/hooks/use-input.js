import { useState } from "react";

const useInput = (isValidFunction) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouch, setEnteredNameTouch] = useState(false);

  const enteredNameIsValid = isValidFunction(enteredName.trim());
  const error = !enteredNameIsValid && enteredNameTouch;

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const nameEnteredBlurHandler = (e) => {
    setEnteredNameTouch(true);
  };
  const reset = () => {
    setEnteredName("");
    setEnteredNameTouch(false);
  };

  return {
    enteredName,
    setEnteredNameTouch,
    enteredNameIsValid,
    error,
    nameInputChangeHandler,
    nameEnteredBlurHandler,
    reset,
  };
};
export default useInput;
