import './navigation.css';
import { useNavigate } from 'react-router-dom';
function Navigation(prop){
    const navigate = useNavigate()
    return (
        <div className='container'>

        <nav className={prop.bg == '' ? '' : prop.bg}>
            <div className='container d-flex justify-content-between'>
                <h2>Logo</h2>
                <ul>
                    <li onClick={() => navigate('/')}>Home</li>
                    <li onClick={() => navigate('/products')}>Product</li>
                    <li onClick={() => navigate('/contact')}>Contact</li>
                </ul>
            </div>
        </nav>
        </div>
    )
}

export default Navigation;      