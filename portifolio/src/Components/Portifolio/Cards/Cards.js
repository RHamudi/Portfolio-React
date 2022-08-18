import { Card, Button, Link } from "./CardStyled";

function Cards({ src, alt, title, link }) {
  return (
    <>
      <Card>
        <img src={src} alt={alt} />
        <h1>{title}</h1>
        <Link href={link} target="_blank" rel="noreferrer">
          <Button>Abrir</Button>
        </Link>
      </Card>
    </>
  );
}

export default Cards;
