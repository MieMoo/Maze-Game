import { useRef, useEffect } from "react"
import React from "react"
import { generateHexCode } from "../Module/Format"

let previousWidth = 0
let previousHeight = 0

let lineWidth = 5

export let color = "#"

function draw(context, width, height, size, tileColorA, tileColorB, map) {
    if (map === undefined) {
        map = [...Array(parseInt(510 / 30))].map(e =>
            Array(510 / 30).fill(0))
    }
  lineWidth = context.lineWidth

  context.clearRect(0, 0, previousWidth, previousHeight);

  for (let i = 0; i <= width; i += size) {
      context.beginPath();
      context.moveTo(i, 0)
      context.lineTo(i, height + lineWidth / 2)

      context.strokeStyle = "#000000"
      context.stroke()
  }

  for (let i = 0; i <= height; i += size) {
      context.beginPath();
      context.moveTo(0, i)
      context.lineTo(width + lineWidth / 2, i)

      context.strokeStyle = "#000000"
      context.stroke()
  }

  let patternValue = 0
  for (let i = 0; i < height / size; i++) {
      for (let j = 0; j < width / size; j++) {
        if (map[i][j] === 1) {
            context.fillStyle = "#00FF00"
        }
        else if (map[i][j] === 2) {
            context.fillStyle = generateHexCode("01")
        }
        else if (map[i][j] === 3) {
            context.fillStyle = generateHexCode("013456")
        }
        else if (map[i][j] === 4) {
            context.fillStyle = generateHexCode("013456789")
        }
        else if (map[i][j] === 9) {
            context.fillStyle = "#FFFF00"
        }
        else if (map[i][j] === 0) {
            context.fillStyle = patternValue % 2 === 0 ? tileColorA : tileColorB;
        }
          context.fillRect(j * size + lineWidth / 2, i * size + lineWidth / 2, size - lineWidth / 2, size - lineWidth / 2);
          patternValue++
      }
      patternValue += (width / size) % 2 === 0 ? 1 : 0
  }

  previousWidth = width
  previousHeight = height
}

const Board = ({width, height, cellSize, tileColorA, tileColorB, x, y, map}) => {
    const canvasRef = useRef(null)

    useEffect(() => {
      const canvas = canvasRef.current
      const context = canvas.getContext("2d")

      draw(context, width, height, cellSize, tileColorA, tileColorB, map)
    })

    return <canvas ref={canvasRef} width={width + lineWidth} height={height + lineWidth} style={{
        position: "fixed",
        zIndex: -1,
        top: "50%",
        left: "50%",
        transform: `translate(${x}px, ${y}px)`
    }}/>
}

export default Board