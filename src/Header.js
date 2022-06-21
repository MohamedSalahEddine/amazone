import React, { Component } from 'react';
import './header.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import { Link } from "react-router-dom";

class Header extends Component {
    state = {  } 
    render() { 
        return (
            
            <div className='header_container'>
                <div className='header_container_up'>
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
                <div className='header_container_down'>
                    <div className='header_container_down_left'>
                    <MenuIcon />
                        <span className='kk'>Toutes</span>
                        <span>Meilleures Ventes</span>
                        <span>Amazon Basics</span>
                        <span>Musique</span>
                        <span>Service Client</span>
                        <span>Dernières Nouveautés</span>
                        <ArrowDropDownIcon/>
                        <span className='kk'>Prime</span>
                        
                        <span>Ebooks Kindle</span>
                    </div>
                    <div className='header_container_down_right'>
                        <PlayCircleFilledIcon className='prime_icon'/>
                        <span className='prime'>Prime Video</span>
                        <span className='essai'>| Essai gratuit de 30 jours</span>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Header;

