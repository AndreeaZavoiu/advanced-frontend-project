import React, { useState } from 'react'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';

export interface ILoginPageProps {}

const Login: React.FunctionComponent<ILoginPageProps> = (props) => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [authing, setAuthing] = useState(false);
    const singInWithGoogle = async () => {
        setAuthing(true);
        signInWithPopup(auth, new GoogleAuthProvider())
        .then(response => {
            console.log(response.user.uid);
            navigate('/');
        })
        .catch (error => {
            console.log(error);
            setAuthing(false);
        })  
    }

  return (
    <div className='card'>
      <p className="booking-site">Booking Site</p>
      
      <div className="videoWrapper">
      <button className='signIn' onClick={() => singInWithGoogle()} disabled={authing}>Sign in with Google</button></div>

      <div className="videoWrapper"><iframe width="420" height="315" src="https://www.youtube.com/embed/4cW43gfRsl4"></iframe></div>
    </div>
  )
}

export default Login
