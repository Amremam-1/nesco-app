import styles from "./styles.module.scss";

const Input = ({ bg, isTextArea, rows, name, value, onChange, onBlur, label, labelId, inputType, placeHolder, errorMsg, isEmpty, forLogin, fullWidth, quarterWidthInput }) => {
  return (
    <div
      className={
        forLogin ? styles.inputBoxLogin
          : fullWidth ? styles.fullWidthInput
            : quarterWidthInput ? styles.quarterWidthInput
              : styles.inputBox
      }
    >
      {label ? <label className={styles.label} htmlFor={labelId}>{label}</label> : null}
      {
        isTextArea ? (
          <textarea
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className={isEmpty ? styles.inputEmpty : styles.input}
            type={inputType}
            placeholder={placeHolder} 
            rows={rows}
            style={{backgroundColor: bg}}
          />
        ): (
          <input
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className={isEmpty ? styles.inputEmpty : styles.input}
            type={inputType}
            placeholder={placeHolder}
            style={{backgroundColor: bg}}  
          />
        )
      }
      {errorMsg ? <span className={styles.errorMsg}>{errorMsg}</span> : null}
    </div>
  )
}

export default Input