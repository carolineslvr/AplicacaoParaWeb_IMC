import { useState } from "react";

function Calculo() {

    const mensagemAlerta = (mensagem) => {
        alert(mensagem);
      }
    

    const [peso, setPeso] = useState(null);
    const [altura, setAltura] = useState(null);
    const [resultado, setResultado] = useState(null);
    const [categoria, setCategoria] = useState(null);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div>
                <label><b>Peso: </b></label>
                <input type="number" value={peso} onChange={e => setPeso(e.target.value)} />
            </div>
            <br></br>
            <div>
                <label><b>Altura: </b></label>
                <input type="number" value={altura} onChange={e => setAltura(e.target.value)} />
            </div>
            <br></br>
            <button onClick={() => {

                if (!peso || !altura) {
                    mensagemAlerta("Por favor, preencha ambos os campos de peso e altura");
                    return;
                }

                const imc = (Number(peso) / (Number(altura) * Number(altura))).toFixed(2);

                setResultado(imc);

                let novaCategoria;
                
                if (imc < 18.5) {
                    novaCategoria = "Magreza";
                } else if (imc >= 18.5 && imc <= 24.9) {
                    novaCategoria = "Normal";
                } else if (imc >= 25.0 && imc <= 29.9) {
                    novaCategoria = "Sobrepeso (Grau de obesidade I)";
                } else if (imc >= 30.0 && imc <= 39.9) {
                    novaCategoria = "Obesidade (Grau II)";
                } else {
                    novaCategoria = "Obesidade Grave (Grau III)";
                }

                setCategoria(novaCategoria);

            }}>Ver Resultado</button>
            <h1>Resultado: {resultado}</h1>
            <h1>{categoria}</h1>
        </div>
    );
}

export default Calculo;