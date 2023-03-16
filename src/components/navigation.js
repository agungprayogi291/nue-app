import './navigation.css';
function Navigation(){
    return (
        <nav className="px-3">
            <div className='container d-flex justify-content-between'>
                <h2>Logo</h2>
                <ul>
                    <li>Home</li>
                    <li>Product</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;      