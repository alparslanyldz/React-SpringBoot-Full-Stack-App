import React, { Component } from 'react'
import TicketService from '../services/TicketService'

class ListTicketComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tickets: []
        }

        this.addTicket = this.addTicket.bind(this);
        this.editTicket= this.editTicket.bind(this);
        this.deleteTicket = this.deleteTicket.bind(this);

    }
    deleteTicket(id) {
        TicketService.deleteTicket(id).then(res => {
            this.setState({ tickets: this.state.tickets.filter(ticket => ticket.id !== id) });
        });
    }
    viewTicket(id) {
        this.props.history.push(`/view-ticket/${id}`);
    }
    editTicket(id) {
        this.props.history.push(`/add-ticket/${id}`);
    }
    addTicket() {
        this.props.history.push('/add-ticket/_add');
    }
    componentDidMount() {
        TicketService.getTickets().then((res) => {
            this.setState({ tickets: res.data });
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Tickets List</h2>
                <div className="row">
                    <button style={({width:150,height:40})} className="btn btn-primary" onClick={this.addTicket}> Add Ticket</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Creator Name</th>
                                <th>Subjects</th>
                                <th>Status</th>
                                <th>Detail</th>
                                <th>Priority</th>
                                <th>Created Date</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.tickets.map(
                                    ticket =>
                                        <tr key={ticket.id}>
                                            <td>{ticket.id}</td>
                                            <td>{ticket.creatorname}</td>
                                            <td>{ticket.topic}</td>
                                            <td>{ticket.status}</td>
                                            <td>{ticket.detail}</td>
                                            <td>{ticket.prioritylevel}</td>
                                            <td>{ticket.createddate}</td>
                                            <td>
                                                <button onClick={() => this.editTicket(ticket.id)} className="btn btn-info">Update </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteTicket(ticket.id)} className="btn btn-danger">Delete </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewTicket(ticket.id)} className="btn btn-info">View </button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

export default ListTicketComponent
