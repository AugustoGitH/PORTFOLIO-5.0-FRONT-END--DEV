import * as S from "./styles"

interface ILoaderDefaultProps {
  color: "dark" | "light",
  size?: "sm" | "md" | "lg"
}


const LoaderDefault = ({ color, size = "md" }: ILoaderDefaultProps): JSX.Element => {
  return (
    <S.LoaderDefault color={color} size={size}>
      <div className="loader">

      </div>
    </S.LoaderDefault>
  )
}

export default LoaderDefault