import { StyledList, ListItem, ListName, ListContainer} from "./styles";
import DashboardModal from "../dashboard-modal/dashboard-modal";

function TasksList ({setModalActive, setModalContent, list, name}) {
    return (
        <ListContainer>
            <ListName>{name}</ListName>
            <StyledList>
                {list.map((task) => <ListItem key={task.id} onClick={() => {
                            setModalActive(true); setModalContent(<DashboardModal task={task} name={name}/>)
                        }}>{task.name}</ListItem>)}
            </StyledList>
        </ListContainer>
    )
}

export default TasksList;