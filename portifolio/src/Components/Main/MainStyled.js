import styled from 'styled-components'


export const Container = styled.section`
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        padding: 5px;
        color: white;

        img {
            margin-right: 4rem;
        }

        p {
            font-size: 2rem;
        }
    }
`;

export const Bold = styled.span`
    font-size: 3rem;
    font-weight: bold;
`;

export const Button = styled.button`
    text-align: center;
    background: #414141;
    border-radius: 10px;
    color: white;
    padding: 10px 50px;
    margin-right: 10px;
    border: none;
    transition: 0.5s;
    margin-top: 4rem;

    &:hover {
        background: #7996FC;
    }
`;