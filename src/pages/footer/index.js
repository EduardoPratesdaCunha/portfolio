
import { useRef, useState } from 'react';
import Icons from '../../components/icons/index';
import Mail from '../../components/icons/mail/index.js';
import Copy from '../../components/icons/copy/index.js';
import './style.css';

function Footer() {
  const [copied, setCopied] = useState(false);
  const emailRef = useRef(null);

  const handleCopy = () => {
    const emailText = emailRef.current.innerText;
    navigator.clipboard.writeText(emailText)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((error) => {
        console.error('Erro ao copiar o texto:', error);
      });
  };

  return (
    <footer className='footer'>
      <div className='footer--title'>
        <h4>Entre em contato</h4>
      </div>
      <div className='footer--contacts'>   
        <div className='footer--links'>
            <div className={`mail ${copied ? 'copied' : ''}`}>
                <Mail />
                <span ref={emailRef} className='mail--text'>eduardopratesrs@gmail.com</span>
                <Copy handleCopy={handleCopy} emailRef={emailRef}/>
            </div>
            <Icons />
        </div>
      </div>
    </footer>
  )
}

export default Footer;
