const FormInput = ({
  name,
  type,
  placeholder,
  // data,
  errorInfo,
  handleFormChange,
}) => {
  return (
    <div className="field">
      <label htmlFor={name}>{name}</label>
      <input
        type={type}
        id={name}
        name={name}
        // value={data[name]}
        onChange={handleFormChange}
      />
      {errorInfo.errors?.[name] ? (
        <p className="error">{errorInfo.errors[name]}</p>
      ) : (
        <></>
      )}
    </div>
  )
}

export default FormInput
