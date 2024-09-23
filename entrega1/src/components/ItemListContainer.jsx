export const Button = (props) =>{
    const handleClick = () =>{
        console.log('apretaste maquina');
    }
    
    return(
        
            <div style={{display:'flex', justifyContent:'center'}}>
                 <button onClick={handleClick}>{props.textoButton}</button>
            </div>        
    )
}

export default Button;
