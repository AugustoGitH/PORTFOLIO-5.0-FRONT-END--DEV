

import { forwardRef } from "react"

import * as S from "./styles"
import { type IInputDefaultProps } from "./types"

const Input = forwardRef<HTMLInputElement, IInputDefaultProps>(({ label, onClick, helperText, error = false, type, ...restPropsInput }, ref): JSX.Element => {
  return (
    <S.Input onClick={onClick} error={error}>
      <div className="input-content">
        <input required type={type} ref={ref} {...restPropsInput} />
        <span>{label}</span>
        <i></i>
      </div>
      {helperText && (<small className="helper-text">{helperText}</small>)}
    </S.Input>
  )
})

Input.displayName = "InputDefault"

export default Input