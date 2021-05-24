import React from 'react'
import Home from './Home'
import Starred from './Starred'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <ul>
                <li><Link to={Home}>Home</Link></li>
            </ul>
        </div>
    )
}

export default Navbar
