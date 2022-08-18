import styled from 'styled-components'

export const Card = styled.div`
    display: flex;
    flex-direction: column;
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
        height: 150px;
        border-radius: 5px 5px 0 0;
    }

`;

export const Link = styled.a`
    z-index: 10000;
    margin: auto;
    margin-bottom: 1rem;
    text-decoration: none;
`;

export const Button = styled.button`
    background: #8C8C8C;
    border: none;
    color: white;
    border-radius: 10px;
    color: white;
    padding: 10px 30px;
    margin-right: 10px;
    border: none;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        background: #7996FC;
    }

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
`;

