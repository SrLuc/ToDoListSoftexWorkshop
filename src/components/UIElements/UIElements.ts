import styled from "styled-components";

export const StyledMain = styled.main`
  display: flex;
  justify-content: center;

  section {
    width: 100%;
    height: 100%;
    display: flex;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const StyledTask = styled.li<{ status: string | undefined }>`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 15px;
  border-radius: 30px;
  background-color: #191919;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  span {
    display: flex;
    justify-content: left;
    align-items: center;

    hr {
      width: 15px;
      height: 100%;
      margin: 0 10px;
      border-radius: 50px;
      border: none;
      background-color: ${(props) => {
        switch (props.status) {
          case "todo":
            return "#F20505";
          case "doing":
            return "#F2D230";
          case "done":
            return "#19A603";
        }
      }};
    }

    div {
      color: #f1f1f1;
      h2 {
        font-size: 22px;
        margin-bottom: 0.5rem;
      }

      p {
        font-size: 16px;
      }
    }

    button {
      background-color: #f1f1f1;
      color: white;
      border: none;
      width: 45px;
      height: 45px;
      border-radius: 50px;
      font-size: 22px;
      cursor: pointer;
    }
  }
`;
