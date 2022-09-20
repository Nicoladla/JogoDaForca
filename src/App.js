import palavras from "./palavras"

export default function App(){
    return (
        <ul>
            {palavras.map((p) => <li>{p}</li>)}
        </ul>
    )
}