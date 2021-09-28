import { TextareaAutosize } from '@material-ui/core'
import React, { Component } from 'react'
import TicketService from '../services/TicketService'

class ViewTicketComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            ticket: {}
        }
    }
    componentDidMount() {
        TicketService.getTicketById(this.state.id).then(res => {
            this.setState({ ticket: res.data });
        })
    }
    cancel() {
        this.props.history.push('/tickets');
    }

    render() {
        return (
            <div >
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> View Ticket Details</h3>
                    <div className="card-body">
                        <div className="row" style={({ margin: "10px" })}>
                            <label style={({ marginLeft: "-10px" })}> Creator Name </label>
                            <input readOnly value={this.state.ticket.creatorname} />
                        </div>
                        <div className="row" style={({ margin: "10px" })}>
                            <label style={({ marginLeft: "-10px" })}> Topic </label>
                            <input readOnly value={this.state.ticket.topic} />
                        </div>
                        <div className="row" style={({ margin: "10px" })}>
                            <label style={({ marginLeft: "-10px" })}> Priority Level  </label>
                            <input readOnly value={this.state.ticket.prioritylevel} />
                        </div>
                        <div className="row" style={({ margin: "10px" })}>
                            <label style={({ marginLeft: "-10px" })}> Status</label>
                            <input readOnly value={this.state.ticket.status} />
                        </div>
                        <div className="row" style={({ margin: "10px" })}>
                            <label style={({ marginLeft: "-10px" })}> Detail </label>
                            <TextareaAutosize minRows={3} maxRows={10} readOnly value={this.state.ticket.detail} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'right', marginTop: 10 }}>
                            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewTicketComponent
