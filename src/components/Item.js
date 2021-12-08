import PropTypes from 'prop-types'

function Item({marca, modelo, ano_fabricacao}){
    return(
        <>
            <li>
                {marca} - {modelo} - {ano_fabricacao}
            </li>
        </>

    )
}

Item.protoType = {
    marca: PropTypes.string.isRequired,
    ano_fabricacao: PropTypes.number,
}

Item.defaultProps = {
    marca: 'Marca não definida',
    ano_fabricacao: 0,
}

export default Item