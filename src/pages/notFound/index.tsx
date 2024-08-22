import styled from 'styled-components';

const NotFoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #000;
    color: #fff;
    text-align: center;
    padding: 0 20px;
`;

const ErrorCode = styled.h1`
    font-size: 10rem;
    color: #C37D16;
    margin: 0;
`;

const Message = styled.p`
    font-size: 2rem;
    margin: 0;
`;

const Suggestion = styled.p`
    font-size: 1.5rem;
    margin-top: 1rem;
    color: #aaa;
`;

export default function NotFound() {
    return (
        <NotFoundContainer>
            <ErrorCode>404</ErrorCode>
            <Message>Página Não Encontrada</Message>
            <Suggestion>Oops! Não conseguimos encontrar a página que você está procurando.</Suggestion>
        </NotFoundContainer>
    );
};
