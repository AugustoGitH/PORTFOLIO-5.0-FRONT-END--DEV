import { useEffect } from "react"

import { useRouter } from "next/router"


const Redirect = ({ href }: { href: string }): JSX.Element => {
  const navigation = useRouter()
  useEffect(() => {
    void navigation.push(href)
  }, [href, navigation])


  return <></>
}

export default Redirect