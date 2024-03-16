import React from 'react'
import '@/styles/loading.css'
export default function Loader() {
    return (
        <div>
            <div className="loader">
                <div className="inner one"></div>
                <div className="inner two"></div>
                <div className="inner three"></div>
            </div>
        </div>
    )
}
