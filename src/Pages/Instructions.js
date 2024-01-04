import React from "react";
import { Link } from "react-router-dom";

function Instructions() {
    return (
        <div className="layout" id="root">
            <div className="instruction">
                <h1 className="instruction-title">How to play:</h1>
                Welcome to the petrifying world of "Labyrinth of Shadows," a horror maze 2D game designed for handheld devices. Immerse yourself in a nightmarish journey filled with twisted labyrinrth, cryptic puzzles, and lurking horrors. To navigate this ominous maze, use the floating buttons provided for seamless control over your character.

                <br></br><br></br>Movement Controls:

                <br></br>&emsp;➤ Left Arrow Button &nbsp;&nbsp;&nbsp;( ← ) ( A ) - Press to move your character left.
                <br></br>&emsp;➤ Right Arrow Button &nbsp;( → ) ( D ) - Press to move your character right.
                <br></br>&emsp;➤ Up Arrow Button &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;( ↑ ) ( W ) - Press to move your character upward or forward.
                <br></br>&emsp;➤ Down Arrow Button ( ↓ ) ( S ) - Press to move your character downward.
                <br></br>&emsp;➤ Cell Size &emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;( Input Field: Cell Size ) - Input every 30 value to jump a grid. Example: 30 is 1, 60 is 2... (default: 30)


                <br></br><br></br>Puzzle Solving:
                <br></br>&emsp;Encounter cryptic puzzles that block your path. Use your wit and observation skills to solve these puzzles and progress deeper into the maze. 

                <br></br><br></br>Objective:
                <br></br>&emsp;Unravel the mysteries of the Labyrinth of Shadows, confront your fear, and strive to escape the nightmarish maze. Your survival depends on your courage, intelligence, and ability to decipher the secrets that lie within.
            
                <br></br><br></br><Link to={"/"}><button>Back</button></Link>
            </div>
        </div>
    )
}

export default Instructions