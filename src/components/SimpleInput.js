import useInput from "../hooks/use-input";

const SimpleInput = () => {
  const isValidNameFunction = (val) => val !== "";
  const isValidEmailFunction = (val) => val.includes("@");
  const {
    enteredName,
    setEnteredNameTouch,
    enteredNameIsValid,
    error,
    nameInputChangeHandler,
    nameEnteredBlurHandler,
    reset,
  } = useInput(isValidNameFunction);
  const {
    enteredName: enteredEmail,
    setEnteredNameTouch: setEnteredEmailTouch,
    enteredNameIsValid: enteredEmailIsValid,
    error: errorEmail,
    nameInputChangeHandler: emailInputChangeHandler,
    nameEnteredBlurHandler: emailEnteredBlurHandler,
    reset: resetEmail,
  } = useInput(isValidEmailFunction);

  let formIsValid = false;
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }
  const formSubmissionHandler = (e) => {
    e.preventDefault();
    setEnteredNameTouch(true);
    setEnteredEmailTouch(true);
    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }

    reset();
    resetEmail();
  };

  const nameInputClass = error ? "form-control invalid" : "form-control";
  const emailInputClass = errorEmail ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameEnteredBlurHandler}
          value={enteredName}
        />
        {error && (
          <p className="error-text">
            Input Name is empty, Please type your Name!
          </p>
        )}
      </div>
      <div className={emailInputClass}>
        <label htmlFor="name">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailInputChangeHandler}
          onBlur={emailEnteredBlurHandler}
          value={enteredEmail}
        />
        {errorEmail && (
          <p className="error-text">
            Input Name is empty, Please type your Name!
          </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
