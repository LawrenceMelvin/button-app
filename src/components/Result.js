import React from 'react'

function Result(props) {
    return (
        <div className={"bmi-result alert " + props.alertClass}>
            <div>{ props.bmi || '--.-' }</div>
            <div>{ props.label }</div>
        </div>
    )
}

export default Result;