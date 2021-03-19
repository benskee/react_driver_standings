import React, { Component } from 'react'

export default class RacerInfo extends Component {
    render() {
        const racer = this.props.racer;

        return (
            <tr>
                <td>{racer.position}</td>
                <td><a href={racer.Driver.url}>{racer.Driver.givenName} {racer.Driver.familyName}</a></td>
                <td>{racer.points}</td>
                <td>{racer.wins}</td>
                <td>{racer.Driver.nationality}</td>
                <td>{racer.Constructors[0].nationality}</td>
            </tr>
        )
    }
}
