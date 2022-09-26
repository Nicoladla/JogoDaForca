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

    const [arrayPalavraAleatoria, setArrayPalavraAleatoria] = useState([]);
    const [palvraEscolhida, setPalvraEscolhida] = useState([]);
    const [letrasClicadas, setLetrasClicadas] = useState([]);

    const [palavraChutada, setPalavraChutada] = useState("");
    const [resultadoDojogo, setResultadoDojogo] = useState("black")

    function reiniciarJogo() {
        setLetrasClicadas([])

        setPalavraChutada("")

        setResultadoDojogo("black")

        setAtualizarErros(0);
    }

    function escolherPalavra() {

        reiniciarJogo()

        setDestravarButao(false);

        const indexAleatorio = Math.floor(Math.random() * palavras.length);
        const palavraAleatoria = palavras[indexAleatorio].split('');

        setArrayPalavraAleatoria(palavraAleatoria);
        setPalvraEscolhida(palavraAleatoria.map((l) => "_"));
    }

    function atualizarPalavraEscolhida(palavraSemAcento, letraClicada) {
        const palavraAtualizada = [...palvraEscolhida];

        arrayPalavraAleatoria.forEach((l, i) => {

            if (letraClicada === palavraSemAcento[i]) {
                palavraAtualizada[i] = l;

            }
        })

        finalizarJogoGanhou(palavraAtualizada)

        return palavraAtualizada;
    }

    function confirmarLetraEscolhida(letraClicada, index) {

        setLetrasClicadas([...letrasClicadas, index])

        const palavra = arrayPalavraAleatoria.join("");
        const palavraSemAcento = palavra.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

        if (palavraSemAcento.includes(letraClicada)) {
            setPalvraEscolhida(atualizarPalavraEscolhida(palavraSemAcento, letraClicada))

        } else {
            setAtualizarErros(atualizarErros + 1);
            finalizarJogoPerdeu(atualizarErros + 1);
        }
    }

    function chutarPalavra() {
        const palavraDoJogo = arrayPalavraAleatoria.join("");

        if (palavraChutada === palavraDoJogo) {
            finalizarJogoGanhou(palavraDoJogo);

        } else {
            setAtualizarErros(6);
            finalizarJogoPerdeu(6);
        }
    }

    function finalizarJogoPerdeu(errosAtualizados) {

        if (errosAtualizados === 6) {
            setResultadoDojogo("red");
            setPalvraEscolhida([...arrayPalavraAleatoria])
            setDestravarButao(true);

        }
    }

    function finalizarJogoGanhou(palavraAtualizada) {

        if (!palavraAtualizada.includes("_")) {
            setResultadoDojogo("green")
            setDestravarButao(true);

            setPalvraEscolhida([...arrayPalavraAleatoria])
        }
    }

    return (
        <>
            <GlobalStyle />

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
            <Lista>
                {alfabeto.map((l, index) =>
                    <li key={index}>
                        <Letras
                            disabled={letrasClicadas.includes(index) ? true : destravarButao}
                            onClick={() => confirmarLetraEscolhida(l, index)}
                            data-identifier="letter"
                        >
                            {l}
                        </Letras>
                    </li>
                )}
            </Lista>
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
`

const Palavra = styled.p`
    color: ${(props) => props.cor};
    font-weight: bold;
    letter-spacing: 5px;
    font-size: 40px;
    margin-bottom: 40px;
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