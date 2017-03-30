import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'

class ContactsApp extends Component {
  render(){
    return(
      <div>
        <SearchBar />
        <ContactList contacts={this.props.contacts} />
      </div>
    )
  }
}

ContactsApp.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object)
}