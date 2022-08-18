import Cards from "./Cards/Cards";
import { Container, H1 } from "./PortifolioStyled";
import dogs from "../../Assets/dogs.png";
import filmes from "../../Assets/filmes.png";
import imovi from "../../Assets/imovi.png";
import costs from "../../Assets/costs.png";
import finances from "../../Assets/controlefinanceiro.png";
import senhas from "../../Assets/geradorsenha.png";
import balle from "../../Assets/ballerini.png";
import calc from "../../Assets/calculadora.png";

function Portifolio() {
  return (
    <>
      <H1 className="animeLeft">Projetos</H1>
      <Container className="animeLeft">
        <Cards title="Rede social Dogs" src={dogs} alt="Rede social Dogs" />
        <Cards
          title="TMDB Projeto Filmes"
          src={filmes}
          alt="API TMDB Projeto Filmes"
        />
        <Cards
          title="Site imobiliaria"
          src={imovi}
          alt="Projeto Site imobiliaria"
        />
        <Cards title="financeiro" src={costs} alt="Gerenciamento financeiro" />
        <Cards
          title="financeiro simples"
          src={finances}
          alt="Gerenciamento financeiro simples"
        />
        <Cards title="Gerador senhas" src={senhas} alt="Gerador senhas" />
        <Cards
          title="Landing page ballerini"
          src={balle}
          alt="Landing page ballerini"
        />
        <Cards
          title="Calculadora JS"
          src={calc}
          alt="Calculadora em javascript"
        />
      </Container>
    </>
  );
}

export default Portifolio;
