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

import Jogo from "./Jogo";
import Letras from "./Letras";
import Chute from "./Chute";

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

            <Jogo
                forcas={forcas}
                atualizarErros={atualizarErros}
                escolherPalavra={escolherPalavra}
                resultadoDojogo={resultadoDojogo}
                palvraEscolhida={palvraEscolhida}
            />
            <Letras
                alfabeto={alfabeto}
                letrasClicadas={letrasClicadas}
                destravarButao={destravarButao}
                confirmarLetraEscolhida={confirmarLetraEscolhida}
            />
            <Chute
                destravarButao={destravarButao}
                setPalavraChutada={setPalavraChutada}
                palavraChutada={palavraChutada}
                chutarPalavra={chutarPalavra}
            />
        </>
    )
}