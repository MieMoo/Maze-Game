import React, { useEffect, useState } from "react"
import { format } from "../Module/Format"
import Board from "../Canvas/Board"
import { GetMap, mapList } from "../Module/Map"
import { generateHexCode, generateObfuscation } from "../Module/Format"
import { Link } from "react-router-dom"
import "../App.css"
import { levelTitle, levelStory } from "../Module/LevelInfo"

let level = 0
let map = GetMap(level)
let tempCellSize = 30

const Player = () => {
    const [width, setWidth] = useState(30)
    const [height, setHeight] = useState(30)
    const [cellSize, setCellSize] = useState(30)

    const [colorA, setColorA] = useState("#FF99FF")
    const [colorB, setColorB] = useState("#AA44AA")

    const [currentPosition, setCurrentPosition] = useState([])

    const [x, setX] = useState(-250)
    const [y, setY] = useState(-250)

    function CheckForWall(position) {
        if (position[1] >= 17 || position[1] <= -1) {
            return true
        }

        if (position[0] >= 17 || position[0] <= -1) {
            return true
        }

        if (map[position[1]][position[0]] === 2) {
            return true
        }

        if (map[position[1]][position[0]] === 4) {
            return true
        }

        return false
    }

    function FindStartingPosition() {
        document.getElementById("colorInput").value = 30;
        setCellSize(30)
        for (let i = 0; i < map.length; i++)    {
            for (let j = 0; j < map[i].length; j++) {
                if (map[i][j] === 1) {
                    setX(-250 + (j * tempCellSize))
                    setY(-250 + (i * tempCellSize))
                    setCurrentPosition([j, i])
                }
            }
        }
    }

    function CheckForPassable(position) {
        if (map[position[1]][position[0]] === 9) {
            level++
            if (level > mapList.length - 1) {
                level = 0
            }
            map = GetMap(level)
            FindStartingPosition()
        }

        if (map[position[1]][position[0]] === 3) {
            for (let i = 0; i < map.length; i++) {
                for (let j = 0; j < map[i].length; j++) {
                    if (map[i][j] === 4) {
                        map[i][j] = 0
                    }
                }
            }
        }
    }

    useEffect(() => {
        level = 0
        map = GetMap(level).map(inner => inner.slice())
        setCellSize(30)
        FindStartingPosition()
    }, [])

    useEffect(() => {
        function OnKeyDownHandler(event) {
            if (event.key === "a" || event.key === "A") {
                let res = [currentPosition[0] - (cellSize / 30), currentPosition[1]]
                if (CheckForWall(res)) return
                setCurrentPosition(res)
                setX(x - cellSize)
                CheckForPassable(res)
            }
    
            if (event.key === "d" || event.key === "D") {
                let res = [currentPosition[0] + (cellSize / 30), currentPosition[1]]
                if (CheckForWall(res)) return
                setCurrentPosition(res)
                setX(x + cellSize)
                CheckForPassable(res)
            }
    
            if (event.key === "w" || event.key === "W") {
                let res = [currentPosition[0], currentPosition[1] - (cellSize / 30)]
                if (CheckForWall(res)) return
                setCurrentPosition(res)
                setY(y - cellSize)
                CheckForPassable(res)
            }
    
            if (event.key === "s" || event.key === "S") {
                let res = [currentPosition[0], currentPosition[1] + (cellSize / 30)]
                if (CheckForWall(res)) return
                setCurrentPosition(res)
                setY(y + cellSize)
                CheckForPassable(res)
            }
        }

        document.addEventListener('keydown', OnKeyDownHandler)
        
        return () => {
            document.removeEventListener('keydown', OnKeyDownHandler)
        }
    }, [x, y, cellSize, currentPosition])

    return (
        <div className="layout" id="root">
            <div className="board">
                <Board
                    width={510}
                    height={510}
                    cellSize={30}
                    tileColorA={generateHexCode("0123")}
                    tileColorB={generateHexCode("0123")}
                    x={-250}
                    y={-250}
                    map={map}
                />

                <Board
                    width={width}
                    height={height}
                    cellSize={cellSize}
                    tileColorA={colorA}
                    tileColorB={colorB}
                    x={x}
                    y={y}
                />
            </div>

            <div className="left-display">
                <input type="text" placeholder="Ẃ̶̡̻͎̜̝̤͕̝̦͚͊̍̈́Ḯ̵̢̗̲̹̲̠͙̳̋ͅD̶̨͙̤̗̝̼͔̯̤̘̥͓͕̤̈̔̅̒͜͝T̴̡͚̟̣̯̞͙͔͕̼̺̹̝̫͒̆͜Ḩ̷̩̼͖̤̼̜͉̐̈́̄̉̚͘̕͠͠ ̴̺͔͈̲͌̌̀̇̈́̆͂̚͝͝.̷̛̩̝̞̰̙̔́̈́͗̍͛̚.̸̮̒̓̓̿̒̑̿͘.̴͚̖̟̄͊̒͛̇̃̈́͗͌̃̚͠͝͠.̴̛̥̹̼̝̫̼̣͇͍̟͉͈͒̾̒͂̅͗̇̎͛̕͠͠.̴̧̬̭͎̬͖̹̼͚̣̗̘͒̓̐̃̊͆͜͜ͅ ̷̡̧͉͉̮͙̱̠̲̻̓E̸̞̼̭̊̐͌̀́͗͂͠R̴̡̟͈̳̝̫͓͈̺̝̺̻͔̄̔́̄̄̕͝ͅȒ̶̭̱͙͍̞̮̖̣͖͈͎̪̯̮͔̓͋͆̋̌͐̎͗̍̏" readOnly={true} onKeyUp={e => 
                    setWidth(format(e.target.value))}/>
                <label>WidT̴̡͚̟̣̯̞͙͔͕̼̺̹̝̫͒̆͜Ḩ̷̩̼͖̤̼̜͉̐̈́̄̉̚͘̕͠͠: {generateObfuscation(100)}</label>

                <input type="text" placeholder="h.̸̛̗̗̱́̃̉͛̃͋̑͐̎̂́̋͜x̵̛͇͉͇̽̿̓͆̀̅̏͌̐̽̎ ̷̙̣̩̪͉̗̞̩͈͈̲̳͍̖̂̀͒͌̉̋́̀͝H̴̳̯̥͍͙̫̯̀͘Ȅ̵̢̹̣̘̙̪̽̅́͛̕͠ͅḮ̴͔̱̰̜͖̟̂̿̐̾̄G̵̨̙̦̜͕̳͍̼̩̣͙͎̪̲̑̂͗̏͂̀͝Ḩ̴̪̒̑̈̈̕͜͝T̵̨̨̜̯͔̬̰̺̝̖̣̤̪͎͆ ̷̬͖͇̳̋͌̏̉̑͂̃.̸̲̖͖̹̖̜̹̗̩̯͉̼̭͓͒͑͛̐̊̈̈́͗͂>̷̛̝̲͇̝̥̥̺͎̻͕̦̈́͂͗̐̾̊̕̚͜" readOnly={true} onKeyUp={e =>
                    setHeight(format(e.target.value))}/>
                <label>HȄ̵̢̹̣̘̙̪̽̅́͛̕͠ͅiG̵̨̙̦̜͕̳͍̼̩̣͙͎̪̲̑̂͗̏͂̀͝ht: {generateObfuscation(100)}</label>

                <input type="text" placeholder="cell size" id="colorInput" onKeyUp={e =>
                    setCellSize(format(e.target.value))}/>
                <label>Cell Size: {cellSize}</label>

                <input type="color" placeholder="tile A color" onInput={e => {
                    setColorA(e.target.value)
                }}/>
                
                <label>Tile A Color: {colorA}</label>

                <input type="color" placeholder="tile B color" value={generateHexCode("1234567890ABCDEF")} onInput={e =>
                    setColorB(e.target.value)}/>
                <label>Ç̵̛̟͙͍̈́͂̽͗.̶̫͉͍̗̞̯͈̍̅͋Ŏ̵̤́́͘\̸̠̟̳̗̻̣̗͊̎͒͊̈́́͝0̴̫̦͑̊̄̅̋̕R̶̡̛͇̠̩̯̞̠̩͓͎̼͖̋̈́̓́́̅̈́͗́̀͆͘̕͠.̴̢̧̧̼̻̟̺͈̯̀͗͌͝ ̴̢̛͉̺̹̹͕̠̖̦̹̦̪̎̄͌͌͒́̑͒̋͝Ḽ̷̢̰̗̔̔̈́̿̑͗̽̑͐I̶̠̤͒̎͆̒ͅE̶̝̗͈͙̲̳̙̥̱̜̪͊̃̑͆̈̽͛̒̀̎͊̈̂̚͝.̶̹̣͐͑͘͜.̶̞̤̥̂̑̉̋͋̾́͋̂͐͗̂͝.̴͚̤̗̏͌̈́̇́̐͠͝S̶̗̼̦̙̗͔͇̐̆̀̏̂̈́̃͋͠: {generateHexCode("1234567890ABCDEF")}</label>

                <label>Vertical position: {x} Horizontal position: {y}</label>

                <label>Grid Position: {currentPosition[1]} : {currentPosition[0]}</label>

                <Link to={"/"}><button>Back</button></Link>
            </div>

            <div className="right-display">
                <b className="level-title">{levelTitle[level]}</b>
                <p className="level-story">
                    {[levelStory[level]]}
                </p>
            </div>

            <div className="ui-controller">
                    <button onClick={() => {
                        let res = [currentPosition[0], currentPosition[1] - (cellSize / 30)]
                        if (CheckForWall(res)) return
                        setCurrentPosition(res)
                        setY(y - cellSize)
                        CheckForPassable(res)
                    }}>↑</button>
                    <button onClick={() => {
                        let res = [currentPosition[0] - (cellSize / 30), currentPosition[1]]
                        if (CheckForWall(res)) return
                        setCurrentPosition(res)
                        setX(x - cellSize)
                        CheckForPassable(res)
                    }}>←</button>
                    <button onClick={() => {
                        let res = [currentPosition[0] + (cellSize / 30), currentPosition[1]]
                        if (CheckForWall(res)) return
                        setCurrentPosition(res)
                        setX(x + cellSize)
                        CheckForPassable(res)
                    }}>→</button>
                    <button onClick={() => {
                        let res = [currentPosition[0], currentPosition[1] + (cellSize / 30)]
                        if (CheckForWall(res)) return
                        setCurrentPosition(res)
                        setY(y + cellSize)
                        CheckForPassable(res)
                    }}>↓</button>
            </div>
        </div>
    )
}

export default Player