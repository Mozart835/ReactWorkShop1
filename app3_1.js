var contacts = [
  {key: 1, name: "James Rolfe", email: "JamesRolfe@CineMassacre.com", description: "Director/Story Writer"},
  {key: 2, name: "Mike Matei", email: "MikeMatei@CineMassacre.com", description: "Editor/Artwork Manager"},
  {key: 3, name: "Joe", email: "Joe@CineMassacre.com", description: "Functional Designer"},
  {key: 4, name: "Melissa", email: "Melissa@CineMassacre.com", description: "Financial Manager"},
  {key: 5, name: "Ryan", email: "Ryan@CineMassacre.Com"}
];

//dummy
var newContact = {
	name: "", 
	email: "", 
	description: ""
}

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

var ContactForm = React.createClass({
    propTypes: {
       contact: React.PropTypes.object.isRequired,
    },

    render: function () {
        return (
            React.createElement('form', {
					id: "contactForm",
				}, 
                React.createElement('input', {
                    type: 'text',
                    placeholder: 'Name (required)',
                    value: this.props.contact.name
                }), React.createElement('br'), 
                React.createElement('input', {
                    type: 'email',
                    placeholder: 'Email',
                    value: this.props.contact.email
                }), React.createElement('br'), 
                React.createElement('textarea', {
                    placeholder: 'Description',
                    value: this.props.contact.description
                }), React.createElement('br'), 
                React.createElement('button', {type: 'submit'}, "Add Contact")
            )
        )
    },
});

var contactItemElements = contacts
  .filter(function(contact) { return contact.email })
  .map(function(contact) { return React.createElement(ContactItem, contact) }); 

var rootElement =
  React.createElement('div', {}, 
    React.createElement('h1', {}, "Contacts"),
    React.createElement('ul', {}, contactItemElements),
    React.createElement(ContactForm, { contact: newContact }) //Exercise 3-2 create ContactForm component with contact propTypes
  );

ReactDOM.render(rootElement, document.getElementById('react-app'));

/*
Exercise 3: Add a read-only form

Let’s create a new ContactForm component class, with the following propTypes:

propTypes: {
  contact: React.PropTypes.object.isRequired
},
It should render a <form> element containing <input> elements for name and email, 
a <textarea> for description, and a <button type="submit">. 
For simplicity, use placeholders instead of labels. And remember – the React textarea component accepts it’s value under props, not children.

*/