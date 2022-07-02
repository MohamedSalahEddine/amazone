import React, { useEffect, useState } from 'react';
import './Login.css';
import Footer from './Footer.js';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import {auth} from './firebase.js';
import { useNavigate } from 'react-router-dom';
import {useStateValue} from './StateProvider';

function Login() {

  const navigate = useNavigate();
  const [{basket, user}, dispatch] = useStateValue();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(email)

  const login = async () =>{
    try{
      const authUser = await signInWithEmailAndPassword(auth, email, password);
      if (authUser){
        dispatch({
          type:"SET_USER",
          user: authUser
        })
        return navigate("/");
      }else{
        dispatch({
          type:"SET_USER",
          user: null
        })
      }
      console.log(user);
    }catch(error){
      console.log(error.message);
    }
  }

  const register = async () =>{
    
    try{
      const user = await createUserWithEmailAndPassword(auth, email, password);
      if (user){
          return navigate("/");
      }
      console.log(user);
    }catch(error){
      console.log(error.message);
    }

  }

  return (
    <div className='login_container'>
      <img src='https://tinyurl.com/mrxnffh2' alt='amazon' className='login_logo'/>
      <div className='login_main'>
        <h2 className='login_sidentifier'>S'identifier</h2>
        <span className='login_adresse'>Adresse e-mail ou numéro de téléphone<br/> portable</span>
        <input type="text" className='login_input' onChange={e=> setEmail(e.target.value)} value={email}/>
        <input type="password" className='login_input' onChange={f=> setPassword(f.target.value)} value={password}/>
        <button onClick={login} className='login_btn'>Continuer</button>
        <p className='login_para'>En passant votre commande, vous acceptez les<br/>
            <a>Conditions générales de vente</a> d’Amazon.
            Veuillez <br/>consulter notre <a>Notice Protection
            de vos informations <br/>personnelles</a>, notre
            <a>Notice Cookies et notre Notice <br/>Annonces 
            publicitaires basées sur vos centres d’intérêt.</a>
        </p>
        <span className='avez_vous'><ArrowRightIcon/> <a>Avez-vous besoin d'aide ?</a></span>
      </div>
      <div className='div_nouveau'>
        <span className='span_nouveau'>Nouveau chez Amazon ?</span>
        
        <button onClick={register} className='btn_nouveau'>Créer votre compte Amazon</button>
      </div>
      <Footer/>
    </div>
  )
}

export default Login