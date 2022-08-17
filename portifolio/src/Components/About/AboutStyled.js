import styled from 'styled-components'

export const Section = styled.section`
    display: flex;
    justify-content: center;
    color: white;
`;

export const DivMain = styled.div`
        width: 40rem;
        height: 13rem;
        background: #414141;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0px 0px 10px -3px #fff;

        h3 {
            text-align: center;
            width: 100%;
        }
        img {
            height: 60px;
        }
`;

export const ImgMain = styled.div`
    display: flex;
    height: 80%;
    gap: 10px;
    justify-content: center;
    align-items: center;
`;