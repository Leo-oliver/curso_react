import Item from "./Item"


let cars =['BMW', 'VW', 'Fiat', 'Toyota']

function List(){
    return(
        <>
            <h1>Minha Lista de carros!</h1>
            <ul>
                <p>O que eu gosto</p>
                <Item marca= {cars[0]}/>
                <p>O que eu tenho</p>
                <Item marca= {cars[1]}/>
                <p>Respeito mas não quero ter</p>
                <Item marca= {cars[2]}/>
                <p>Ouço dizer que tem a melhor mecanica!</p>
                <Item marca= {cars[3]}/>
            </ul>
        </>
    )
}

export default List