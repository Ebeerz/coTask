import { useEffect, useState, useContext } from "react"
import { Task, TaskTime, Tree, MapModalHeading, MapModalTitle, MapModalProgress} from "./styles"
import { UserContext } from "../../../context/user-context";

function Roadmap({setModalActive, setModalContent}) {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [token] = useContext(UserContext);
    async function fetchTasks () {
        const requestOptions = {
            method: "GET",
            headers: {
              "Authorization": `Bearer ${token}`,
              "Content-Type": "application/json",
            },
        };
        setLoading(true);
        // const response = await 
        fetch("http://dggz.me:8000/api/data/roadmap?project_name=Sample44NN0D", requestOptions)
        .then(response => response.json())
        .then(
            (result) => {
                if (Array.isArray(result)) {
                    setLoading(false);
                    setTasks(result);
                }
                else {
                    setLoading(false)
                    setError(result);
                }
            }
        )   
    }

    useEffect(()=>{
        fetchTasks()
    }, [])

    function ModalContent(task) {
        return (
        <>
            <MapModalHeading>{task.name}</MapModalHeading>
            <MapModalTitle>Прогресс: 0%</MapModalTitle>
            <MapModalProgress></MapModalProgress>
            <MapModalTitle>Трудоемкость: {task.duration}</MapModalTitle>
            <MapModalTitle>Дата начала: {task.start_date}</MapModalTitle>
            <MapModalTitle>Дата завершения: {task.end_date}</MapModalTitle>
            <MapModalTitle>Зависит от: {task.parents.map(parent => tasks[parent-1].name+" ")}</MapModalTitle>
            <MapModalTitle>Уровень риска: {task.risk_level} </MapModalTitle>
            <MapModalTitle>Роль: {task.role} </MapModalTitle>
        </>
        )
    }

    if (error) {
        return <div>Ошибка: {JSON.stringify(error)}</div>;
    } else if (loading) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <>
                <Tree>
                    {tasks.map(task =>
                    <Task 
                        $risk={task.risk_level} key={task.id} 
                        onClick={() => {
                            setModalActive(true); setModalContent(ModalContent(task))
                        }}
                    >
                        {task.name}
                        <TaskTime> C {task.start_date} до {task.end_date}</TaskTime>
                    </Task>)}
                </Tree>   
            </>
        )
    }
}

export default Roadmap
