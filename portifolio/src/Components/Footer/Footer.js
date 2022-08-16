import { FooterContainer } from "./FooterStyled";
import { FaWhatsappSquare, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <FooterContainer>
      <a
        href="https://api.whatsapp.com/send/?phone=71999756279&text&type=phone_number&app_absent=0"
        target="_blank"
        rel="noreferrer"
      >
        <FaWhatsappSquare />
      </a>
      <a
        href="https://www.linkedin.com/in/ramon-silva-5b9b78245/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
    </FooterContainer>
  );
}

export default Footer;
