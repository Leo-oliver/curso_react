function Soma(){
    function calcular(){
        let num1S = document.querySelector('#n1')
        let num2S = document.querySelector('#n2')
        let res = document.querySelector('#res')
        let num1 = Number(num1S.value)
        let num2 = Number(num2S.value)
        let soma = num1 + num2
        res.textContent = `A soma de ${num1} + ${num2} é = ${soma}`

    }
    return(
        <div>
            <h2>Calculadora de soma</h2>
            <p>Primeiro Número  <input id="n1" type="number"/></p>           
            <p>+</p>
            <p>Segundo Número: <input id="n2" type="Number"/></p>
            <input type="button" value="Calcular" onClick={calcular}/>
            <p id="res">Resultado</p>
        </div>
    )
}

export default Soma