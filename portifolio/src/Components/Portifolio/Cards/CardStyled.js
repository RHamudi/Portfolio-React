import styled from 'styled-components'

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    background: #414141;
    border-radius: 5px;
    
    position: relative;

    &::after, &::before {
        content: "";
        position: absolute;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0;
        transition: transform 0.3s ease-in-out;
    } 

    &::before {
        border-left: 2px solid black;
        border-right: 2px solid black;
        transform: scaleY(0);
    }

    &::after {
        border-top: 2px solid black;
        border-bottom: 2px solid black;
        transform: scaleX(0);
    }

    &:hover::before {
        transform: scaleY(1);
    }

    &:hover::after {
        transform: scaleX(1);
    }
    
    h1 {
        padding: 20px;
        text-align: center;
        color: white;
    }

    img {
        border-radius: 5px 5px 0 0;
    }

`;