# Leave in Peace

A Chrome plugin that prevents "exit intention" popups. You know, the ones that appear when you move your mouse up towards the back button, or when you don't click on anything ofor a while.

## How it works

Marketing people (the ones who implement these kind of popups) usually use various Wordpress plugins to show manage this kind of content. Each time I encounter a website that has one of these popups, I figure out how it works (usually some global overlay) and add a function to the `src/index.js` script to remove said overlay from the DOM.

## Contributing

Just add a function to `src/index.js` with your JavaScript snippet.

## TODO

- Firefox plugin
