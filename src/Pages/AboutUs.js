import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
    return (
        <div className="layout">
            <div className="aboutus-details">
                <p>
                    <h1><center>ABOUT US AND LABYRINTH OF SHADOWS</center></h1>

                    <br></br><br></br>Welcome to the unnerving world of "Labyrinth of Shadows." Allow us to introduce the quart of minds behind the twisted corridors, cryptic puzzles, and haunting nightmares that await your exploration.


                    <br></br><br></br>SHANE BARRETE - Game Programmer: 
                    <br></br>Crafted the seamless gameplay experiences, ensuring the nightmare flows effortlessly.

                    <br></br><br></br>AARON ANGELES - Game Concept Maker:
                    <br></br>Conceptualized the spine-chilling narrative and crafted the overarching story that blurs the lines between reality and the surreal.

                    <br></br><br></br>RAYLINE CRUZ & KRIZLE PRIVADO:
                    <br></br>Shaped the visual and interactive elements of terror. Details meticulously designed, and created an immersive and chilling atmosphere.

                    <br></br><br></br>OUR VISION:
                    <br></br>- United by a passion for horror gaming, our collaboration birthed the Labyrinth of Shadows.
                    <br></br>- Each role contributes to the seamless integration of gameplay, design, and narrative.

                    <br></br>Get ready for a spooky adventure with "Labyrinth of Shadows," a cool game that's all about facing your fears in a haunted maze. This game is made by a 4 of people who really love scary stuff.

                    <br></br>[ Easy Controls ]
                    <br></br>• Playing on your phone or tablet is super easy. Just use the arrow buttons on the screen to move your character around. If you want to go left, tap the left arrow. To go right, tap the right arrow. Going up or down? Use the up and down arrows. It's like having a remote control for your character! (Same goes for the Laptop/PC users)

                    <br></br>[ Creators' Passion for Horror ]
                    <br></br>• The creators worked together to make sure everything, from the creepy sounds to the spooky pictures, gives you a real adventure. The game programmer, the game designer, and the one who came up with the story (conceptualized) all joined forces to make "Labyrinth of Shadows" something special.

                    <br></br>[ Are You Brave Enough? ]
                    <br></br>• Ready to be a hero and face the scary maze? Dive into the Labyrinth of Shadows, where every step brings you closer to solving the mysteries. Just be brave, and see if you can escape the darkness. Will you make it through, or will you be lost in the spooky place? It's all up to you!

                    <br></br><br></br><center>Thank you for choosing to explore the shadows with us.

                    <br></br><br></br>— The Creators of Labyrinth of Shadows</center>
                </p>
                <Link to={"/"}><button>Back</button></Link>
            </div>
        </div>
    )
}

export default AboutUs