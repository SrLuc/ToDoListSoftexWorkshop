import styled from "styled-components";

export const StyledForm = styled.article`
  width: 100%;
  background-color: #141313;
  padding: 40px;
  color: #f1f1f1;

  nav {
    h1 {
      font-size: 65px;
      margin-bottom: 0.5rem;
    }
    p {
      font-size: 18px;
      margin-bottom: 2rem;
      @media (max-width: 768px) {
        font-size: 27px;
      }
    }
  }

  div {
    display: flex;
    flex-direction: column;
    width: 100%;

    label {
      font-size: 18px;
      margin-bottom: 0.5rem;
    }

    input {
      width: 100%;
      padding: 15px;
      margin-bottom: 1rem;
      font-size: 20px;
      border: none;
      background-color: transparent;
      color: #f1f1f1;
      border-bottom: 1px solid #f1f1f1;
    }

    select {
      width: 100%;
      padding: 15px;
      margin-bottom: 1rem;
      font-size: 20px;

      background-color: #191919;
      color: #f1f1f1;

      option {
        background-color: #141313;
      }
    }

    button {
      width: 100%;
      padding: 15px;
      font-size: 20px;
      background-color: #f1f1f1;
      border: none;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        background-color: #3574f2;
        color: #f1f1f1;
      }
    }
  }
`;
