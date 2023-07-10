
import './style.css'

function LanguagesList(){
    const languages = [
        { id: 1, name: 'HTML5' },
        { id: 2, name: 'CSS3' },
        { id: 3, name: 'PHP 8.^' },
        { id: 4, name: 'JavaScript' },
        { id: 5, name: 'PostgreSQL' },
      ];
      return (
        <ul className="languages">
          <li className="languageList">
            <h3>As linguagens que eu aprendi são: </h3>
          </li>
          {languages.map((language) => (
            <li key={language.id} className="languageList">
              {language.name}
            </li>
          ))}
        </ul>
      );
    }

export default LanguagesList
