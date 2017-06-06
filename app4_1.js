/*
 * Components
 */

var ContactItem = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    description: React.PropTypes.string,
  },

  render: function() {
    return (
      React.createElement('li', {className: 'ContactItem'},
        React.createElement('h2', {className: 'ContactItem-name'}, this.props.name),
        React.createElement('a', {className: 'ContactItem-email', href: 'mailto:'+this.props.email}, this.props.email),
        React.createElement('div', {className: 'ContactItem-description'}, this.props.description)
      )
    )
  },
})

var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      React.createElement('form', {
		  id: "contactForm",
		  className: 'ContactForm',
		}, //Exercise 4 - assign CSS classes 'ContactForm'
        React.createElement('input', {
		  className: 'ContactForm-name',
          type: 'text',
          placeholder: 'Name (required)',
          value: this.props.contact.name,
        }),
        React.createElement('input', {
		  className: 'ContactForm-email',
          type: 'email',
          placeholder: 'Email',
          value: this.props.contact.email,
        }),
        React.createElement('textarea', {
		  className: 'ContactForm-description',
          placeholder: 'Description',
          value: this.props.contact.description,
        }),
        React.createElement('button', {type: 'submit'}, "Add Contact")
      )
    )
  },
})

var ContactView = React.createClass({
  propTypes: {
    contacts: React.PropTypes.array.isRequired,
    newContact: React.PropTypes.object.isRequired,
  },

  render: function() {
    var contactItemElements = this.props.contacts
      .filter(function(contact) { return contact.email })
      .map(function(contact) { return React.createElement(ContactItem, contact) })

    return (
      React.createElement('div', {}, //Exercise 4 - assign CSS classes 'ContactView'
        React.createElement('h1', {}, "Contacts"), //****Exercise 4 - assign CSS classes 'ContactView-title'
        React.createElement('ul', {}, contactItemElements), //****Exercise 4 - assign CSS classes 'ContactView-list'
        React.createElement(ContactForm, {contact: this.props.newContact})
      )
    )
  },
})

/*
 * Data
 */

var contacts = [
  {key: 1, name: "James Rolfe", email: "JamesRolfe@CineMassacre.com", description: "Director/Story Writer"},
  {key: 2, name: "Mike Matei", email: "MikeMatei@CineMassacre.com", description: "Editor/Artwork Manager"},
  {key: 3, name: "Joe", email: "Joe@CineMassacre.com", description: "Functional Designer"},
  {key: 4, name: "Melissa", email: "Melissa@CineMassacre.com", description: "Financial Manager"},
  {key: 5, name: "Ryan", email: "Ryan@CineMassacre.Com"}
];

var newContact = {name: "", email: "", description: ""}


/*
 * Entry point
 */

ReactDOM.render(
  React.createElement(ContactView, {
    contacts: contacts,
    newContact: newContact
  }),
  document.getElementById('react-app')
)

/*
Exercise 4: Add a read-only form
React uses the className property to assign CSS classes (as class is a reserved word in JavaScript).
*/

