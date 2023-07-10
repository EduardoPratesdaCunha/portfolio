import FrameworksList from '../../components/frameworks/index.js'
import LanguagesList from '../../components/languages/index.js'
import template from '../../images/photos/apresentacao.png'
import './style.css'


function Content(){
    return (
        <section className='content'>
            <img src={ template } alt='imagem no site em formato responsivo e em formato normal.'></img>
            <div className='content--lists'>
                <LanguagesList />
                <FrameworksList />
            </div>
        </section>
    )
}
export default Content;