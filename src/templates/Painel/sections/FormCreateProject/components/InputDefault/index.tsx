

import { forwardRef} from "react"

import * as S from "./styles"
import { type IInputDefaultProps } from "./types"

const InputDefault = forwardRef<HTMLInputElement, IInputDefaultProps>(({ label, onClick, helperText, error = false, type, ...restPropsInput }, ref): JSX.Element => {
  return (
    <S.InputDefault onClick={onClick}>
      <input required type={type} ref={ref} {...restPropsInput} />
      <span>{label}</span>
      <i></i>
    </S.InputDefault>
  )
})

InputDefault.displayName = "InputDefault"

export default InputDefault