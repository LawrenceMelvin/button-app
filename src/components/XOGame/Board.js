import React, {useState, useEffect} from 'react';
import Square from './Square'

const Board = () => {
    const [moves, setMoves] = useState([]);
    const [player, setPlayer] = useState(true);

    function changeValue(id){ 
        if(!filterMoves(id).check){
            setPlayer(!player)
            const resp = player ? "X": "O"
            setMoves([...moves, {
                player: player ? 1: 2,
                value: resp,
                move: id
            }])
        }
    }

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const filterMoves = (id) => {
        const check = moves.filter(item => item.move === id)
        return {check: check.length, data: check.length ? check[0]: null } 
    }

    const XOXO = () => {
        let value = [];
        let squares = new Array(9);
        for (let id = 1; id<=squares.length; id++) {
            if((id % 3) === 0){
                value.push(
                    <>
                        <Square 
                            value={filterMoves(id).check ? filterMoves(id).data.value: ""} 
                            onClick={() => changeValue(id)} 
                            disabled={filterMoves(id).check ? true: false} 
                        />
                        <br/>
                    </>
                )
            }
            else{
                value.push(
                    <Square 
                        value={filterMoves(id).check ? filterMoves(id).data.value: ""} 
                        onClick={() => changeValue(id)} 
                        disabled={filterMoves(id).check ? true: false} 
                    />
                )
            }
            
        }
        return <>{value}</>
    }



    return (
        <div>
            <h4>{player ? "Player 1": "Player 2"}</h4>
            <XOXO />
        </div>
    )
}


export default Board
