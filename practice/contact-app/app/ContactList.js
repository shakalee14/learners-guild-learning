import react, { Component } from 'react'
import render from 'react-dom'

class ContactList extends Component {
  render(){
    return(
      <ul>
        {this.props.contacts.map(
          (contact) => <ContactItem key={contact.email}
                                    name={contact.email}
                                    email={contact.email} />
        )}
      </ul>
    )
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object)
}

export defualt ContactList