function porcentagem(){
    function calcular(){
        let num1S = document.querySelector('#porc')
        let num2S = document.querySelector('#total')
        let num1 = Number(num1S.value)
        let num2 = Number(num2S.value)
        let res = document.querySelector('#resP')
        porcentagem = num2 * (num1 / 100)
        res.textContent = `${num1}% de ${num2} é = ${porcentagem}`
        
    }
    return(
        <div>
            <p>Porcentagem: <input id="porc" type="Number"/> %</p>
            <p>Número Total: <input id="total" type="Number"/></p>
            <input type="button" value="Calcular"  onClick={calcular}/>
            <p id="resP">Resultado...</p>
        </div>
    )
}

export default porcentagem