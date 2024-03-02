import "./App.css";
import * as S from "../src/components/UIElements/UIElements";
import Form from "./components/Form/Form";
import Phone from "./components/Phone/Phone";

function App() {
  return (
    <>
      <S.StyledMain>
        <Form />
        <Phone />
      </S.StyledMain>
    </>
  );
}

export default App;
