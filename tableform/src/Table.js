import React, { Component } from 'react'
import { Form } from './Form'


export default class Table extends Component {
    state = {
        currentIndex: -1,
        list: this.returnList()
    }

    returnList() {
        if (localStorage.getItem('Event') == null)
            localStorage.setItem('Event', JSON.stringify([]))
        return JSON.parse(localStorage.getItem('Event'))
    }
    handleEdit = (index) => {
        this.setState({
            currentIndex: index
        })
    }
    onAddOrEdit = (data) => {
        var list = this.returnList()
        if (this.state.currentIndex == -1)
            list.push(data)
        else
            list[this.state.currentIndex] = data
        localStorage.setItem('Event', JSON.stringify(list))
        this.setState({ list, currentIndex: -1 })
    }

    render() {
        return (
            <div>
                <Form
                currentIndex={this.state.currentIndex}
                list={this.state.list}
                onAddOrEdit={this.onAddOrEdit}
                ></Form>
                <hr />
                <table>
                    <tbody>
                        {this.state.list.map((item, index) => {
                            return <tr key={index}>
                                <td>{item.EventName}</td>
                                <td>{item.EventDate}</td>
                                <td>{item.EventTime}</td>
                                <td>{item.EventDescription}</td>
                                <td><button onClick={() => this.handleEdit(index)}>Edit</button></td>
                               
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
