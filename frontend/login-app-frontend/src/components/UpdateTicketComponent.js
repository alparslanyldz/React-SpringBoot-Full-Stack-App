import React, { Component } from 'react'
import TicketService from '../services/TicketService';


class UpdateTicketComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            topic: '',
            prioritylevel: 0,
            status: 0,
            detail: '',
            creatorname: ''
        }
        this.changeTopicHandler = this.changeTopicHandler.bind(this);
        this.changePriorityLevelHandler = this.changePriorityLevelHandler.bind(this);
        this.changeStatusHandler = this.changeStatusHandler.bind(this);
        this.changeDetailHandler = this.changeDetailHandler.bind(this);
        this.changeCreatorNameHandler = this.changeCreatorNameHandler.bind(this);
    }

    componentDidMount() {
        TicketService.getTicketById(this.state.id).then((res) => {
            let ticket = res.data;
            this.setState({
                topic: ticket.topic,
                prioritylevel: ticket.prioritylevel,
                status: ticket.status,
                detail: ticket.detail,
                creatorname: ticket.creatorname
            });
        });
    }

    updateTicket = (e) => {
        e.preventDefault();
        let ticket = { topic: this.state.topic, prioritylevel: this.state.prioritylevel, status: this.state.status, detail: this.state.detail, creatorname: this.state.creatorname };
        console.log('ticket => ' + JSON.stringify(ticket));
        console.log('id => ' + JSON.stringify(this.state.id));
        TicketService.updateTicket(ticket, this.state.id).then(res => {
            this.props.history.push('/tickets');
        });
    }

    changeTopicHandler = (event) => {
        this.setState({ topic: event.target.value });
    }

    changePriorityLevelHandler = (event) => {
        this.setState({ prioritylevel: event.target.value });
    }

    changeStatusHandler = (event) => {
        this.setState({ status: event.target.value });
    }
    changeDetailHandler = (event) => {
        this.setState({ detail: event.target.value });
    }
    changeCreatorNameHandler = (event) => {
        this.setState({ creatorname: event.target.value });
    }


    cancel() {
        this.props.history.push('/tickets');
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Ticket</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Topic: </label>
                                        <input placeholder="Topic" name="Topic" className="form-control"
                                            value={this.state.topic} onChange={this.changeTopicHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>  priority level: </label>
                                        <input placeholder=" priority level" name=" prioritylevel" className="form-control"
                                            value={this.state.prioritylevel} onChange={this.changePriorityLevelHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>status: </label>
                                        <input placeholder="status" name="status" className="form-control"
                                            value={this.state.status} onChange={this.changeStatusHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>detail: </label>
                                        <input placeholder="detail" name="detail" className="form-control"
                                            value={this.state.detail} onChange={this.changeDetailHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>creatorname: </label>
                                        <input placeholder="creatorname" name="creatorname" className="form-control"
                                            value={this.state.creatorname} onChange={this.changeCreatorNameHandler} />
                                    </div>
                                    <button className="btn btn-success" onClick={this.updateTicket}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default UpdateTicketComponent
