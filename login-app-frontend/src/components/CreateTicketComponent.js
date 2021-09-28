import React, { Component } from 'react'
import TicketService from '../services/TicketService';

import { TextareaAutosize } from '@material-ui/core';

class CreateTicketComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            topic: '',
            prioritylevel: 0,
            status: 0,
            detail: '',
            creatorname: '',
           
        
            

        }

        this.changeTopicHandler = this.changeTopicHandler.bind(this);
        this.changePriorityLevelHandler = this.changePriorityLevelHandler.bind(this);
        this.changeStatusHandler = this.changeStatusHandler.bind(this);
        this.changeDetailHandler = this.changeDetailHandler.bind(this);
        this.changeCreatorNameHandler = this.changeCreatorNameHandler.bind(this);
    
    }



    componentDidMount() {
        if (this.state.id === '_add') {
            return 
        } else {
            TicketService.getTicketById(this.state.id).then((res) => {
                let ticket = res.data;
                this.setState({
                    topic: ticket.topic,
                    prioritylevel: ticket.prioritylevel,
                    status: ticket.status,
                    detail: ticket.detail,
                    creatorname: ticket.creatorname,
                    
                    
                    
                });
               
            });
        }
    }
    saveOrUpdateTicket = (e) => {
        e.preventDefault();
        let ticket = { topic: this.state.topic, prioritylevel: this.state.prioritylevel, status: this.state.status, detail: this.state.detail, creatorname: this.state.creatorname};
        console.log('ticket => ' + JSON.stringify(ticket));
       

        if (this.state.id === '_add') {
            TicketService.createTicket(ticket).then(res => {
                this.props.history.push('/tickets');
            });
        } else {
            TicketService.updateTicket(ticket, this.state.id).then(res => {
                this.props.history.push('/tickets');
            });
        }
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
        this.setState({ creatorname: event.target.value  });
    }
    
    
    

    cancel() {
        
        this.props.history.push('/tickets');
      
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add Ticket</h3>
        } else {
            return <h3 className="text-center">Update Ticket</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                                
                            }
                            <div className="card-body">
                                <form>
                                <div className="form-group">
                                <label style={({color:"black" , marginTop:10,marginBottom:10})}>Creator Name</label>
                                        <input placeholder="" name="creatorname" className="form-control"
                                            value={this.state.creatorname} onChange={this.changeCreatorNameHandler} />
                                    </div>
                                    <div className="form-group">
                                    <label style={({color:"black" , marginTop:10,marginBottom:10})}> Topic </label>
                                        <input placeholder="" name="Topic" className="form-control"
                                            value={this.state.topic} onChange={this.changeTopicHandler} />
                                    </div>
                                    <div className="form-group">
                                    <label style={({color:"black" , marginTop:10,marginBottom:10})}>  Priority Level </label>
                                        <div>
                                        <select style={({width:"100%",borderRadius:10,height:35})}  value={this.state.prioritylevel} onChange={this.changePriorityLevelHandler} >
                                            <option value="0">Less Primarily</option>
                                            <option value="1">Medium Priority</option>
                                            <option value="2">Urgent</option>
                                            
                                        </select>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                    <label style={({color:"black" , marginTop:10,marginBottom:10})}>Status </label>
                                        <div>
                                        <select style={({width:"100%",borderRadius:10,height:35})} value={this.state.status} onChange={this.changeStatusHandler}>
                                            <option value="0">Waiting For Answer</option>
                                            <option value="1">In The Process</option>
                                            <option value="2">Closed</option>
                                            
                                        </select>
                                        </div>
                                        
                                    </div>
                                    <div className="form-group">
                                        <label style={({color:"black" , marginTop:10,marginBottom:10})}>Detail </label>
                                        <TextareaAutosize minRows={3} maxRows={10} className="form-control"
                                            value={this.state.detail} onChange={this.changeDetailHandler} />
                                    </div>
                                 
                                    <div style={{ display: 'flex', justifyContent: 'right', marginTop: 10 }}>
                                        <button className="btn btn-success right" onClick={this.saveOrUpdateTicket}>Save</button>
                                        <button className="btn btn-danger right" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateTicketComponent
