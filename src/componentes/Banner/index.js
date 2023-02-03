import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import minhaFoto from "assets/minha_foto.png";

export default function Banner(){
    return (
        <div className={styles.banner}>
            <div className={styles.apresentação}>
                <h1 className={styles.titulo}>
                    Olá Mundo!
                </h1>

                <p className={styles.paragrafo}>
    Boas vindas ao meu espaço pessoal! Eu sou Líria Bá,
     aprendiza de Front-End. Aqui compartilho vários 
     conhecimentos, e espero aprender algo novo :)
                </p>
            </div>
            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                    alt="imagem de um circulo colorido"
                />
                 <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    aria-hidden={true}
                    alt="Minha foto"
                />
            </div>
        </div>
        )
}
