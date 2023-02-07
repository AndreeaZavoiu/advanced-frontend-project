import { getAuth, signOut } from 'firebase/auth';
import { Link } from 'react-router-dom'

function Navbar() {
    const auth = getAuth();

  return (
    <nav className='navbar'>
        <h1>Dashboard</h1>
        <div className='links'>
            <Link to='/'>
                HomePage
            </Link>

            <Link to='/create' style={{
                    color: "white",
                    backgroundColor:"rgb(77,77,77)",
                    borderRadius: "8px"
                }}>
                New Hotels
            </Link>

       
        <button className="signOut" onClick={() => signOut(auth)}>Sign out</button>
        </div>
    </nav>
  )
}

export default Navbar
