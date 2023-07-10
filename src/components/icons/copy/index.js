import './style.css'
import copyIcon from '../../../images/icons/copy.svg'


function Copy({ handleCopy }) {
    return (
      <div className='icon--copy' onClick={handleCopy}>
        <img src={copyIcon} alt='Ícone de copiar, para copiar meu e-mail' />
      </div>
    );
  }

export default Copy;
