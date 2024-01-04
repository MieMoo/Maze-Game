import React from "react";
import { Link } from "react-router-dom";

function MainMenu() {
    return (
        <div className="layout" id="root">
            <div className="mainmenu-contents">
                <h1><center>Labyrinth of Shadows</center></h1>
                <div className="mainmenu-buttons">
                    <Link to={"/game"}><button>Play</button></Link>
                    <Link to={"/instructions"}><button>Instructions</button></Link>
                    <Link to={"/aboutus"}><button>About Us</button></Link>
                </div>
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><h3><center>Welcome to "Labyrinth of Shadows"</center></h3>
            </div>
        </div>
    )
}

export default MainMenu