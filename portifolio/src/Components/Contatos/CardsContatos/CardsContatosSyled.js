import styled from "styled-components";

export const Container = styled.div`
    width: 20rem;
    padding: 2rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    background: #404040;
    color: white;
    margin: 1rem 2rem;
    `;

export const Button = styled.button`
    text-align: center;
    background: #8C8C8C;
    border-radius: 10px;
    color: white;
    padding: 10px 50px;
    margin-right: 10px;
    border: none;
    transition: 0.5s;
    margin-top: 1rem;

    &:hover {
        background: #7996FC;
    }
`;