import styled from 'styled-components'

export const Container = styled.div`
    padding-top: 1rem;
    margin-bottom: 0.8rem;
`;

export const MainC = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 1rem;

    @media (max-width: 40rem) {
            flex-direction: column;
            img {
                margin: auto;
                margin-right: 0px !important;
            }
    }

    div {
        padding: 5px;
        color: white;

        img {
            margin-right: 4rem;
            height: 20rem;
            border-radius: 50%;
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
    margin-top: 1rem;

    &:hover {
        background: #7996FC;
    }
`;