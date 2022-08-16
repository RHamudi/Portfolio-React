import CardsContatos from "./CardsContatos/CardsContatos";
import {ContainerContatos, H1} from './ContatosStyled'
import {FaWhatsappSquare, FaLinkedin} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'

function Contatos() {
  return (
    <>
    <H1>Principais Contatos</H1>
    <ContainerContatos>
      <div>
        <CardsContatos title="Email" dados="ramonramos.silva19@gmail.com" icon={<MdEmail/>} link='mailto:ramonramos.silva19@gmail.com'/>
        <CardsContatos title="Whtasapp" dados="(71) 99975-6279" icon={<FaWhatsappSquare/>} link='https://wa.me/7199756279'/>
        </div>
        <div>
        <CardsContatos title="Linkedin" dados="Ramon Ramos" icon={<FaLinkedin/>} link='https://www.linkedin.com/in/ramon-silva-5b9b78245/'/>
        <CardsContatos title="GitHub" dados="Username: RHamudi" link='https://github.com/RHamudi' />
        </div>
    </ContainerContatos>
    </>
  );
}

export default Contatos;
