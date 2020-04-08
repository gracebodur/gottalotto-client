import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

function Nav() {
    return (
        <div>
            <nav className='zone sticky main-nav'>
                <Link className='right link' to='/'>GottaLotto</Link>
                <Link className='link' to='/login'>Login</Link>
                <Link className='link' to='/register'>Register</Link>
            </nav>
        </div>
    )
}

export default Nav