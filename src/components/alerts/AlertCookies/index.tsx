

import { useEffect, useState } from "react"

import useLocalStorage from "@/hooks/useLocalStorage"

import * as S from "./styles"


const AlertCookies = (): JSX.Element => {
  const [isAuthCookies, setIsAuthCookies] = useLocalStorage("auth-cookies", false)
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (!isAuthCookies) {
      setShow(true)
    }
  }, [isAuthCookies])

  const handleClickClose = (): void => {
    setIsAuthCookies(true)
    setShow(false)
  }
  return show ? (
    <S.AlertCookies>
      <div className="card">
        <h4><i className='bx bxs-cookie'></i>Esse site usa cookies</h4>
        <p>Este site armazena cookies no seu navegador para melhorar a sua experiência. Ao continuar navegando no site, você concorda com o uso de cookies.</p>
        <button onClick={handleClickClose}>Aceitar</button>
      </div>
    </S.AlertCookies>
  ) : <></>
}


export default AlertCookies