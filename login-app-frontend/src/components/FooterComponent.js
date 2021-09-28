import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className = "footer">
                    <span style={{display: 'flex', justifyContent: 'center'}} className="text-muted">All Rights Reserved 2021 @Alparslanyldzz</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent
