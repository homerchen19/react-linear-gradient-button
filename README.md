<p align="center">
  <br />
  <img src="https://user-images.githubusercontent.com/12113222/39959488-02d9f12a-5645-11e8-8a50-f6bcda5cdbbf.gif" height="128">
  <h3 align="center">react-linear-gradient-button</h3>
  <p align="center">React linear gradient button component</p>
</p>
<p align="center">
  <a target="_blank" href="https://npmjs.org/package/react-linear-gradient-button" title="NPM version"><img src="https://img.shields.io/npm/v/react-linear-gradient-button.svg"></a>
  <a target="_blank" href="https://travis-ci.com/xxhomey19/react-linear-gradient-button" title="Build Status"><img src="https://travis-ci.com/xxhomey19/react-linear-gradient-button.svg?branch=master"></a>
  <a target="_blank" href="https://opensource.org/licenses/MIT" title="License: MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg">
  </a>
  <a href="#badge">
    <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg">
  </a>
</p>

**[DEMO](https://xxhomey19.github.io/react-linear-gradient-button/)**

## Install

```
$ npm install react-linear-gradient-button
```

## Usage

```js
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import GradientButton from 'react-linear-gradient-button';

class Basic extends Component {
  render() {
    return <GradientButton>BUTTON</GradientButton>;
  }
}

ReactDOM.render(<Basic />, document.getElementById('root'));
```

## Features

* No external CSS file.
* Built with [**styled-components**](https://github.com/styled-components/styled-components) 💅

## Props

| Props                     |                          Type                          |     Default     | Description                                                                                                                                                                                                        |
| :------------------------ | :----------------------------------------------------: | :-------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| children                  |                  `String` \|\| `Node`                  |  **Required**   | Content of the button.                                                                                                                                                                                             |
| theme                     |                        `String`                        |   `"Vanusa"`    | Gradient theme from [uigradients](https://uigradients.com/).                                                                                                                                                       |
| disabled                  |                         `Bool`                         |     `false`     | Should render a disabled button.                                                                                                                                                                                   |
| gradient                  |                       `[String]`                       |     `null`      | Array of colors (e.g., `['#f00b47', '#0f6bb6']`, `[rgba(255,0,0,0), rgba(255,0,0,1)]`).<br />**NOTE**: this props has higher level then `theme`.                                                                   |
| angle                     |                        `String`                        |    `"right"`    | The angle or direction of linear gradient (e.g., `"bottom"`, `"30deg"`).<br />Check **Using Angles** section on [w3schools/css3_gradients](https://www.w3schools.com/css/css3_gradients.asp) for more information. |
| padding                   | `Number` \|\| `String` \|\| `[Number]` \|\| `[String]` |      `10`       | The CSS `padding` argument of the button. Could be an array of four sides, just like CSS.<br />Unit is **px**.                                                                                                     |
| borderRadius              |                        `Number`                        |      `20`       | The CSS `border-radius` argument of the button.<br />Unit is **px**.                                                                                                                                               |
| borderWidth                |                        `Number`                        |       `2`       | The CSS `border-width` argument of the button.<br />Unit is **px**.                                                                                                                                                |
| background                |                        `String`                        |    `"#fff"`     | The CSS `background-color` argument of the button.                                                                                                                                                                 |
| color                     |                        `String`                        |   `"#ae3560"`   | The CSS `color` argument of the button.                                                                                                                                                                            |
| fontSize                  |                        `Number`                        |      `16`       | The CSS `font-size` argument of the button.                                                                                                                                                                        |
| transition                |                        `Object`                        |  See following  | The CSS `transition` argument of the button.                                                                                                                                                                       |
| transition.property       |                        `String`                        |     `"all"`     | The CSS `transition-property` argument of the button.                                                                                                                                                              |
| transition.duration       |                        `Number`                        |      `0.2`      | The CSS `transition-duration` argument of the button.<br />Unit is **second**.                                                                                                                                     |
| transition.timingFunction |                        `String`                        | `"ease-in-out"` | The CSS `transition-timing-function` argument of the button.                                                                                                                                                       |
| transition.delay          |                        `Number`                        |       `0`       | The CSS `transition-delay` argument of the button.<br />Unit is **second**.                                                                                                                                        |

## License

MIT © [xxhomey19](https://github.com/xxhomey19)
