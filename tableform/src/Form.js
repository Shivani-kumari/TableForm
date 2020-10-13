import React, { Component } from 'react'


export class Form extends Component {
    state = {
        ...this.returnStateObject()
    }
    returnStateObject() {
        if (this.props.currentIndex == -1)
            return {
                EventName: '',
                EventDate: '',
                EventTime: '',
                EventDescription: ''
            }
        else
            return this.props.list[this.props.currentIndex]
    }
    componentDidUpdate(prevProps) {
        if (prevProps.currentIndex != this.props.currentIndex || prevProps.list != this.props.list) {
            this.setState({ ...this.returnStateObject() })
            console.log(prevProps, this.props)
        }
    }
    handleInputChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.onAddOrEdit(this.state)
    }
    render() {
        return (
            <div>
               <form onSubmit={this.handleSubmit} autoComplete="off">
                <input name="EventName" placeholder="EventName" onChange={this.handleInputChange} value={this.state.EventName} /><br />
                < input name="EventDate" placeholder="EventDate" onChange={this.handleInputChange} value={this.state.EventDate} /><br />
                < input name="EventTime" placeholder="EventTime" onChange={this.handleInputChange} value={this.state.EventTime} /><br />
                < input name="EventDescription" placeholder="EventDescription" onChange={this.handleInputChange} value={this.state.EventDescription} /><br />
                <button type="submit">Submit</button>
            </form> 
            </div>
        )
    }
}

