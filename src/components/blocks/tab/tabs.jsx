import Dashboard from "../dashboard/dashboard";
import Roadmap from "../roadmap/roadmap";
import { TabButton, TabButtonContainer, TabContent } from "./styles";
import { useState } from "react";
function Tabs (props){
  const [activeTab, setActiveTab] = useState(1);

  const updateTab = (id) => {
    setActiveTab(id);
  }

  return (
    <>  
      <TabButtonContainer>
        <TabButton $isActive={activeTab===1} onClick={()=>updateTab(1)}>Рабочая доска</TabButton>
        <TabButton $isActive={activeTab===2} onClick={()=>updateTab(2)}>Задачи</TabButton>
      </TabButtonContainer>
      <TabContent $isActive={activeTab===1}>
        <Roadmap {...props}/>
      </TabContent>
      <TabContent $isActive={activeTab===2}>
        <Dashboard {...props}/>
      </TabContent>
    </>
  );
}

export default Tabs;