# Rythmoos Engine

The Rythmoos Engine allows you to create games easily using ES6 or Typescript.

What it does:
- Game loop
- Game, Scene and GameObject extendable classes for object-oriented code.
- Time management (deltaTime, FPS count, etc)
- Assets loading (load assets before the game start, or load them on the fly)
- Global storage (called "state", allows you to share values easily between all components throughout your game)
- Input mapping (easily access to mouse, cursor and keyboard properties)
- and more!

# Requirements

* [Node.js](https://nodejs.org/en/download/)

# Installation

**Package manager (recommended)**:
- Using NPM: `npm install --save rythmoos-engine`
- Using Yarn: `yarn add rythmoos-engine`

Prebuilt:
- Unminified: https://raw.githubusercontent.com/ChibiFR/rythmoos-engine/master/build/rythmoos-engine.js
- Minified: https://raw.githubusercontent.com/ChibiFR/rythmoos-engine/master/build/rythmoos-engine.min.js

CDN:
- Unminified: https://cdn.rawgit.com/ChibiFR/rythmoos-engine/master/build/rythmoos-engine.js
- Minified: https://cdn.rawgit.com/ChibiFR/rythmoos-engine/master/build/rythmoos-engine.min.js

# Documentation

The references and documentation are available [here](https://chibifr.github.io/rythmoos-engine/).

# Examples

Examples are available in the examples directory.

You can see the results in there:
- [FPS Counter](https://chibifr.github.io/rythmoos-engine/media/fps-counter/index.html)
- [Moving sprite](https://chibifr.github.io/rythmoos-engine/media/moving-sprite/index.html)
- [Quick start example](https://chibifr.github.io/rythmoos-engine/media/quick-start-example/public/index.html)
- [Rythm Clicker](https://chibifr.github.io/rythmoos-engine/media/rythm-clicker/public/index.html)

# Quick start

## Introduction

Let's make a very simple game just to see how the Rythmoos Engine works.

This game will simply spawn circles to random places on the screen and the player will have
to click the shapes in order to earn more score.

You can find the result [here](https://chibifr.github.io/rythmoos-engine/media/quick-start-example/public/index.html).

## Project setup

Let's start!

For this example, we'll use [Webpack](https://webpack.js.org/) so we can easily bundle our classes
into one single file.

The first thing to do, as for any project, create a directory and add the dependencies we need:

`mkdir my-awesome-game && cd my-awesome-game`

Now we can initialise NPM and install our dependencies.
As I said earlier, we are going to use Webpack. We will also need to install the Rythmoos Engine and
we'll use express to serve our files:

- Initialise: `npm init -y`
- Dependencies: `npm install --save express rythmoos-engine`
- Dev dependencies: `npm install --save-dev webpack`

The project structure will look like so:

```
* public/ (static files here)
  - index.html
  - my-awesome-game.js (our game)
  - style.css
* src/ (the source files of our game)
  - index.js (our main game class, we'll add other files)
* index.js (express server)
* package.json (npm package file)
* webpack.config.js (webpack config)
```

You can copy paste these:

*public/index.html*
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>My Awesome Game</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <script src="my-awesome-game.js"></script>
  </body>
</html>
```

*public/style.css*
```css
/* Make the canvas fit the screen */
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

canvas {
  display: block;
}
```

*index.js*
```javascript
const express = require('express');
const app = express();

app.use(express.static('public'));
app.listen(3000, () => {
  console.log('App listening on port 3000!');
});
```

*package.json*
Created by NPM already, but you can add a "watch" script to it that we'll use later:
```json
"scripts": {
  "watch": "webpack --watch"
}
```

*webpack.config.js*
```javascript
const path = require('path');

module.exports = {
  // The entry point of our app
  entry: path.join(__dirname, 'src', 'index.js'),

  // The output file
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'my-awesome-game.js'
  },

  // Source maps for ez debugging
  devtool: 'source-map'
};
```

**Note** that we don't add the Rythmoos Engine to the external libraries of our webpack config. That's
because having the engine available in the window object also makes its global classes (Loader, State, etc...)
available from the window object, and we don't want that.
A better idea is to simply build the engine along with our code so that it is not available from the global
namespace.

Now that we are done setting up our project, let's start our server:
`node index.js`
and run Webpack as a watcher (using the script we added to the package.json file) so it builds our game everytime
we make changes to it:
`npm run watch`

You can now open your browser at http://localhost:3000 and see a blank page that we will fill with our awesome
game.

## Game class

Every game starts with the Game class. Let's create our game's class that extends the engine's Game class:

*src/index.js*
```javascript
import {Game} from 'rythmoos-engine';

class MyAwesomeGame extends Game {
}
```

To start our game, we simply need to instantiate it. Let's add this bit of code below
our game class:
```javascript
// When the window is loaded, create a new game
window.onload = () => {
  // A game instance needs a width, height and a container.
  // Let's give it the window's width and height, and the body as container.
  new MyAwesomeGame(window.innerWidth, window.innerHeight, document.body);
}
```

If you reload your page (http://localhost:3000) you should see a black screen...hm, that means
everything's working fine!

Since we don't have anything to render yet, the engine renders a black background and nothing else.

Before going further, let's see how the engine works. A simple way to explain it:
- Create a class that extends a class from the engine (game: Game class, scene: Scene class, etc).
- Override the methods you need to use (create(), update(), etc).
- Hm...that's it! ;o

Here are the methods you can override from the game:
```javascript
class Game {

  /**
   * Ran just before the game starts.
   * Example use: load assets (images, audio, etc).
   */
  load() {
  }

  /**
   * Ran when the game is created.
   * Example use: Initialise some states, set the game's scene.
   */
  create() {
  }

  /**
   * Ran each frame, to update the game, before the rendering process.
   * Example use: Update some game properties.
   */
  update() {
  }

}
```

We'll override some methods from the Game class later. For now, let's create a scene!


## Scenes

A scene is basically a "screen" in our game. For example, a main screen (with a title, a start button, etc)
would be a scene. Another screen, let's say the settings screen, would be a scene too. And we'd of course have
one (or more) scene for the gameplay.

Since our game is just a very simple one, we'll need only one scene. Let's create it now:

*src/MainScene.js*
```javascript
import {Scene} from 'rythmoos-engine';

// As for the game class, we extend the engine's Scene class.
// We'll export the scene so we can use it from other files.
export default class MainScene extends Scene {
}
```

So, we know what a scene is, how to create one, let's now see how to actually code it!

Here are the methods you can override from the scene:
```javascript
class Scene {

  /**
   * This method is ran when the scene is created (new Scene()).
   * Example use: initialise your scene's properties, add game objects, etc.
   */
  create() {
  }

  /**
   * This method is ran every frame, before the rendering process, to update the scene.
   * Example use: update your scene's properties.
   */
  update() {
  }

}
```

Hm, so...we need game objects! Let's create some.

## Game objects

To start, let's create a very simple game object: A FPS counter.
Its purpose is simple: renders the amount of frames per second our game is running at.

Let's create the class:

*src/FPSCounter.js*
```javascript
import {GameObject} from 'rythmoos-engine';

export default class FPSCounter extends GameObject {
}
```

Before we add any code to it, here are the methods you can override from the GameObject class:
```javascript
class GameObject {

  /**
   * You already know it, ran when the game object is created.
   * Example use: Initialise the game object's properties.
   */
  create() {
  }

  /**
   * Same as for Game and Scene, ran every frame, before the rendering process.
   * Example use: Update the game object's properties, check for input, etc.
   */
  update() {
  }

  /**
   * Ran every frame, during the rendering process.
   * 
   * This is where things get interesting: we'll render our game object from here, using
   * a simple 2D Rendering context, from the game's canvas.
   * 
   * The context automatically passed in by the renderer. Feel free to do whatever you want with it,
   * its state is saved and restored for each game object, that way you can modify the context's properties
   * (globalAlpha, fillStyle, etc...) without affecting the other game objects.
   * @param {CanvasRenderingContext2D} context
   */
  render(context) {
  }

}
```

## The Mouse class

Alright, let's actually code our FPS counter! But wait, how do we access the FPS value?
Well, all we need is the Time class, so let's import it:

*src/FPSCounter.js*
```javascript
import {GameObject, Time} from 'rythmoos-engine';

export default class FPSCounter extends GameObject {

  // In order to render our object, we can simply override the render method.
  render(context) {
    // Some colour and font for the text
    context.fillStyle = '#ffffff';
    context.font = '30px Arial';
    
    // This allows us to position the text from its top left corner
    context.textAlign = 'left';
    context.textBaseline = 'top';

    // The FPS value is available from the Time.FPS property, let's render that:
    context.fillText(Time.FPS, 20, 20);
  }

}
```

Now that we have our FPS counter, let's add it to the scene:

*src/MainScene.js*
```javascript
import {Scene} from 'rythmoos-engine';
// Import our FPSCounter game object
import FPSCounter from './FPSCounter';

export default class MainScene extends Scene {

  // We can add our game objects in the create method
  create() {
    // The scene class extends the Map class (see docs).
    // We can set game objects using the set(name, value) method.
    this.set('fps counter', new FPSCounter());
  }

}
```

then we need to actually tell the game to render our MainScene:

*src/index.js*
```javascript
import {Game} from 'rythmoos-engine';
// Import our scene
import MainScene from './MainScene';

class MyAwesomeGame extends Game {

  // We can set the scene in our create method
  create() {
    // The scene is a public property, so you can set it to whatever scene you want
    // at any point in your game.
    this.scene = new MainScene();
  }

}

// When the window is loaded, create a new game
window.onload = () => {
  // A game instance needs a width, height and a container.
  // Let's give it the window's width and height, and the body as container.
  new MyAwesomeGame(window.innerWidth, window.innerHeight, document.body);
}
```

Alright! We created a game, created a scene, created a game object.

We then added the game object to the scene and the scene to the game.

You can see the result by reloading your game page at http://localhost:3000, you should
see this:

![Game screen 1](https://chibifr.github.io/rythmoos-engine/media/not-an-example/01.png)

Since the engine uses the animation frame, it should run at about 60 frames per second.
As you can see, the Time.FPS property retuns a decimal number, and we don't want that! We only want
the integer part of the number. So let's round that up.

By the way, in the FPSCounter class, we directly printed the Time.FPS property in the render method.
This is an okay thing, but a better practice is to put all the logics and values in the update method
and keep the render method for rendering purpose only:

*src/FPSCounter.js*
```javascript
import {GameObject, Time} from 'rythmoos-engine';

export default class FPSCounter extends GameObject {

  // Initialise our fps counter when the object is created.
  create() {
    // Let's round the FPS value and add 'fps' after it so we know what that number is about.
    this.fps = `${Math.round(Time.FPS)}fps`;
  }

  // The Time.FPS value is updated every frame, so let's update our game object's fps property!
  update() {
    this.fps = `${Math.round(Time.FPS)}fps`;
  }

  // In order to render our object, we can simply override the render method.
  render(context) {
    // Some colour and font for the text
    context.fillStyle = '#ffffff';
    context.font = '30px Arial';

    // This allows us to position the text from its top left corner
    context.textAlign = 'left';
    context.textBaseline = 'top';

    // And let's render our game object's fps property here:
    context.fillText(this.fps, 20, 20);
  }

}
```

Now you should see this:

![Game screen 2](https://chibifr.github.io/rythmoos-engine/media/not-an-example/02.png)

A legit FPS counter, yay.

Since we know how to create game objects, let's actually create our game.
We'll need two more game objects: A Circle (which will be the shape we have to click on in order to
earn more score points), and a Score (which will display our current score).

Let's create our Circle game object:

*src/Circle.js*
```javascript
import {GameObject} from 'rythmoos-engine';

export default class Circle extends GameObject {
}
```

## The Screen class

We'll need to create some properties, this is what I suggest for our circle:
- an x and a y coordinate
- a radius
- a colour
- a boolean set to whether the mouse is hovering the circle or not

Since we are going to need to know about the cursor position and the mouse click events,
we'll need to import the Mouse class from the engine. It contains everything we need.

Next, about the x and y coordinates, we want them to be random anywhere in the screen. Whenever you
need to access properties such as the width/height of your game, you can import the Screen class.

Don't forget to check out the documentation for all these classes to see what they contain! ;o

This is the final code we'd come with, read the comments if you don't understand everything of it:

*src/Circle.js*
```javascript
import {GameObject, Screen, Mouse} from 'rythmoos-engine';

// Our circle game object
export default class Circle extends GameObject {

  // Override the create method
  create() {
    // Let's set up our game object properties here

    // The radius of our circle
    this.radius = 50;

    // The x and y coordinates
    this.x = this.getNewPosition(Screen.width);
    this.y = this.getNewPosition(Screen.height);

    // Let's set a boolean value that checks whether the mouse is hovering the circle or not.
    this.hovered = false;

    // The colour of our circle (let's make it white when hovered)
    this.colour = '#ff00ff';
  }

  // Override the update method
  update() {
    // This method is ran each frame, before the rendering process.
    // Let's update our game object properties from here:

    // If the circle is hovered, let's set its colour to white, or set it to
    // #ff00ff otherwise.
    this.colour = this.hovered ? '#ffffff' : '#ff00ff';

    // If the mouse left button is clicked and the circle is hovered
    if (this.hovered && Mouse.leftClick) {
      // Set new positions for our circle
      this.x = this.getNewPosition(Screen.width);
      this.y = this.getNewPosition(Screen.height);
    }
  }

  // Override the render method
  render(context) {
    // We will render our object form here.
    context.fillStyle = this.colour;

    // Draw the circle
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fill();

    // Since we drew our circle's path, we can use the context isPointInPath method to check
    // whether the cursor is in the path or not.
    this.hovered = context.isPointInPath(Mouse.cursorX, Mouse.cursorY);
  }

  /**
   * Simple custom method to set our game object's x and y coordinates
   * @param {number} max The max possible value
   * @return A random x
   */
  getNewPosition(max) {
    // Some very complex mathemical stuff
    return Math.random() * (max - this.radius * 2) + this.radius;
  }

}
```

Don't forget to add this game object to the scene!

Import it:

```javascript
import FPSCounter from './FPSCounter';
```

Add it (before the FPSCounter):

```javascript
this.set('circle', new Circle());
```

We are adding it before the FPS Counter before we want the circle to appear behind the counter.
The game objects are rendered in the order they are added to the scene.

## The State class

Now we want to save the score, but where do we save it? We could save it in a property of our Circle
game object. But how can we use this value from the Score game object (that we'll create soon) in order
to display it to the screen?

The answer: the State class!

While many game engines use the word "State" to define a Scene, a State in the Rythmoos Engine is a value
(number, string, object, whatever) that is, most of the time, supposed to change, and that we need throughout
our game.

The State class allows us to set values, and get them, globally, just by importing the class.
Basically, you could set a state in your game's create or update method, and access it from a game object!

In this example, we will use it to share the score value between the Circle object (which will set the score)
and the Score object (which will display it).

The State class can be used as so:
```javascript
// import it
import {State} from 'rythmoos-engine';

// Set a value
State.set('my value', 45);

// Get the value
State.get('my value');

// Update the value
State.set('my value', 48144478);
```

Let's give the player +1 point when the circle is sucessfully clicked, and I feel like being mean here
so we'll remove 1 point from the player's score everytime clicks but is not hovering the circle.

Okay that's mean, but not enough. Let's make it even more frustrating: we'll change the circle position
every time the user clicks, even if the click was missed.

So, that's what our Circle class should look like by now, as always the comments are here to help:

*src/Circle.js*
```javascript
import {GameObject, Screen, Mouse, State} from 'rythmoos-engine';

// Our circle game object
export default class Circle extends GameObject {

  // Override the create method
  create() {
    // Let's set up our game object properties here

    // The radius of our circle
    this.radius = 50;

    // The x and y coordinates
    this.x = this.getNewPosition(Screen.width);
    this.y = this.getNewPosition(Screen.height);

    // Let's set a boolean value that checks whether the mouse is hovering the circle or not.
    this.hovered = false;

    // The colour of our circle (let's make it white when hovered)
    this.colour = '#ff00ff';
  }

  // Override the update method
  update() {
    // This method is ran each frame, before the rendering process.
    // Let's update our game object properties from here:

    // If the circle is hovered, let's set its colour to white, or set it to
    // #ff00ff otherwise.
    this.colour = this.hovered ? '#ffffff' : '#ff00ff';

    // If the mouse left button is clicked
    if (Mouse.leftClick) {
      // Let's be mean here and remove 1 point from the player's score if he clicks outside
      // of the circle.
      if (this.hovered === false) {
        State.set('score', State.get('score') - 1);
      } else {
        // Otherwise, we'll add 1 to the score
        State.set('score', State.get('score') + 1);
      }

      // Set new positions to our circle when a click occurs
      this.x = this.getNewPosition(Screen.width);
      this.y = this.getNewPosition(Screen.height);
    }
  }

  // Override the render method
  render(context) {
    // We will render our object form here.
    context.fillStyle = this.colour;

    // Draw the circle
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fill();

    // Since we drew our circle's path, we can use the context isPointInPath method to check
    // whether the cursor is in the path or not.
    this.hovered = context.isPointInPath(Mouse.cursorX, Mouse.cursorY);
  }

  /**
   * Simple custom method to set our game object's x and y coordinates
   * @param {number} max The max possible value
   * @return A random x
   */
  getNewPosition(max) {
    // Some very complex mathemical stuff
    return Math.random() * (max - this.radius * 2) + this.radius;
  }

}
```

We can now access the score value from any game object, or even from the scene or the game classes.

Let's create our score game object now. It will simply display the score as a text, in the bottom left
of the screen. Nothing new here, you should end up with nearly this code:

*src/Score.js*
```javascript
import {GameObject, State, Screen} from 'rythmoos-engine';

// Our score class
export default class Score extends GameObject {

  // Override the create method to set our properties
  create() {
    this.x = Screen.width - 30;
    this.y = Screen.height - 30;
  }

  // Override the render method to render our score text
  render(context) {
    context.fillStyle = '#ffffff';
    context.font = '36px Arial';

    // That will allow us to position the text from its bottom right corner
    context.textAlign = 'right';
    context.textBaseline = 'bottom';

    context.fillText(`Score: ${State.get('score')}`, this.x, this.y);
  }

}
```

The only thing left now is to add it to the scene, we'll also initialise the score state
in the scene.

*src/MainScene.js*
```javascript
import {Scene, State} from 'rythmoos-engine';
import Score from './Score';
import Circle from './Circle';
import FPSCounter from './FPSCounter';

export default class MainScene extends Scene {

  // We can add our game objects in the create method
  create() {
    // We can initialise the score state here
    State.set('score', 0);

    // The scene class extends the Map class (see docs).
    // We can set game objects using the set(name, value) method.
    this.set('circle', new Circle());
    this.set('score', new Score());
    this.set('fps counter', new FPSCounter());
  }

}
```

And here we are, our game is done!

See the result at http://localhost:3000

[Game screen 3](https://chibifr.github.io/rythmoos-engine/media/not-an-example/03.png)

[Game screen 4](https://chibifr.github.io/rythmoos-engine/media/not-an-example/04.png)

[Game screen 5](https://chibifr.github.io/rythmoos-engine/media/not-an-example/05.png)

___

## Source code

Here is all the source code of our game:

*src/index.js*
```javascript
import {Game} from 'rythmoos-engine';
// Import our scene
import MainScene from './MainScene';

class MyAwesomeGame extends Game {

  // We can set the scene in our create method
  create() {
    // The scene is a public property, so you can set it to whatever scene you want
    // at any point in your game.
    this.scene = new MainScene();
  }

}

// When the window is loaded, create a new game
window.onload = () => {
  // A game instance needs a width, height and a container.
  // Let's give it the window's width and height, and the body as container.
  new MyAwesomeGame(window.innerWidth, window.innerHeight, document.body);
}
```

*src/MainScene.js*
```javascript
import {Scene, State} from 'rythmoos-engine';
import Score from './Score';
import Circle from './Circle';
import FPSCounter from './FPSCounter';

export default class MainScene extends Scene {

  // We can add our game objects in the create method
  create() {
    // We can initialise the score state here
    State.set('score', 0);

    // The scene class extends the Map class (see docs).
    // We can set game objects using the set(name, value) method.
    this.set('circle', new Circle());
    this.set('score', new Score());
    this.set('fps counter', new FPSCounter());
  }

}
```

*src/FPSCounter.js*
```javascript
import {GameObject, Time} from 'rythmoos-engine';

export default class FPSCounter extends GameObject {

  // Initialise our fps counter when the object is created.
  create() {
    // Let's round the FPS value and add 'fps' after it so we know what that number is about.
    this.fps = `${Math.round(Time.FPS)}fps`;
  }

  // The Time.FPS value is updated every frame, so let's update our game object's fps property!
  update() {
    this.fps = `${Math.round(Time.FPS)}fps`;
  }

  // In order to render our object, we can simply override the render method.
  render(context) {
    // Some colour and font for the text
    context.fillStyle = '#ffffff';
    context.font = '30px Arial';

    // This allows us to position the text from its top left corner
    context.textAlign = 'left';
    context.textBaseline = 'top';

    // And let's render our game object's fps property here:
    context.fillText(this.fps, 20, 20);
  }

}
```

*src/Circle.js*
```javascript
import {GameObject, Screen, Mouse, State} from 'rythmoos-engine';

// Our circle game object
export default class Circle extends GameObject {

  // Override the create method
  create() {
    // Let's set up our game object properties here

    // The radius of our circle
    this.radius = 50;

    // The x and y coordinates
    this.x = this.getNewPosition(Screen.width);
    this.y = this.getNewPosition(Screen.height);

    // Let's set a boolean value that checks whether the mouse is hovering the circle or not.
    this.hovered = false;

    // The colour of our circle (let's make it white when hovered)
    this.colour = '#ff00ff';
  }

  // Override the update method
  update() {
    // This method is ran each frame, before the rendering process.
    // Let's update our game object properties from here:

    // If the circle is hovered, let's set its colour to white, or set it to
    // #ff00ff otherwise.
    this.colour = this.hovered ? '#ffffff' : '#ff00ff';

    // If the mouse left button is clicked
    if (Mouse.leftClick) {
      // Let's be mean here and remove 1 point from the player's score if he clicks outside
      // of the circle.
      if (this.hovered === false) {
        State.set('score', State.get('score') - 1);
      } else {
        // Otherwise, we'll add 1 to the score
        State.set('score', State.get('score') + 1);
      }

      // Set new positions to our circle when a click occurs
      this.x = this.getNewPosition(Screen.width);
      this.y = this.getNewPosition(Screen.height);
    }
  }

  // Override the render method
  render(context) {
    // We will render our object form here.
    context.fillStyle = this.colour;

    // Draw the circle
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fill();

    // Since we drew our circle's path, we can use the context isPointInPath method to check
    // whether the cursor is in the path or not.
    this.hovered = context.isPointInPath(Mouse.cursorX, Mouse.cursorY);
  }

  /**
   * Simple custom method to set our game object's x and y coordinates
   * @param {number} max The max possible value
   * @return A random x
   */
  getNewPosition(max) {
    // Some very complex mathemical stuff
    return Math.random() * (max - this.radius * 2) + this.radius;
  }

}
```

*src/Score.js*
```javascript
import {GameObject, State, Screen} from 'rythmoos-engine';

// Our score class
export default class Score extends GameObject {

  // Override the create method to set our properties
  create() {
    this.x = Screen.width - 30;
    this.y = Screen.height - 30;
  }

  // Override the render method to render our score text
  render(context) {
    context.fillStyle = '#ffffff';
    context.font = '36px Arial';

    // That will allow us to position the text from its bottom right corner
    context.textAlign = 'right';
    context.textBaseline = 'bottom';

    context.fillText(`Score: ${State.get('score')}`, this.x, this.y);
  }

}
```

You could now add a main menu as a new scene that will be the start-up scene of your game.
Why not also check out the Keyboard class to add some gameplay to it?

You could also load sprites instead of drawing a circle, add music etc...
You can take a loot at the examples section and examples directory to see some more examples. ;o
