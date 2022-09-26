import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import { useState } from "react";
import palavras from "./palavras";
import forca0 from "./imagens/forca0.png";
import forca1 from "./imagens/forca1.png";
import forca2 from "./imagens/forca2.png";
import forca3 from "./imagens/forca3.png";
import forca4 from "./imagens/forca4.png";
import forca5 from "./imagens/forca5.png";
import forca6 from "./imagens/forca6.png";

export default function App() {
    const alfabeto = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
        "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
        "u", "v", "w", "x", "y", "z"
    ]

    const forcas = [forca0, forca1, forca2, forca3, forca4, forca5, forca6];

    const [destravarButao, setDestravarButao] = useState(true);
    const [atualizarErros, setAtualizarErros] = useState(0);
    const [arrayPalavraAleatoria, setArrayPalavraAleatoria] = useState();
    const [palvraEscolhida, setPalvraEscolhida] = useState();

    function escolherPalavra() {
        setDestravarButao(false);
        setAtualizarErros(0);

        const indexAleatorio = Math.floor(Math.random() * palavras.length);
        const palavraAleatoria = palavras[indexAleatorio].split('');
        
        setArrayPalavraAleatoria(palavraAleatoria);
        setPalvraEscolhida(palavraAleatoria.map((l) => "_"));

        console.log(palavras[indexAleatorio]);
    }

    function test() {
        alert("Oii")
    }

    return (
        <>
            <GlobalStyle />

            <ImgEbutao>
                <figure>
                    <img src={forcas[atualizarErros]} />
                </figure>
                <div>
                    <button onClick={escolherPalavra}>
                        Escolher palavra
                    </button>
                    <p>{palvraEscolhida}</p>
                </div>
            </ImgEbutao>
            <Lista>
                {alfabeto.map((p, index) =>
                    <li key={index}>
                        <Letras disabled={destravarButao} onClick={test}>
                            {p}
                        </Letras>
                    </li>
                )}
            </Lista>
            <Rodapé>
                <input disabled={destravarButao} type="text" placeholder="Já sei a palavra!" />
                <button onClick={test} disabled={destravarButao}>Chutar</button>
            </Rodapé>
        </>
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

    p{
        font-weight: bold;
        letter-spacing: 5px;
        font-size: 40px;
        margin-bottom: 40px;
    }
`

const Lista = styled.ul`
    width: 660px;
    margin: 30px auto;
    padding-left: 10px;
    display: flex;
    flex-wrap: wrap;
`

const Letras = styled.button`
        background-color: ${(props) => props.disabled ? "#9faab5" : "#e1ecf4"};
        color: ${(props) => props.disabled ? "#79828c" : "#4a789d"};
        text-transform: uppercase;
        font-weight: bold;
        width: 40px;
        height: 40px;
        margin: 0 10px 10px 0;
        border: ${(props) => props.disabled ? "none" : "2px solid #4a789d"};
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
`

const Rodapé = styled.footer`
    display: flex;
    justify-content: center;

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