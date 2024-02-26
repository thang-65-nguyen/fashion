import React from "react";
class Input extends React.Component {
  render() {
    const { id, inputRef, label, labelSize, required, ...others } = this.props;
    const labelClass = `col-sm-${labelSize ? labelSize : 4} col-form-label ${
      required ? "required " : " "
    }`;
    return (
      <div className={`row $(lastRow > " " : mb-3)`}>
        <label htmlFor={id} className={labelClass}>
          {label}
        </label>
        <div className="col-sm mb-3">
          <input ref={inputRef} className="form-control" id={id} {...others} />
        </div>
      </div>
    );
  }
}
export default Input;
