import style4 from './Footer.module.css'

function Footer() {
    return (
        <footer className={style4.size}>
            <div className={style4.textos}>
                <p className={style4.titulo}>Grupo Van der Linde</p>
                <p className={style4.fundacao}>11/09/1870</p>
            </div>
        </footer>
    )
}

export default Footer