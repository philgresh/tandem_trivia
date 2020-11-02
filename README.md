# Tandem Trivia Training App

## Hone your trivia skills in between rounds with coworkers!

[Live site](https://philgresh.github.io/tandem_trivia/) | [Features](#features) | [Organization](#organization) | [Styling](#styling) | [Installation](#install) | [Testing](#testing) | [Improvements/TODOs](#improvements)

## Features

### Immediate and encouraging feedback!

No sense in waiting for the end of the round to find out how you did. It's OK if you got it wrong, you'll get it the next time you see that question!
Treat this app like flashcards and you'll have more useless knowledge lodged deep in your brain soon enough!

![Immediate feedback screencap](https://user-images.githubusercontent.com/46543327/97824770-b34d4580-1c71-11eb-8f1b-700912865b1a.png)

### Mobile friendly!

I know that studying trivia can be stressful, so I added mobile-friendly styling to allow you to work on your memorization between train stops.

![Mobile friendly screencap](https://user-images.githubusercontent.com/46543327/97824773-b47e7280-1c71-11eb-8d51-82788e923c7f.png)

### Calm colors!

...at least before you pick the wrong answer.

![Calm colors screencap](https://user-images.githubusercontent.com/46543327/97824772-b3e5dc00-1c71-11eb-89cc-9545945aef85.png)

## Technologies

1. [React](https://create-react-app.dev/) as frontend framework.
2. [ESLint/Prettier](https://github.com/philgresh/eslint-prettier-airbnb-react) to keep things clean and tidy.
3. [Husky](https://www.npmjs.com/package/husky) and [git-precommit-checks](https://www.npmjs.com/package/git-precommit-checks) to make sure I'm not pushing errors or debugging code.
4. [styled-components](https://www.npmjs.com/package/styled-components) for a few components where I wanted to keep styling more dynamic.
5. [Font Awesome](https://fontawesome.com/) for a little extra pop.
6. [Jest](https://jestjs.io/) for testing.

## Organization

I was inspired by [this article](https://medium.com/javascript-in-plain-english/how-i-structure-react-apps-a76304277786) to organize my app a little more clearly. Basic components are known as `atoms` while things that _use_ `atoms` are set up as `organisms` (I'll have to think of a better term to use). `Pages` are made out of `organisms`. Custom hooks and other pieces of logic are stored in the `src/logic` and `src/components/logic` folders.

## Styling

I love using SASS! It's so easy to load all your styles in order and keep things organized. I stored styling sheets in `src/styles`. They're bundled together with some universal styling in `src/styles/style.scss`.

## Installation and running

### Install

1. Add the repository: `git@github.com:philgresh/tandem_trivia.git`
2. Install npm modules: `npm install`

### Run

1. Run `npm start`
2. Open up [localhost:3000](localhost:3000)

## Testing

All tests can be run using `npm run test:all`

Tests include unit tests for (almost) all "atom" components. I tried to follow test-driven development but sometimes my fingers got away from me...

## Improvements

1. Integration testing is sparse: I focused on unit tests and
2. Accessibility isn't perfect: At time of writing, [this app scored 75](philgresh.github.io_2020-11-01_19-11-40.report.html) on accessibility on Lighthouse. I could improve screenreading capability and making it easier to use a keyboard to play.
3. Remote database: Why not have a huge trivia database to train with! I scaffolded in the capability to fetch data from a database in `src/utils/api.js` and would probably use an AWS relational database to host data.
4. Statistics: I'd love to implement stats between players! Imagine your joy when you see "You answered correctly 3 questions more on average than other players!"
