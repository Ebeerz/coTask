import Profile from "../../blocks/profile/profile";
import MyTasks from "../../blocks/my-tasks/my-tasks";
import Tabs from "../../blocks/tabs/tabs";
import { MainSection } from "../main-page/styles";

function ProfilePage () {
  const tabs = [
    { id: 1,
      name: 'Профиль',
      content: <Profile/>,
    },
    { id: 2,
      name: 'Мои задачи',
      content: <MyTasks/>,
    }
  ]


  return (
    <MainSection>
      <Tabs tabs={tabs}/>
    </MainSection>
  );
}

export default ProfilePage;