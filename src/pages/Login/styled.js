import styled, { keyframes } from "styled-components";

const slideForm = keyframes`
  0%{
    transform: translateX(50px);
    opacity: 0;
  }

  100%{
    transform: translateX(0px);
    opacity: 1;
  }
`;

export const MainLogin = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: var(--body);
  align-items: center;
  display: flex;
  min-width: 350px;

  @media (max-width: 800px) {
    .MainLoginDiv {
      display: none;
    }

    .MainLoginForm {
      width: 100vw;
    }

    .form {
      width: 40%;
    }
  }

  @media (max-width: 600px) {
    .MainLoginDiv {
      display: none;
    }

    .MainLoginForm {
      width: 100vw;
    }

    .form {
      width: 50%;
    }
  }

  @media (max-width: 500px) {
    .MainLoginDiv {
      display: none;
    }

    .MainLoginForm {
      width: 100vw;
    }

    .form {
      width: 60%;
    }
  }
`;

export const MainLoginDiv = styled.div`
  width: 50vw;
  height: 100vh;
  background-color: ${(props) => props.bc};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;

  img {
    width: 80%;
    object-fit: cover;
  }
`;

export const FormLogin = styled.form`
  width: 25vw;
  height: 60vh;
  background-color: var(--blue-0);
  border-radius: 1vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4vh;

  animation: ${slideForm} 0.5s linear;
  transition: 0.3s;

  .Input {
    width: 80%;
    height: 6vh;
    background-color: var(--grey-0);
    border-radius: 1vh;
    text-decoration: none;
    border: none;
    padding-left: 14px;
  }

  .showPassword {
    position: relative;
    height: 10vh;
    right: -8.5vw;
    top: -12vh;
  }

  @media (max-width: 500px) {
    .showPassword {
      right: -20vw;
    }
  }

  @media (max-width: 600px) and (min-width: 500px) {
    .showPassword {
      right: -18vw;
    }
  }

  @media (max-width: 800px) and (min-width: 600px) {
    .showPassword {
      right: -14vw;
    }
  }

  .error {
    position: absolute;
    color: var(--error);
    font-size: 2.3vh;
    height: 2vh;
  }

  .error:nth-child(5) {
    top: 51.5vh;
  }

  .error:nth-child(3) {
    top: 41.5vh;
    color: var(--error);
    font-size: 2.3vh;
    height: 2vh;
  }

  button {
    width: 80%;
    background-color: var(--pink-0);
    color: var(--body);
    margin-top: -8vh;

    &:hover {
      background-color: var(--pink-1);
      transition: 0.3s;
    }
  }

  .Link {
    text-decoration: none;
  }

  .Link:hover {
    cursor: pointer;
  }
`;