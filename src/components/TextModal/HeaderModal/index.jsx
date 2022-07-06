import Logo2 from "../../../assets/img2.png";
import { ThemeDiv, ThemeHeader } from "./style";
import { FiMenu } from "react-icons/fi";
import { FiHome } from "react-icons/fi";
import { BiUserCircle } from "react-icons/bi";
import { VscBook } from "react-icons/vsc";
import { MdInsertInvitation } from "react-icons/md";
import { FiMail } from "react-icons/fi";

const HeaderModal = ({ closeModal }) => {
  return (
    <>
      <ThemeHeader f="row" w="50%" h="100px" bc="#68DAD8" j="space-around" a="center">
        <img src={Logo2} alt="Logo" />
        <FiMenu onClick={()=>closeModal()}/>
      </ThemeHeader>

      <ThemeDiv f="column" bc="#fff">

        <ThemeDiv a="center" g="20px" p="20px 0px  20px 20px" b="1px solid #E08692" bt="2px solid #E08692">
          <FiHome className="icon"/> <h2>Home</h2>
        </ThemeDiv>

        <ThemeDiv a="center" g="20px" p="20px 0px  20px 20px" b="1px solid #E08692">
          <BiUserCircle className="icon"/> <h2>Login</h2>
        </ThemeDiv>

        <ThemeDiv a="center" g="20px" p="20px 0px 20px 20px" b="1px solid #E08692">
          <VscBook className="icon"/> <h2>Cadastrar escola</h2>
        </ThemeDiv>

        <ThemeDiv a="center" g="20px" p="20px 0px 20px 20px" b="1px solid #E08692">
          <MdInsertInvitation className="icon"/> <h2>Eventos</h2>
        </ThemeDiv>

        <ThemeDiv a="center" g="20px" p="20px 0px 20px 20px" b="1px solid #E08692" bb="2px solid #E08692">
          <FiMail className="icon"/> <h2>Email para contato</h2>
        </ThemeDiv>

      </ThemeDiv>
    </>
  );
};

export default HeaderModal;
