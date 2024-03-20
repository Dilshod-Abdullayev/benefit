import React from 'react'
import Header from './header/Header'
import Stock from './Stock/Stock'
import Galery from './galery/Galery'
import Info from './Info/Info'

export default function Main() {
    return (
        <div>
            <Header />
            <Stock/>
            <Galery/>
            <Info/>
        </div>
    )
}
