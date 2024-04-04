import { useEffect, useState, useContext } from "react"
import TasksList from "../tasksList/tasksList";
import { DashboardContainer } from "./styles";
import { UserContext } from "../../../context/user-context";


function Dashboard(props) {
    
    const [token] = useContext(UserContext);
    const [error, setError] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const [lists, setLists] = useState({
        'backlog': [],
        'to-do': [],
        'in process': [],
        'finished': [],
    });

    function fetchTasks () {
        const requestOptions = {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        };
        // setLoading(true);
        // const response = await 
        fetch("http://dggz.me:8000/api/data/tasks", requestOptions)
        .then(response => response.json())
        .then(
            (result) => {
                if (Array.isArray(result)) {
                    let newLists = Object.assign({}, lists);
                    result.forEach((task) => {
                        if (!newLists[task.current_status].includes(task)) {
                            newLists[task.current_status].push(task);
                        }
                    });
                    setLists(newLists);
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

    if (error) {
        return <div>Ошибка: {JSON.stringify(error)}</div>;
    } else if (!loaded) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <DashboardContainer>  
                <TasksList {...props} list={lists['backlog']} name='Новые задачи'/>
                <TasksList {...props} list={lists['to-do']} name='Взять в работу'/>
                <TasksList {...props} list={lists['in process']} name='В процессе'/>
                <TasksList {...props} list={lists['finished']} name='Готовые задачи'/>
            </DashboardContainer>
        )
    }
}

export default Dashboard
