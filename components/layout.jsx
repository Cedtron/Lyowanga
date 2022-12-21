import React from 'react';
import Footer from './layout/footer';
import Header from './layout/header'

import Loader from './layout/loader'
import Nav from './layout/nav';
export default function Layout ({children}){
    return (
        <div>
            <Header />
            <Nav />
<Loader />
{children}
<Footer/>
        </div>
    );
}

