import { useState } from "react";

const useInputs = (isValidFunction) => {
  const [enteredname, setEnteredName] = useState("");
  const [enterednameTouch, setEnteredNameTouch] = useState(false);

  const enterednameIsValid = isValidFunction(enteredname.trim());
  const errorInputname = !enterednameIsValid && enterednameTouch;

  const changeEnterednameHandler = (e) => {
    setEnteredName(e.target.value);
  };
  const nameInputBlurHandler = () => {
    setEnteredNameTouch(true);
  };
  const resetName = () => {
    setEnteredName("");
    setEnteredNameTouch(false);
  };
  return {
    enteredname,
    enterednameIsValid,
    errorInputname,
    changeEnterednameHandler,
    nameInputBlurHandler,
    setEnteredNameTouch,
    resetName,
  };
};
export default useInputs;
