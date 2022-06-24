import React, { useState } from 'react';
import './Login.css';
import Footer from './Footer.js';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';


function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log(email)

  const sign_in = e =>{
    e.preventDefault();
  }

  const sign_up = e =>{
    /*e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then((auth)=>{
      console.log(auth)
    }).catch(error => alert(error.message))*/
  }

  return (
    <div className='login_container'>
      <img src='https://tinyurl.com/yeyvhatc' alt='amazon' className='login_logo'/>
      <div className='login_main'>
        <h2 className='login_sidentifier'>S'identifier</h2>
        <span className='login_adresse'>Adresse e-mail ou numéro de téléphone<br/> portable</span>
        <input type="text" className='login_input' onChange={e=> setEmail(e.target.value)} value={email}/>
        <input type="text" className='login_input' onChange={f=> setPassword(f.target.value)} value={password}/>
        <button onClick={sign_in} className='login_btn'>Continuer</button>
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
        <button onClick={sign_up} className='btn_nouveau'>Créer votre compte Amazon</button>
      </div>
      <Footer/>
    </div>
  )
}

export default Login