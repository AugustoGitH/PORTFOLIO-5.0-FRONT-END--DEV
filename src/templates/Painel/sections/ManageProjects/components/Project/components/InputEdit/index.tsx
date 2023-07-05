/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react"

import * as S from "./styles"

interface IInputEditProps {
  value?: string | number,
  placeholcer?: string,
  onChange: (value: string | number) => void,
  edited?: boolean,
  onEdit: () => void
}

const InputEdit = ({ value, placeholcer, onChange, edited = false, onEdit }: IInputEditProps): JSX.Element => {
  const [valueInput, setValueInput] = useState(value ?? "")

  const inputRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    onChange(valueInput)
  }, [valueInput])


  useEffect(() => {
    setValueInput(value ?? valueInput)
  }, [value])

  useEffect(() => {
    if (inputRef.current && edited) {
      inputRef.current?.focus()
    }
  }, [edited])


  return (
    <S.InputEdit>
      <input
        ref={inputRef}
        style={{ background: edited ? "#fff" : "" }}
        disabled={!edited}
        value={valueInput}
        placeholder={placeholcer ?? ""}
        onChange={e => { setValueInput(e.target.value); }}
      />
      <button onClick={onEdit}>{edited ? "Concluir" : "Editar"}</button>
    </S.InputEdit>
  )
}
export default InputEdit