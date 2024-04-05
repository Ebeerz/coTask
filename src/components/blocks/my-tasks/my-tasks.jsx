import { useContext } from "react";
import { UserContext } from "../../../context/user-context";

function MyTasks (){
    const [token] = useContext(UserContext);

    return (
      <>
        Список моих задач
      </>
    );
  }
  
  export default MyTasks;