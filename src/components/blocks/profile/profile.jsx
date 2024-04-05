import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../../context/user-context";
import { useNavigate } from "react-router-dom";
import { ProfileContainer, Form, Line, InputLabel, SideSection, TextInput, Role, RoleContainer, RoleInput, SubmitButton, LogoutButton } from "./styles";
function Profile (){
    
    const [token, setToken] = useContext(UserContext);
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [team, setTeam] = useState("");
    const [position, setPosition] = useState("");
    const [error, setError] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

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
      fetch("http://dggz.me:8000/api/users/me", requestOptions)
      .then(response => response.json())
      .then(
        (user) => {
          console.log(user);
          setFullname(user.fullname);
          setEmail(user.email);
          setTeam(user.team);
          setPosition(user.position);
          setLoaded(true)
        }
      )
      .catch(
        (error) => {
          setLoaded(true);
          setError(error);
        }
      )
    }

    useEffect(()=>{
        fetchTasks()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const logout = () => {setToken(null); navigate('/login')}

    const validateEmail = (email) => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
    
    const validateForm = () => {
      return (validateEmail(email) && password.length >= 5 &&
      fullname && team && position)
    }

    if (error) {
      return <div>Ошибка: {JSON.stringify(error)}</div>;
  } else if (!loaded) {
      return <div>Загрузка...</div>;
  } else {
      return (
          <ProfileContainer>
            <Form>
                <SideSection>
                    <InputLabel>ФИО</InputLabel>
                    <TextInput onChange={(e) => setFullname(e.target.value)} type='text' value={fullname} placeholder="Введите ФИО"/>
                    <InputLabel>E-mail</InputLabel>
                    <TextInput onChange={(e) => setEmail(e.target.value)} type='email' value={email} placeholder="Введите e-mail"/>
                    <InputLabel>Пароль</InputLabel>
                    <TextInput onChange={(e) => setPassword(e.target.value)} type='password' value={password} placeholder="Придумайте пароль (не менее 5 символов)"/>
                </SideSection>
                <Line/>
                <SideSection>
                    <InputLabel>Роль</InputLabel>
                    <RoleContainer>
                        <RoleInput type="radio" name="role" id="designer" value="designer" onChange={(e) => setTeam(e.target.value)}/>
                        <Role htmlFor="designer">Дизайнер</Role>

                        <RoleInput type="radio" name="role" id="developer" value="developer" onChange={(e) => setTeam(e.target.value)}/>
                        <Role htmlFor="developer">Разработчик</Role>

                        <RoleInput type="radio" name="role" id="manager" value="manager" onChange={(e) => setTeam(e.target.value)}/>
                        <Role htmlFor="manager">Менеджер</Role>

                        <RoleInput type="radio" name="role" id="data_scientist" value="data_scientist" onChange={(e) => setTeam(e.target.value)}/>
                        <Role htmlFor="data_scientist">Data scientist</Role>

                        <RoleInput type="radio" name="role" id="tester" value="tester" onChange={(e) => setTeam(e.target.value)}/>
                        <Role htmlFor="tester">Тестировщик</Role>
                    </RoleContainer>
                    <InputLabel>Должность</InputLabel>
                    <TextInput type='text' onChange={(e) => setPosition(e.target.value)} value={position} placeholder='Введите вашу должность'/>
                </SideSection>
            {/* Profile
            <button onClick={Logout}>Logout</button> */}
            </Form>
            <SubmitButton type="submit" value="Сохранить изменения" disabled={validateForm() ? false : true}/>
            <LogoutButton onClick={logout}>Выйти из аккаунта</LogoutButton>
          </ProfileContainer>
      )
  }

  }
  
  export default Profile;