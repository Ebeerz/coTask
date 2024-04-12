import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/user-context";
import { Agreement, AgreementLink, Form, InputLabel, Role, RoleContainer, RoleInput, SubmitButton, TextInput, Title, AccountInfo, AccountInfoButton } from "./styles";

const Register = ({setTab}) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [team, setTeam] = useState("");
  const [position, setPosition] = useState("");
  const [, setToken] = useContext(UserContext);
  const navigate = useNavigate();
  
  const fakeTeam = 'СемьяSample44NN0D';
  const submitRegistration = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, hashed_password: password,
         fullname: fullname, team: fakeTeam, position: position }),
    };

    const response = await fetch("http://dggz.me:8000/api/users", requestOptions);
    const data = await response.json();
    console.log(data.access_token);

    if (!response.ok) {
      console.log(data.detail);
    } else {
      setToken(data.access_token);
      navigate('/');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitRegistration();
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validateForm = () => {
    return (validateEmail(email) && password.length >= 5 &&
     password === confirmationPassword && fullname && team && position)
  }

  return (
    <Form onSubmit={handleSubmit}>
        <Title>Регистрация</Title>
        <InputLabel>ФИО</InputLabel>
        <TextInput onChange={(e) => setFullname(e.target.value)} type='text' placeholder="Введите ФИО"/>
        <InputLabel>E-mail</InputLabel>
        <TextInput onChange={(e) => setEmail(e.target.value)} type='email' placeholder="Введите e-mail"/>
        <InputLabel>Пароль</InputLabel>
        <TextInput onChange={(e) => setPassword(e.target.value)} type='password' placeholder="Придумайте пароль (не менее 5 символов)"/>
        <InputLabel>Подтверждение пароля</InputLabel>
        <TextInput onChange={(e) => setConfirmationPassword(e.target.value)} type='password' placeholder="Повторите пароль"/>
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
        <TextInput type='text' onChange={(e) => setPosition(e.target.value)} placeholder="Введите свою должность"/>

        <SubmitButton type="submit" value="Зарегистрироваться" disabled={validateForm() ? false : true}/>
        <Agreement> 
          Регистрируясь, вы принимаете условия <AgreementLink href="">пользовательского соглашения</AgreementLink>
        </Agreement>

        <AccountInfo>Уже есть аккуант? <AccountInfoButton onClick={() => setTab('login')}>Войти</AccountInfoButton></AccountInfo>
    </Form>
  );
};

export default Register;