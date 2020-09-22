import React from "react";
import TextField from "@material-ui/core/TextField";

export default function Input(props) {
  const {
    form,
    name,
    id,
    placeholder,
    label,
    type,
    className,
    errorMsg,
    fullWidth,
    required,
    variant,
    multiline,
    rows = 3,
  } = props;
  const hasError = !!(form.errors && form.errors[name]);

  return (
    <>
      <TextField
        variant={variant || "outlined"}
        error={hasError}
        fullWidth={fullWidth}
        multiline={multiline}
        rows={rows}
        required={required}
        className={className}
        id={id}
        type={type}
        label={label}
        placeholder={placeholder}
        InputLabelProps={{
          shrink: true,
        }}
        onFocus={form.onFocus(name)}
        onBlur={form.onBlur}
        value={form.values[name] || ""}
        onChange={(event) => form.onChange(name, event.target.value)}
        helperText={hasError ? errorMsg : ""}
      />
    </>
  );
}
