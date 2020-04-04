import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div>
            <nav className='zone sticky main-nav'>
                <Link className='left' to='/'>GottaLotto</Link>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </nav>
        </div>
    )
}

export default Nav