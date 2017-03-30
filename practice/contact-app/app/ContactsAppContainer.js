import react, { Component } from 'react'
import { render } from 'react-dom'
import 'whatwg-fetch'

class ContactsAppContainer extends Component {
  constructor(){
    super()
    this.state={
      contacts:[]
    }
  }

  componentDidMount() {
    fetch('./contacts.json')
    .then( (response) => response.json())
    .then( (responseData) => {
      this.setState({ contacts: responseData })
    })
    .catch( (error) => {
      console.log('error fetching and parsing data', error)
    })
  }

  render(){
    return(
      <ContactsApp contacts={this.state.contacts} />
    )
  }
}

export default ContactsAppContainer
