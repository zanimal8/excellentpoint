[![Netlify Status](https://api.netlify.com/api/v1/badges/0a17774c-1dc5-495d-8a04-9b2e8715da1e/deploy-status)](https://app.netlify.com/sites/excellentpoint/deploys)
[![License: MIT](https://img.shields.io/badge/License-MIT-blueviolet.svg)](https://opensource.org/licenses/MIT)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# excellentpoint
<strong>Excellent Point</strong> is a simple typing workspace made for students trying to hit a word count. The aesthetically pleasing combination of helpful visual tools and a healthy amount of [gamification](https://en.wikipedia.org/wiki/Gamification) make the writing process just a little bit easier!

The first version of this website was part of a one-week prototype sprint for a design thinking class, and it was fleshed out more fully while procrastinating work for AP English.

## Primary Features
All of the website's features are implemented with the student in mind. If you have other ideas for tools and features to include, please [raise an issue](https://github.com/ecuber/excellentpoint/issues) and I'll look into it.
#### Solid rich text editor
Uses the popular [Quill](https://quilljs.com/) text editor for text input and formatting.
#### Has a progress bar
Once you set your word goal, a beautiful progress bar shows you how close you are to reaching it! Even better, as soon as you reach 100% the bar turns green (it's very satisfying).
#### Prompt area
Paste your prompt and notes to refer to as you write in the collapsible prompt drawer. Useful for class discussion forums!
#### Persists state + progress
Gone are the days of losing your work after an accidental refresh. All your changes are saved automatically in your browser cache.

## Built with
This project is built with [create-react-app](https://github.com/facebook/create-react-app/) and [TypeScript](https://www.typescriptlang.org).
### Notable libraries
* [react-quill](https://github.com/zenoamaro/react-quill)
* [react-bootstrap](https://react-bootstrap.github.io)
* [styled-components](https://styled-components.com)

## Roadmap
The plan is to implement Firebase authentication so that users can have multiple working documents at once and so that data is synced across multiple browsers and devices.

## License
Copyright © 2021 Elijah Sippel. Licensed under the MIT License.
