import { StyledList, ListItem, ListName, ListContainer} from "./styles";
import ModalContent from "../roadModal/ModalContent";

function TasksList ({setModalActive, setModalContent, list, name}) {
    return (
        <ListContainer>
            <ListName>{name}</ListName>
            <StyledList>
                {list.map((task) => <ListItem key={task.id} onClick={() => {
                            setModalActive(true); setModalContent(<ModalContent task={task} name={name}/>)
                        }}>{task.name}</ListItem>)}
            </StyledList>
        </ListContainer>
    )
}

export default TasksList;