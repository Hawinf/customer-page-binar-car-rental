import React, {Component, useState} from "react";
import { Calendar } from "react-calendar";

const MyCalendar = () => {
    const state = useState('')
    const onChange = useState('')
    const toggleCalendar = useState('')

    state = {
        date: new Date(),
        showCalendar: false
    }
    onChange = date => {
        this.setState({ date });
        this.toggleCalendar()
    }
    toggleCalendar = () => {
        this.setState(prevState => ({
            showCalendar: !prevState.showCalendar
        }));
    }

    return (
        <div>
            <button onClick={this.toggleCalendar}>
                Open Calendar
            </button>
            {
                this.state.showCalendar && (
                    <Calendar
                        onChange={this.onChange}
                        value={this.state.date}
                    />
                )
            }
        </div>
    )
}

export default MyCalendar