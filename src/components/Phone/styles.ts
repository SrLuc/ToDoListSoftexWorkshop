import styled from "styled-components";

export const StyledPhone = styled.section`
  display: flex;
  justify-content: center;
  align-items: end;
  background-color: #141313;

  article {
    background-color: #1e1e1e;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    border-radius: 10px 10px 0 0;
    padding: 40px;
    height: 800px;
    width: 70%;
    overflow-y: auto;

    @media (max-width: 768px) {
      width: 75%;
      height: 100%;
      border-radius: 40px 40px 0 0;
    }

    h1 {
      font-size: 60px;
      margin-bottom: 1rem;
      color: #f1f1f1;
    }

    ul {
      list-style: none;
      display: flex;
      flex-direction: column-reverse; /* para rolar de cima para baixo */
      padding: 0;
      margin: 0;
    }
  }
`;
