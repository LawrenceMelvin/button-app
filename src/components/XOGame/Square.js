import React from 'react'

const Square = ({onClick, value}) => {
    const style={
        background:'lightblue',
        border:'3px solid darkblue',
        fontSize:'30px',
        padding:'30px',
        paddingRight:'40px',
        paddingLeft:'40px',
        margin:'2px',
        cursor:'pointer'
    }
    return (
        <button onClick={onClick} style={style}>
            {value}
        </button>
    )
}

export default Square
