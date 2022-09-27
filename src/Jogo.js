import styled from "styled-components";

export default function Jogo({ forcas, atualizarErros, escolherPalavra, resultadoDojogo, palvraEscolhida }) {



    return (
        <ImgEbutao>
            <figure>
                <img src={forcas[atualizarErros]} data-identifier="game-image" />
            </figure>
            <div>
                <button onClick={escolherPalavra} data-identifier="choose-word">
                    Escolher palavra
                </button>
                <Palavra cor={resultadoDojogo} data-identifier="word">{palvraEscolhida}</Palavra>
            </div>
        </ImgEbutao>
    )
}

const ImgEbutao = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;

    img{
        width: 400px;
    }

    div{
        margin-left: 200px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
    }

    button{
        color: #f2f2f2;
        font-weight: bold;
        background-color: #2E8D16;
        width: 200px;
        height: 50px;
        margin-top: 40px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
    }
`

const Palavra = styled.p`
    color: ${(props) => props.cor};
    font-weight: bold;
    letter-spacing: 5px;
    font-size: 40px;
    margin-bottom: 40px;
`