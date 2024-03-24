/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react"
import { PersonName, Task, TaskName, TaskTime, Tree, MapModalHeading, MapModalTitle, MapModalProgress} from "./styles"
import Modal from "../../layout/modal/modal";
function Roadmap() {

    const [modalActive, setModalActive] = useState(false);
    const [currentTask, setCurrentTask] = useState("");
    const [loading, setLoading] = useState(false);
    // const [tasks, setTasks] = useState([]);

    // async function fetchTasks () {
    //     const requestOptions = {
    //         method: "GET",
    //         headers: {
    //           "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJmdWxsbmFtZSI6InRlc3QgVGVzdCIsInBvc2l0aW9uIjoidGVzdGluZyIsInRlYW0iOiJcdTA0MjFcdTA0MzVcdTA0M2NcdTA0NGNcdTA0NGZTYW1wbGUxODBCNloiLCJpZCI6Mn0.RFv4i-Tbk92WsGqu9SCWZCMNoyR1ljP-dzTqnHSAKck",
    //           "Content-Type": "application/json",
    //         },
    //       };
    //       setLoading(true);
    //     const response = await fetch("http://dggz.me:8000/api/data/roadmap?project_name=Sample1", requestOptions);
    //     // const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //     const tasks = await response.json();
    //     setTasks(tasks);
    //     setLoading(false);
    // }

    // useEffect(()=>{
    //     fetchTasks()
    // }, [])

    const tasks = [
        {
         "id": 1,
         "name": "Выбрать диван",
         "role": "Семья",
         "start_date": "2024-01-01",
         "end_date": "2024-05-01",
         "duration": 24,
         "parents": [],
         "children": [2],
         "risk_level": 0
        },
        {
         "id": 2,
         "name": "Заказать диван",
         "role": "Семья",
         "start_date": "2024-01-01",
         "end_date": "2024-05-01",
         "duration": 1,
         "parents": [1],
         "children": [3, 5],
         "risk_level": 1
        },
        {
         "id": 3,
         "name": "Собрать диван",
         "role": "Магазин",
         "start_date": "2024-03-01",
         "end_date": "2024-10-01",
         "duration": 48,
         "parents": [2],
         "children": [4],
         "risk_level": 1
        },
        {
         "id": 4,
         "name": "Доставить диван",
         "role": "Магазин",
         "start_date": "2024-05-01",
         "end_date": "2024-12-01",
         "duration": 32,
         "parents": [3],
         "children": [6],
         "risk_level": 2
        },
        {
         "id": 5,
         "name": "Купить инструменты",
         "role": "Семья",
         "start_date": "2024-03-01",
         "end_date": "2024-12-01",
         "duration": 2,
         "parents": [2],
         "children": [6],
         "risk_level": 0
        },
        {
         "id": 6,
         "name": "Собрать каркас",
         "role": "Семья",
         "start_date": "2024-09-01",
         "end_date": "2024-15-01",
         "duration": 6,
         "parents": [4, 5],
         "children": [7],
         "risk_level": 1
        },
        {
         "id": 7,
         "name": "Собрать остальное",
         "role": "Семья",
         "start_date": "2024-09-01",
         "end_date": "2024-15-01",
         "duration": 3,
         "parents": [6],
         "children": [],
         "risk_level": 2
        }
       ]

    const createContent = (task) => {
        return (
        <>
            <MapModalHeading>{task.name}</MapModalHeading>
            <MapModalTitle>Прогресс: 0%</MapModalTitle>
            <MapModalProgress></MapModalProgress>
            <MapModalTitle>Трудоемкость: {task.duration}</MapModalTitle>
            <MapModalTitle>Дата начала: {task.start_date}</MapModalTitle>
            <MapModalTitle>Дата завершения: {task.end_date}</MapModalTitle>
            <MapModalTitle>Зависит от: {task.parents.map(parent => tasks[parent-1].name+" ")} </MapModalTitle>
            <MapModalTitle>Уровень риска: {task.risk_level} </MapModalTitle>
            <MapModalTitle>Роль: {task.role} </MapModalTitle>
        </>
        )
    }

    
  return (
    <>
        {!loading && 
        <Tree>
            {tasks.map(task =>
            <Task $risk={task.risk_level} key={task.id} onClick={() => {setCurrentTask(task); setModalActive(true);}}>
                {task.name}
                <TaskTime> C {task.start_date} до {task.end_date}</TaskTime>
            </Task>)}
        </Tree>}
        
        {modalActive && <Modal setModalActive={setModalActive}>{createContent(currentTask)}</Modal>}
        
        
    </>
        

  )
}

export default Roadmap
