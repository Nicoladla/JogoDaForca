import styled from "styled-components"
import GlobalStyle from "./GlobalStyle"
import palavras from "./palavras"
import forca0 from "./imagens/forca0.png"
import forca1 from "./imagens/forca1.png"
import forca2 from "./imagens/forca2.png"
import forca3 from "./imagens/forca3.png"
import forca4 from "./imagens/forca4.png"
import forca5 from "./imagens/forca5.png"
import forca6 from "./imagens/forca6.png"

export default function App() {
    const alfabeto = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
        "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
        "u", "v", "w", "x", "y", "z"
    ]

    return (
        <>
            <GlobalStyle />

            <ImgEbutao>
                <figure>
                    <img src={forca0} />
                </figure>
                <button>
                    Escolher palavra
                </button>
            </ImgEbutao>
            <Lista>
                {alfabeto.map((p, index) => <li key={index}>{p}</li>)}
            </Lista>
            <Rodapé>
                <input type="text" placeholder="Já sei a palavra!" />
                <button>Chutar</button>
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

    button{
        color: #f2f2f2;
        font-weight: bold;
        background-color: #2E8D16;
        width: 200px;
        height: 50px;
        margin-top: 50px;
        margin-left: 200px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
    }
`

const Lista = styled.ul`
    width: 660px;
    margin: 30px auto;
    padding-left: 10px;
    display: flex;
    flex-wrap: wrap;

    li{
        background-color: #9faab5;
        color: #79828c;
        text-transform: uppercase;
        font-weight: bold;
        width: 40px;
        height: 40px;
        margin: 0 10px 10px 0;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
`

const Rodapé= styled.footer`
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