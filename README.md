# Boxing Jellyfish Work-in-progress Game

## Philosophy
* **No server**: must run entirely on browser (chrome support mandatory).
* **No dependencies**: all code must be present in the repo (attributing source when necessary).
* **No build system**: pure javascript that must run in chrome.
* **No assets**: no sprites, sounds, animations etc. Everything must be code generated.

## Code guidelines

* ES6 classes usage
    * Classes are used like structs: no instance methods, only data.
    * This allows for quick and dirty serialization to and from json (no need to hidrate methods).
    * Static methods first parameter should always be of type *class*.
* Based in Entity Component System
    * Entities are just a bag of components with an id.
    * Components are just data, no logic.
    * Systems iterate entities with specific components.

## Repo Structure

* **basic.js**: General purpose structures and functions (think Vector, Color, Math, etc.). No dependencies with other files.
* **loop.js**: Basic implementation of game loop.
* **camera.js**: Simple camera with pan, zoom and following capabilitites.
* **input.js**: Handles all input, is the only listener of window events. Used as Singleton object.
* **sound.js**: Produces sound effects and music sequences.
* **data.js**: Pre saved entitys to be loaded when needed.
* **components.js**: Components structs.
* **systems.js**: Systems implementation.