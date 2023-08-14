import React from 'react';
import {AiFillPhone} from 'react-icons/ai'
import { BsFillEnvelopeFill } from 'react-icons/bs'
import logo from '../assets/img/logo.png'
function Header(props)
{
    return (
        <div className='header'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="header-info">
                <div className="org-title">
                    <h2>Organization for Welfare & Development in Action</h2>
                </div>
                <div className="contact-address">
                    <ul>
                        <li><p><AiFillPhone/> +251911121314</p></li>
                        <li><p><AiFillPhone/> +251911121314</p></li>
                        <li><p><AiFillPhone/> +251911121314</p></li>
                        <li><p><AiFillPhone/> +251911121314</p></li>
                    </ul>
                    <ul>
                        <li><p>Fax +251911121314</p></li>
                        <li><p>Fax +251911121314</p></li>
                        <li><p>Fax +251911121314</p></li>
                        <li><p>Email Owda@eth.org</p></li>
                    </ul>
                    <ul>
                        <li><p><BsFillEnvelopeFill/> +251911121314</p></li>
                        <li><p><BsFillEnvelopeFill/> +251911121314</p></li>
                    </ul>
                    <ul>
                        <li><p>Addis Ababa</p></li>
                        <li><p>Jigjiga</p></li>
                        <li><p>Addis Ababa</p></li>
                        <li><p>Jigjiga</p></li>
                    </ul>
                </div>
                <div className="doc-title">
                    <h1>{props.page}</h1>
                </div>
            </div>
            <div className="mail">
                <p>PO</p>
            </div>
        </div>
    );
}

export default Header;