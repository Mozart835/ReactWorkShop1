/*
React.createElement takes three parameters, and returns a ReactElement. 

https://facebook.github.io/react/docs/react-api.html

createElement(string/ReactClass type, [object props], [children ...]) -> ReactElement

The type argument lets us specify what type of HTML element to use; it also lets us specify custom elements (which weï¿½ll learn about later). 
The props argument is a way of specifying which attributes are defined on the HTML element, as you may have guessed from the mailto link in the exercise. 
Finally, the children arguments are strings or ReactElement objects (or arrays of the same) which will be used for the returned elementï¿½s content. By choosing to omit or specify children, you can return a single ReactElement or an entire tree.

Since createElement is just plain JavaScript, you can mix in loops, if statements, and anything else JavaScript allows. You can also easily substitute in data stored in JSON. 

*/

var ui =
    React.createElement('div', {}, 
        React.createElement('h1', {}, "Contacts"),
        React.createElement('ul', {},
            React.createElement('li', {},
                React.createElement('h2', {}, "James"),
                React.createElement('a', {href: 'mailto:james@example.com'}, 'james@example.com')
            ),
            React.createElement('li', {},
                React.createElement('h2', {}, "Joe"),
                React.createElement('a', {href: 'mailto:joe@example.com'}, 'joe@example.com')
            )
        )
    );
//Exercise 1-2 - To render a React element into DOM element with id 'react-app', pass the ui element to ReactDOM.render()
ReactDOM.render(ui, document.getElementById('react-app'));

/*

Exercise 1 – Write a single-file app.js app
React is a tool for rendering HTML with JavaScript. 
ReactDOM.render takes a ReactElement object describing what to render, adding the result to the given DOM node. 

*/