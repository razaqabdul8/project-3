import styled from 'styled-components';

export const BodyContainer = styled.div`
@media screen and (max-width: 480px) {
    width: 460px;
    margin: auto;
    padding: 30px;
    text-align: center;
}
`;

export const UserContent = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
align-items: center;
flex-direction: column;
`