const Form = ({ children, label, style }: any) => {
  return (
    <div className={`form-wrapper ${style || ""}`}>
      <label htmlFor={label} className="text-xs">
        {label}
      </label>
      {children}
    </div>
  );
};

export default Form;
