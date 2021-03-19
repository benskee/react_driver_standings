import React, { Component } from 'react'
import RacerInfo from './RacerInfo'

export default class RacerRows extends Component {
    render() {
        if (!this.props.racers[1]) {
            return null;
        }
        return (
            <div className="table-responsive">
                <table className="table table-striped table-inverse">
                    <thead className="thead-inverse">
                        <tr>
                            <th>Position</th>
                            <th>Name</th>
                            <th>Points</th>
                            <th>Wins</th>
                            <th>Nationality</th>
                            <th>Constructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <React.Fragment>
                            {this.props.racers.map(racer => <RacerInfo key={racer.position} racer={racer} />)}
                        </React.Fragment>
                    </tbody>
                </table>
            </div>
        )
    }
}
