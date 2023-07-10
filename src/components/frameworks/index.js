import './style.css'


function FrameworksList() {
    const frameworks = [
        {id: 1, name:'bootstrap 5'},
        {id: 2, name:'Laravel 8^'},
        {id: 3, name:'ReactJs'},
    ]
    
    return (
        <ul className='frameworks'>
            <li className="frameworkList">
                <h3>Os Frameworks:</h3>
            </li>
            {frameworks.map((framework) => (
                <li key={framework.id} className="frameworkList">
                    {framework.name}
                </li>
            ))}
        </ul>
    )
}

export default FrameworksList