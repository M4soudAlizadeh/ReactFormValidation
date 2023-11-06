const Input = (props) => {
  const e = props.value;
  return (
    <>
      <input
        type="text"
        id="name"
        onChange={`changeEntered${e}Handler`}
        onBlur={`${e}InputBlurHandler`}
        value={`entered${e}`}
      />
      {`errorInput${e}` && <p>Please fill your `${e}` input!</p>}
    </>
  );
};
export default Input;
