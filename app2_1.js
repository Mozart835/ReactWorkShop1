//`children` is an array, you'll need to give each one a unique `key` prop. 
//It lets React distinguish between elements, and keep the DOM aligned with our ReactElement tree.
var contacts = [
  {key: 1, name: "James Rolfe", email: "JamesRolfe@CineMassacre.com", description: "Director/Story Writer"},
  {key: 2, name: "Mike Matei", email: "MikeMatei@CineMassacre.com", description: "Editor/Artwork Manager"},
  {key: 3, name: "Joe", email: "Joe@CineMassacre.com", description: "Functional Designer"},
  {key: 4, name: "Melissa", email: "Melissa@CineMassacre.com", description: "Financial Manager"},
  {key: 5, name: "Ryan", email: "Ryan@CineMassacre.Com"}
];

//React.createElement isn’t limited to standard HTML. It also lets you create your very own components!
//use the React.createClass() helper instead to create a component class.
//ContactItem is a React component type.
var ContactItem = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    description: React.PropTypes.string,
  },

  render: function() {
    return (
      React.createElement('li', {},
        React.createElement('h2', {}, this.props.name),
        React.createElement('a', {href: 'mailto:'+this.props.email}, this.props.email),
        React.createElement('div', {}, this.props.description)
      )
    )
  },
});

var contactItemElements = contacts
  //list of contacts but didn’t want to render the ones without e-mail addresses
  .filter(function(contact) { return contact.email })
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
  //The map() method creates a new array with the results of calling a provided function on every element in this array
  .map(function(contact) { return React.createElement(ContactItem, contact) }); //Exercise 2-1 - Pass in component contactItemElements

var rootElement =
  React.createElement('div', {}, 
	React.createElement('h1', {}, "CineMassacre.Com"),
    React.createElement('h1', {}, "Contacts"),
    React.createElement('ul', {}, contactItemElements)
  );

ReactDOM.render(rootElement, document.getElementById('react-app'));

/*

Exercise 2 – Refactor your contact list

Refactor your solution to the first exercise using what you’ve learned. In particular:

Create a ContactItem class which accepts three properties: name, email and description
Filter out contacts with no e-mail address
Store your data in an array instead of passing it directly to createElement

 */