import { Card } from "./CardStyled"

function Cards({src, alt, title, link}) {
    return (
        <>
        <a href={link} target="_blank" rel="noreferrer">
        <Card>
            <img src={src} alt={alt} />
            <h1>{title}</h1>
        </Card>
        </a>
        </>
    )
}

export default Cards