import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/minha_foto.jpeg";
import fotoSobreMim from "assets/minha_foto.jpeg";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Wallace Tadeu!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Wallace Tadeu sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
            Minha jornada é única e inspiradora. Originário do interior, passei meus dias cuidando da minha propriedade,
            plantando e cuidando do sítio. No entanto, o chamado por novos desafios era inegável.
            </p>
            <p className={styles.paragrafo}>
            Assumi o papel de auxiliar operacional em uma distribuidora de bebidas, e foi aí que a chama do conhecimento se acendeu.
            Essa busca incessante por aprender me levou a um território inexplorado: o mundo da programação.
            </p>             
            <p className={styles.paragrafo}>
            Imagina só, mergulhei nesse universo e não consegui parar de estudar desde então! Meu foco principal
             tem sido o desenvolvimento FRONT-END para aplicações web. Eu realmente quero me tornar um especialista
              nessa área dinâmica e sempre evoluindo.
            </p>
            <p className={styles.paragrafo}>
            Cada linha de código é uma oportunidade de crescimento, e estou determinado a me tornar um especialista nessa
            área em constante evolução, e minha jornada está apenas começando.
            </p>
            <p className={styles.paragrafo}>
            Ah, sobre minha educação, ela foi moldada por valores sólidos que meus pais me ensinaram desde cedo.
             Trabalho duro, educação de qualidade e respeito pelo próximo sempre foram os pilares da minha jornada.
              Mesmo tendo estudado em escolas públicas, isso nunca foi uma barreira para mim. Na verdade, vi essa
             experiência como uma oportunidade incrível de aprendizado e crescimento. Hoje, estou me especializando
              como Inspetor de Qualidade no Instituto Federal Sul de Minas Gerais, e acredito que a busca incessante
               pelo conhecimento é o segredo do sucesso.
            </p>
            <p className={styles.paragrafo}>
                Com isso tive minha experiência de dev mais próxima da realidade, com prazos de implementação 
                para o site, e aprendi muito enquanto codificava.
            </p>
            <p className={styles.paragrafo}>
            Falando em conhecimento, olha só alguns dos cursos e certificados que conquistei até agora:

            Certificado React: Como os Componentes Funcionam,
            Certificado React: Desenvolvendo com JavaScript,
            Certificado Algoritmos e Lógica de Programação,
            Certificado HTML e CSS para Landing Page,
            Certificado JavaScript: Consumindo e Tratando Dados de uma API,
            Certificado JavaScript: Criando Requisições,
            Certificado JavaScript: Métodos de Array,
            Certificado JavaScript: Validando Formulários,
            Certificado Organização de Equipes Ágeis: Os Papéis Existentes em uma Equipe,
            Certificado Flexbox: Posicione Elementos na Tela,

            </p>
            <p className={styles.paragrafo}>
            E muitos mais! Como se não bastasse, atualmente estou estudando Desenvolvimento de Sistemas no IFUDESTE
             Poços de Caldas. Minha ética de trabalho é forte, e minha sede por conhecimento é interminável.
            </p>
            <p className={styles.paragrafo}>
                Sei que o caminho para o sucesso é construído dia a dia, enfrentando desafios e aprendendo 
                constantemente. E pode acreditar, minha curiosidade e motivação são minhas maiores aliadas nessa 
                jornada. Estou pronto para superar qualquer obstáculo que apareça no meu caminho, porque acredito
                 no meu potencial de evolução constante.
                 
            </p>
            <p className={styles.paragrafo}>
                Agora, eu quero te convidar para fazer parte dessa jornada incrível comigo. Vamos crescer juntos,
                 aprender juntos e conquistar novos horizontes. Sua companhia é valiosa, e tenho certeza de que 
                 juntos podemos fazer a diferença.
            </p>   
            <p className={styles.paragrafo}>
                Até breve, meu amigo! E lembre-se, sempre em busca de crescimento e sucesso.
            </p>   
            <p className={styles.paragrafo}>
                Abraços,
                Wallace Tadeu.
            </p>   
        </PostModelo>
    )
}