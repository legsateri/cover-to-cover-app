import React, { Component } from 'react'
import './Sidebar.css'

export default class Sidebar extends Component {
    render() {
        return (
            <>
                <div className='sidebar'>
                    <p>Club Info:</p>
                    <ul>
                        <li>Type: Private Club</li>
                        <li>Location: Online Only</li>
                        <li>Topic: Whatevah we want!</li>
                        <li>Max Number of Members: 4</li>
                    </ul>

                    <p>Members:</p>
                    <ul>
                        <li>Maggie Miller</li>
                        <li>Tara Clarke</li>
                        <li>Abby Plante</li>
                        <li>Allegra Pusateri</li>
                    </ul>
                </div>
            </>
        )
    }
}