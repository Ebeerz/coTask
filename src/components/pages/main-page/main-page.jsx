import Tabs from "../../blocks/tab/tabs";
import { Deadline, MainSection, ProjectHeader, ProjectName } from "./styles";
function MainPage (props){
  return (
    <>
      <ProjectHeader>
        <ProjectName>Название проекта</ProjectName>
        <Deadline>Дедлайн: 12.04.24</Deadline>
      </ProjectHeader>

      <MainSection>
        <Tabs {...props}/>
      </MainSection>
    </>
  );
}

export default MainPage;