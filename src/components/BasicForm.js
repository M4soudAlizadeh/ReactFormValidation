import useInputs from "../hooks/use-inputs";
const BasicForm = (props) => {
  const isValidName = (name) => name !== "";
  const isValidEmail = (name) => name.includes("@");
  const {
    enteredname,
    enterednameIsValid,
    errorInputname,
    changeEnterednameHandler,
    nameInputBlurHandler,
    setEnteredNameTouch,
    resetName,
  } = useInputs(isValidName);
  const {
    enteredname: enteredLast,
    enterednameIsValid: enteredLastIsValid,
    errorInputname: errorInputLast,
    changeEnterednameHandler: changeEnteredLastHandler,
    nameInputBlurHandler: lastInputBlurHandler,
    setEnteredNameTouch: setEnteredLastTouch,
    resetName: resetLast,
  } = useInputs(isValidName);
  const {
    enteredname: enteredEmail,
    enterednameIsValid: enteredEmailIsValid,
    errorInputname: errorInputEmail,
    changeEnterednameHandler: changeEnteredEmailHandler,
    nameInputBlurHandler: emailInputBlurHandler,
    setEnteredNameTouch: setEnteredEmailTouch,
    resetName: resetEmail,
  } = useInputs(isValidEmail);
  let formIsValid = false;
  if (enterednameIsValid && enteredLastIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }
  const submitHandler = (e) => {
    e.preventDefault();
    setEnteredNameTouch(true);
    setEnteredLastTouch(true);
    setEnteredEmailTouch(true);
    if (!formIsValid) {
      return;
    }
    resetName();
    resetLast();
    resetEmail();
  };
  const inputNameClass = errorInputname
    ? "form-control invalid"
    : "form-control";
  const inputLastClass = errorInputLast
    ? "form-control invalid"
    : "form-control";
  const inputEmailClass = errorInputEmail
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={inputNameClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={changeEnterednameHandler}
            onBlur={nameInputBlurHandler}
            value={enteredname}
          />
          {errorInputname && (
            <p className="error-text">Please fill your name input!</p>
          )}
        </div>
        <div className={inputLastClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="last"
            onChange={changeEnteredLastHandler}
            onBlur={lastInputBlurHandler}
            value={enteredLast}
          />
          {errorInputLast && (
            <p className="error-text">Please fill your last name input!</p>
          )}
        </div>
      </div>
      <div className={inputEmailClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="email"
          onChange={changeEnteredEmailHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {errorInputEmail && (
          <p className="error-text">
            Please fill your Email address input correctly!
          </p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
