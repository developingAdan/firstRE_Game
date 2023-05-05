// we seperate scope from our game from Global scope, to make sure our
// custom class and var namesdon't interfere with any outside code.
window.addEventListener('load', function() {
    const canvas = document.getElementById('canvas1')
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 720;


    // these are our coding building blocks we need for our game
    class InputHandler {
        constructor() {
            this.keys = [];
            window.addEventListener('keydown', e => {
                if (e.key === 'ArrowDown' && this.keys.indexOf(e.key) === -1) {
                    this.keys.push(e.key);
                }
                console.log(e.key, this.keys)
            }); // we use an arrow function because arrow functions don't bind their own "this",
                // but they inherit the one from their parent scope, this is called Lexical Scoping

            window.addEventListener('keyup', e => {
                if (e.key === 'ArrowDown') {
                    this.keys.splice(this.keys.indexOf(e.key), 1); 
                }
                console.log(e.key, this.keys)
            }); 
        }
    } // this class applies eventListeners to keyboard events and will hold an array of all currently active keys
    
    
    class Player {

    } // this class will react to the keys as they are being pressed


    class Background {

    } // simple class that handles endless scrolling background

    class Enemy {

    } // a class that generates enemy image

    function handleEnemies() {

    } // this class adds, animates and removes enemies from the game


    function displayStatusText() {

    }

    const input = new InputHandler();

    function animate() {

    } // this function runs 60x per second, updating our game over and over
}); // the "load" event waits for all assets such as spritesheets and images to be fully loaded
    // before it executes code in in it's callback function