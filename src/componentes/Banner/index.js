import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.jpeg'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Blog Wallace
                </h1>

                <p className={styles.paragrafo}>
                Sou Wallace, entusiasta do desenvolvimento Front-end. Neste espaço, vou compartilhar insights, experiências e aprendizados. Espero que você encontre inspiração e novas descobertas para aprimorar suas habilidades. Vamos aprender juntos!
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                    alt=""
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto do Antônio Evaldo sorrindo"
                />
            </div>
        </div>
    )
}