import React, { Component } from 'react'
import axios from "axios";
import RacerRows from '../components/RacerRows';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            racers: []
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const season = e.target.year.value;

        axios.get(`https://ergast.com/api/f1/${season}/driverStandings.json`)
            .then(res => {
                this.setState({
                    racers: res.data.MRData.StandingsTable.StandingsLists[0].DriverStandings
                })
            })
    }

    render() {
        return (
            <div className= 'offset-1'>
                <form className="form-inline" style={{ margin: '25px 0' }} onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" name="year" className="form-control" placeholder="Enter a year" style={{ margin: '10px 0px' }} />
                        <input type="submit" value="Submit" className="btn btn-warning" />
                    </div>
                </form>
                <RacerRows racers={this.state.racers} />
            </div>
        )
    }
}
