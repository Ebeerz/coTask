import Tabs from "../../blocks/tab/tabs";
import Roadmap from "../../blocks/roadmap/roadmap";
import Dashboard from "../../blocks/dashboard/dashboard";
import { Deadline, MainSection, ProjectHeader, ProjectName } from "./styles";
function MainPage (props){

  const tabs = [
    { id: 1,
      name: 'Рабочая доска',
      content: <Roadmap {...props}/>,
    },
    { id: 2,
      name: 'Задачи',
      content: <Dashboard {...props}/>,
    }
  ]
  return (
    <>
      <ProjectHeader>
        <ProjectName>Название проекта</ProjectName>
        <Deadline>Дедлайн: 12.04.24</Deadline>
      </ProjectHeader>

      <MainSection>
        <Tabs {...props} tabs={tabs}/>
      </MainSection>
    </>
  );
}

export default MainPage;