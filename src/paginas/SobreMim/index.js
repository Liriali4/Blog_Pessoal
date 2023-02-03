import styles from "./SobreMim.module.css";
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/minha_foto.png";

export default function SobreMim(){
    return(
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
        
        <h3 className={styles.subtitulo}>
        Olá, eu sou a Líria!
        </h3>

        <img
            src={fotoSobreMim}
            alt="Foto da Líria"
            className={styles.fotoSobreMim}
        />
        <p className={styles.paragrafo}>
            Por escrever 6 parágrafos....
        </p>
        </PostModelo>
    );
}