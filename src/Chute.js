import styled from "styled-components";

export default function Chute({ destravarButao, setPalavraChutada, palavraChutada, chutarPalavra }) {

    return (
        <Rodapé>
            <input
                type="text"
                disabled={destravarButao}
                placeholder="Já sei a palavra!"
                onChange={(e) => setPalavraChutada(e.target.value)}
                value={palavraChutada}
                data-identifier="type-guess"
            />
            <button onClick={chutarPalavra} disabled={destravarButao} data-identifier="guess-button">Chutar</button>
        </Rodapé>
    )
}

const Rodapé = styled.footer`
    display: flex;
    justify-content: center;
    padding-bottom: 30px;

    input{
        height: 40px;
        border: 2px solid #528cba;
        border-radius: 5px;
        text-align: center;

        &:focus{
            color: black;
            outline: none;
        }
    }

    button{
        background-color: #e1ecf4;
        color: #528cba;
        font-weight: bold;
        width: 100px;
        height: 40px;
        margin-left: 15px;
        border: 1px solid #528cba;
        border-radius: 5px;
        cursor: pointer;
    }
`