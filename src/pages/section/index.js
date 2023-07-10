import logo from '../../images/photos/logo.jpg'
import './style.css'

function Section(){    
    return (
        <section className='container'>
            <p> 
                Eu sou desenvolvedor Laravel e estou me aprimorando com ReactJs. 
                Estou em busca de oportunidades como desenvolvedor, tanto na área front-end quanto back-end, com o objetivo de aprimorar minhas habilidades.
                Sou autodidata, gosto de desafios e solucionar problemas.
                Acredito que a resolução de problemas é uma oportunidade de aprendizado constante, abrindo caminho para novas soluções.
            </p>
            <img src={logo} alt='minha foto, sou branco, cabelos longos e liso, olhos castanhos e com barba.'></img>
        </section>
    )
}

export default Section;

