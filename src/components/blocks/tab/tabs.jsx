// import getWelcomeMessage from "../../../server";
import Roadmap from "../roadmap/roadmap";
import { TabButton, TabContent, TabButtonContainer } from "./styles";
import { useState } from "react";
function Tabs (){
  const [activeTab, setActiveTab] = useState(1);

  const updateTab = (id) => {
    setActiveTab(id);
  }
  return (
    <>  
        <TabButtonContainer>
          <TabButton $isActive={activeTab===1} onClick={()=>{updateTab(1)}}>Рабочая доска</TabButton>
          <TabButton $isActive={activeTab===2} onClick={()=>updateTab(2)}>Задачи</TabButton>
        </TabButtonContainer>
        <TabContent $isActive={activeTab===1}>
          <Roadmap>

          </Roadmap>
        </TabContent>
        <TabContent $isActive={activeTab===2}>таб задачки</TabContent>
    </>
  );
}

export default Tabs;