import { useState } from "react";
import * as S from "./styles";
import axios from "axios";
import * as UI from "../UIElements/UIElements";

interface PhoneProps {}

const Phone = ({}: PhoneProps) => {
  const [task, setTask] = useState([]);
  

  axios.get("http://localhost:4444/task").then((res) => {
    setTask(res.data);
  });

  const deleteTask = (id: number) => {
    axios.delete(`http://localhost:4444/task/${id}`).then((res) => {
      setTask(task.filter((task: any) => task.id !== id));
    });
  };

  return (
    <S.StyledPhone>
      <article>
        <h1>To Do</h1>
        <ul>
          {task.map((task: any) => (
            <UI.StyledTask status={task.status}>
              <span>
                <hr />
                <div>
                  <h2>{task.task}</h2>
                  <p>{task.description}</p>
                </div>
              </span>
              <span>
                <button type="button" onClick={() => deleteTask(task.id)}>
                  X
                </button>
              </span>
            </UI.StyledTask>
          ))}
        </ul>
      </article>
    </S.StyledPhone>
  );
};

export default Phone;
