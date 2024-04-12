import { useContext } from "react";
import { UserContext } from "../../../context/user-context";
import { ColumnList, ColumnName, MainContainer, Task, TaskList, TaskProperty, TeamColor } from "./styles";
import { useEffect, useState } from "react";
import { STATUSES } from "../../../util/util";

function MyTasks (){
    const [token] = useContext(UserContext);
    const [error, setError] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [taskList, setTaskList] = useState([]);

    function fetchTasks () {
      const requestOptions = {
          method: "GET",
          headers: {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json",
          },
      };
      // пока по пользователю нет задач
      // fetch("http://dggz.me:8000/api/user/tasks", requestOptions)
      fetch("http://dggz.me:8000/api/team/tasks", requestOptions)
      .then(response => response.json())
      .then(
          (result) => {
              if (Array.isArray(result)) {
                  setTaskList(result);
                  setLoaded(true);
                  setError('');
              }
              else if(!loaded){
                  setLoaded(true)
                  setError(result);
              }
          }
      )   
  }

  useEffect(()=>{
      fetchTasks()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    return (
      <MainContainer>
        <ColumnList>
          <ColumnName>Карточка</ColumnName>
          <ColumnName>Список</ColumnName>
          <ColumnName>Метки</ColumnName>
          <ColumnName>Дедлайн</ColumnName>
          <ColumnName>Проект</ColumnName>
        </ColumnList>
        <TaskList>
          {taskList.map((task) => 
            <Task key={task.id}>
              <TaskProperty>{task.name}</TaskProperty>
              <TaskProperty>{STATUSES[task.current_status]}</TaskProperty>
              <TeamColor></TeamColor>
              <TaskProperty>{task.end_date.split('T')[0]}</TaskProperty>
              <TaskProperty>Название проекта</TaskProperty>
            </Task>
          )}
        </TaskList>
      </MainContainer>
    );
  }
  
export default MyTasks;