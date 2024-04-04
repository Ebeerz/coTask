import { useContext } from "react";
import { UserContext } from "../../../context/user-context";
import { useNavigate } from "react-router-dom";

function ProfilePage (){
  const [, setToken] = useContext(UserContext);
  const navigate = useNavigate();
  const Logout = () => {setToken(null); navigate('/login')}
  return (
    <>
      Profile
      <button onClick={Logout}>Logout</button>
    </>
  );
}

export default ProfilePage;