import React, {Component} from 'react'
import{Section} from '../components/Utils/Utils'

export default class NotFound extends Component {
    render() {
        return (
            <Section>
                <h2>Wuh Oh!</h2>
                <h3>If you're reading this, it means the page you're looking for doesn't exist.</h3>
                <p>Try going back to the previous page.</p>
            </Section>
        )
    }
}