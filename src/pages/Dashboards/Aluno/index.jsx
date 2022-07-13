import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../../../components/Footer";
import { UserContext } from "../../../contexts/User/UserContext";
import { api } from "../../../services/api";

import Header from "./Header";

import { ThemeMain, ThemeDiv, Container } from "./style.js";

const Aluno = () => {
  const history = useHistory();

  const { setUserContext } = useContext(UserContext);

  const [user, setUser] = useState({});

  useEffect(() => {
    api
      .get(`/users/${JSON.parse(localStorage.getItem("@WebSchool:UserId"))}`)
      .then((res) => {
        setUser(res.data);
        setUserContext(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Header rota="/" texto="Sair" />

      <ThemeMain f="column" m="0px 0px 200px 10%">
        <h1>Olá, {user.name} </h1>
        <Container
          w="90%"
          f="column"
          br="10px"
          p="20px 20px 20px 20px"
          g="15px"
          bc="var(--pink-1)"
        >
          <ThemeDiv onClick={() => history.push("/dashboard/aluno/notas")}>
            <h2>Notas</h2>
          </ThemeDiv>

          <ThemeDiv onClick={() => history.push("/dashboard/aluno/feedBack")}>
            <h2>FeedBacks</h2>
          </ThemeDiv>

          <ThemeDiv onClick={() => history.push("/dashboard/aluno/infoGerais")}>
            <h2>Informações Gerais</h2>
          </ThemeDiv>

          <ThemeDiv onClick={() => history.push("/dashboard/aluno/atividades")}>
            <h2>Atividades</h2>
          </ThemeDiv>
        </Container>
      </ThemeMain>
      <Footer />
    </>
  );
};

export default Aluno;