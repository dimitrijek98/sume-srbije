import React, {Component} from 'react';
import {Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from "recharts";

const data = [
    {
        "subject": "Vojvodina",
        "A": 120,
        "B": 110,
        "fullMark": 150
    },
    {
        "subject": "Z. Srbija",
        "A": 98,
        "B": 130,
        "fullMark": 150
    },
    {
        "subject": "C. Srbija",
        "A": 86,
        "B": 130,
        "fullMark": 150
    },
    {
        "subject": "I. Srbija",
        "A": 99,
        "B": 100,
        "fullMark": 150
    },
    {
        "subject": "J. Srbija",
        "A": 85,
        "B": 90,
        "fullMark": 150
    },
    {
        "subject": "Kosovo",
        "A": 65,
        "B": 85,
        "fullMark": 150
    }
]
class NewForests extends Component {
    render() {
        return (
            <div ref={this.props.newForests} className='row region-container p-5 mb-5'>
                <div className='col-md-6'>
                    <BarChart width={600} height={350} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="subject" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="A" fill="#8884d8" />
                    </BarChart>
                </div>

                <div className='col-md-6 align-items-center justify-content-center d-flex'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium commodi fugit nam neque
                        odit pariatur quasi quos suscipit. At earum et fuga itaque, iusto libero! Doloremque dolores ea
                        impedit nesciunt.</p>
                </div>
            </div>
        );
    }
}

export default NewForests;