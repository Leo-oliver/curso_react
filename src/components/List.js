import Item from "./Item"


let cars =['BMW', 'VW', 'Fiat', 'Toyota']

function List(){
    return(
        <>
            <h1>Minha Lista de carros!</h1>
            <ul>
                <p>O que eu gosto:</p>
                <Item marca= {cars[0]} modelo={320} ano_fabricacao={2021}/>
                <p>O que eu tenho:</p>
                <Item marca= {cars[1]} modelo="Gol" ano_fabricacao={2007}/>
                <p>Respeito mas não quero ter:</p>
                <Item marca= {cars[2]} modelo="Uno" ano_fabricacao={2000}/>
                <p>Ouço dizer que tem a melhor mecanica!</p>
                <Item marca= {cars[3]} modelo="Corola" ano_fabricacao={2018}/>
                <p>Lista com itens em branco</p>
                <Item/>
            </ul>
        </>
    )
}

export default List