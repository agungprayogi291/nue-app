import './navigation.css';
import { useNavigate } from 'react-router-dom';
function Navigation(){
    const navigate = useNavigate()
    return (
        <div class='container'>

        <nav className="px-3">
            <div className='container d-flex justify-content-between'>
                <h2>Logo</h2>
                <ul>
                    <li onClick={() => navigate('/')}>Home</li>
                    <li onClick={() => navigate('/products')}>Product</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
        </div>
    )
}

export default Navigation;      