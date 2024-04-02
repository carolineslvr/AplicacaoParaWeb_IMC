function Titulo(props){
    const estiloTitulo = {
        textAlign: 'center',
    };
    return (
        <div>
             <h1 style={estiloTitulo}>{props.texto}</h1>
        </div>
    )
}

export default Titulo;