import styled from "styled-components";


interface ILoaderDefaultProps {
  color: "dark" | "light",
  size: "sm" | "md" | "lg"
}

export const LoaderDefault = styled.div<ILoaderDefaultProps>`
  .loader {
    border: ${({ size }) => size === "lg" ? "5px" : size === "md" ? "4px" : size === "sm" ? "2px" : ""} solid ${({ color }) => color === "dark" ? "var(--color-dark)" : "var(--color-light)"};
    border-left-color: transparent;
    border-radius: 50%;
    width: ${({ size }) => size === "lg" ? "45px" : size === "md" ? "36px" : size === "sm" ? "14px" : ""};
    height: ${({ size }) => size === "lg" ? "45px" : size === "md" ? "36px" : size === "sm" ? "14px" : ""};
    animation: spin89345 1s linear infinite;
  }

  @keyframes spin89345 {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

`