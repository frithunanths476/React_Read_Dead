import style3 from './CardProfissionais.module.css'

function CardProfissionais(prop) {
    return (
        <div className={style3.fundo}>
            <p className={style3.nome}>{prop.nome}</p>
            <img style={{width: prop.tamImg}} src={prop.img} />
            <p className={style3.ocupacao}>{prop.Ocupacao}</p>
            <p className={style3.status}>{prop.Status}</p>
        </div>
    )
}

export default CardProfissionais