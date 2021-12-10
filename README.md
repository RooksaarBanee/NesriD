
# Nesri Discount

https://user-images.githubusercontent.com/70896732/145610083-9ed3e15c-3931-4b1c-a774-59360fc65e31.mp4

During my 1st year of bachelor, I did a 2 months internship in web development at Nesri Discount, the company of Mr. Nesri.
So I had to recreate : 
- a logo
- recreate the visual identity of the brand
- recreate the front end of the website

## Student developpers/ beginners

As a 2nd year student developpers, i would like to help beginners or student in 1st year to prouve them that they are capable to do little project with basis.
Front-End is very cool because you can see want you do unlike Back-End.

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Example Color | ![#e7e5e5](https://via.placeholder.com/10/e7e5e5?text=+) #E7E5E5 |
| Example Color | ![#e51b2248](https://via.placeholder.com/10/e51b2248?text=+) #e51b2248 |
| Example Color | ![#BE2929](https://via.placeholder.com/10/be2929?text=+) #BE2929 |
| Example Color | ![#00000](https://via.placeholder.com/10/00000?text=+) #00000 |


## Make a Logo on Adobe Illustrator

![Logo](https://github.com/RooksaarBanee/NesriD/blob/main/src/assets/img/Logo.PNG?raw=true)


## Programming language documentation

 - [HTML5](https://developer.mozilla.org/fr/docs/Web/HTML)
 - [CSS3](https://developer.mozilla.org/fr/docs/Web/CSS/Reference)
 - [JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript)


## Packages

To run this project you need to install Package

#### Install NodeJS
https://nodejs.org/en/download/

and install on terminal :
```bash
  node -v
```
```bash
  npm install -g npm
``` 
for Package.json 
```bash
  npm i
``` 
### Install React  
```bash
  npx create-react-app my-app
``` 

## JavaScript implementation

#### On App.js : 

```javascript
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>

        <Route path="/account">
          <Profil />
        </Route>

        <Route path="/buy2">
          <Buy />
        </Route>

        <Route path="/buy">
          <Bucket />
        </Route>

        <Route path="/cat">
          <Article />
        </Route>

        <Route path="/">
          <Home />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
```


## Run this project Locally

Clone the project

```bash
  git clone https://github.com/RooksaarBanee/NesriD.git
```

Go to the project directory

```bash
  cd 'my-project'
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## Tech Stack

**Client :** React


## FAQ

#### How much time does it takes ?

For everything (logo, screen, models, coding) : 1 month

#### Do you like coding ?

I like it but it's difficult when you don't have models

## Credits

Made with ❤️ by Bibi BANEE
