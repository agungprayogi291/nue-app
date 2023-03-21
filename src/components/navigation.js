import './navigation.css';
import { useNavigate } from 'react-router-dom';
function Navigation(prop){
    const navigate = useNavigate()
    return (
        <div className={prop.bg == '' ? 'container' : 'container' + prop.bg}>
            <nav className={prop.bg == '' ? '' : prop.bg}>
                <div className='container d-flex justify-content-between navbar'>
                    <h2>
                        <img src={process.env.PUBLIC_URL+"/logo/logo.jpeg"} className='logo'></img><span className='title-logo'>Naira Unggul Abadi</span>
                    </h2>
                    <ul>
                        <li onClick={() => navigate('/')}>Home</li>
                        <li onClick={() => navigate('/products')}>Product</li>
                        <li onClick={() => navigate('/contact')}>Contact</li>
                    </ul>
                    <button class="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
            <div className={'collapse navbar-collapse ' + (prop.bg == '' ? '' : prop.bg)}  id="navbarNav">
                <ul className="navbar-nav py-5 text-center">
                    <br></br>
                    <br></br>
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" onClick={() => navigate('/')}>home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => navigate('/products')}>Product</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={() => navigate('/contact')}>Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navigation;      