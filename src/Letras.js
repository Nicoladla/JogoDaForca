import styled from "styled-components";

export default function Letras({ alfabeto, letrasClicadas, destravarButao, confirmarLetraEscolhida }) {

    return (
        <Lista>
            {alfabeto.map((l, index) =>
                <li key={index}>
                    <Letra
                        disabled={letrasClicadas.includes(index) ? true : destravarButao}
                        onClick={() => confirmarLetraEscolhida(l, index)}
                        data-identifier="letter"
                    >
                        {l}
                    </Letra>
                </li>
            )}
        </Lista>
    )
}

const Lista = styled.ul`
    width: 660px;
    margin: 30px auto;
    padding-left: 10px;
    display: flex;
    flex-wrap: wrap;
`

const Letra = styled.button`
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