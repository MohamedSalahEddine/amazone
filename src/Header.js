import React, { Component } from 'react';
import './header.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

class Header extends Component {
    state = {  } 
    render() { 
        return (
            <div className='header_container'>
                <img src="https://tinyurl.com/yeyvhatc" alt='logo' className='logo'/>
                <div className='location'>
                    <LocationOnIcon className='icon_location'/>
                    <div className='location_div'>
                        <span className='dz_up'>Votre adresse de livraison:</span>
                        <span className='dz'>Algerie</span>
                    </div>
                </div>
                <div className='search_div'>
                    <select name="categorie" className='select'>
                        <option>Toutes nos catégories</option>
                        <option>Catégorie 1</option>
                        <option>Catégorie 1</option>
                        <option>Catégorie 1</option>
                        <option>Catégorie 1</option>
                        <option>Catégorie 1</option>
                    </select>
                    <input className='input' type="text"/>
                    
                    <SearchIcon className='searchIcon'/>
                    
                </div>
                
                <div className='div_droite'>
                    <div className='bonjour'>
                        <span className='ligne_1'>Bonjour, identifiez-vous</span>
                        <span className='ligne_2'>Compte et listes </span>
                    </div>
                    <div className='retour'>
                        <span className='ligne_1'>Retours</span>
                        <span className='ligne_2'>et Commandes</span>
                    </div>
                    <div className='basket'>
                        <ShoppingBasketIcon className='bascketIcon'/>
                        <span className='ligne_2'>Panier</span>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Header;