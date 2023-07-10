import './style.css'
import mailIcon from '../../../images/icons/mail.svg'

function Mail(){
    return (
        <div className='mail--box'>
            <img src={mailIcon} alt='icone de um envelope'></img>
        </div>
    )
}

export default Mail;