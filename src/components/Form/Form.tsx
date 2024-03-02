import axios from "axios";
import "../../App.css";
import * as S from "./styles";

const Form = () => {
  const addTask = () => {
    const task = document.getElementById("task") as HTMLInputElement;
    const description = document.getElementById(
      "description"
    ) as HTMLInputElement;
    const opcoes = document.getElementById("opcoes") as HTMLSelectElement;

    const body = {
      task: task.value,
      description: description.value,
      status: opcoes.value,
    };

    axios.post("http://localhost:4444/task", body).then((response) => {
      console.log(response);
    });
  };

  return (
    <S.StyledForm>
      <nav>
        <h1>To Do List</h1>
        <p>Simple ToDo List App UI</p>
      </nav>
      <div>
        <label htmlFor="">Task</label>
        <input type="text" id="task" placeholder="Task that you want todo" />
        <label htmlFor="">Description</label>
        <input
          type="text"
          id="description"
          placeholder="say somethin about u task"
        />
        <select id="opcoes" name="opcao">
          <option value="todo">To Do</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>
        <button type="button" onClick={addTask}>
          Add Task
        </button>
      </div>
    </S.StyledForm>
  );
};

export default Form;
