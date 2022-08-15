import { Card } from "./CardStyled"

function Cards({src, alt, title}) {
    return (
        <Card>
            <img src={src} alt={alt} />
            <h1>{title}</h1>
        </Card>
    )
}

export default Cards