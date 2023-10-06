import style from './Header.module.css'

function Header() {
    return (
        <header className={style.size}>
            <div className={style.textos}>
                <p className={style.titulo}>O Grupo Van der Linde</p>
                <p className={style.contato}>Contato</p>
            </div>
        </header>
    )
}

export default Header