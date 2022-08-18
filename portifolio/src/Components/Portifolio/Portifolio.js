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
          link="https://projeto-filmes-five.vercel.app"
          title="TMDB Projeto Filmes"
          src={filmes}
          alt="API TMDB Projeto Filmes"
        />
        <Cards
          link="https://site-imovi.vercel.app"
          title="Site imobiliaria"
          src={imovi}
          alt="Projeto Site imobiliaria"
        />
        <Cards
          link="https://projeto-cost-react.vercel.app"
          title="financeiro"
          src={costs}
          alt="Gerenciamento financeiro"
        />
        <Cards
          link="https://controle-financeiro-roan.vercel.app"
          title="financeiro simples"
          src={finances}
          alt="Gerenciamento financeiro simples"
        />
        <Cards
          link="https://gerador-senhas-ruby.vercel.app"
          title="Gerador senhas"
          src={senhas}
          alt="Gerador senhas"
        />
        <Cards
          link="https://lading-page-ballerini.vercel.app"
          title="Landing page ballerini"
          src={balle}
          alt="Landing page ballerini"
        />
        <Cards
          link="https://calculadora-js-kappa.vercel.app"
          title="Calculadora JS"
          src={calc}
          alt="Calculadora em javascript"
        />
      </Container>
    </>
  );
}

export default Portifolio;
