import React, { Component } from 'react';
import Modal from 'react-modal';
import Styles from './App.scss';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Form from '../../components/Form/Form';
import { CustomStyles } from './ModalStyles';
import CheckMark from '../../images/checkmark.svg';

class App extends Component {

  constructor() {
    super();

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      company: '',
      openModal: false
    };

    this._handleInput = this._handleInput.bind(this);
    this._submitForm = this._submitForm.bind(this);
  }

  _handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  _clearInput() {
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      company: '',
    });
  }

  _submitForm(e) {
    e.preventDefault();
    this._clearInput();
    this.setState({ openModal: true });
  }

  _modalContent() {
    return (
      <Modal
        isOpen={ this.state.openModal }
        onRequestClose={ () => this.setState({ openModal: false }) }
        style={ CustomStyles }
        shouldCloseOnOverlayClick={ false }
        contentLabel="Modal"
      >
        <div className={ Styles.modal }>
          <img src={ CheckMark } alt='checkmark' />
          <h1 className={ Styles.modal__content }>Thanks for scheduling a demo, { 'We\'ll' } be contacting you shortly!</h1>
          <Button
            color={ 'green' }
            label={ 'CLOSE' }
            onClickFunc={ () => this.setState({ openModal: false }) }
          />
        </div>
      </Modal>
    );
  }

  render() {
    return (
      <div>
        <Header />
        <div className={ Styles.heroImage }>
          <div className={ Styles.form }>
            <h1 className={ Styles.form__title }>Digital Advertising Made Easy <sup>TM</sup></h1>
            <Form
              firstName={ this.state.firstName }
              lastName={ this.state.lastName }
              email={ this.state.email }
              phoneNumber={ this.state.phoneNumber }
              company={ this.state. company }
              handleInput={ this._handleInput }
              submitForm={ this._submitForm }
            />
            <p className={ Styles.form__content }>Ready to start? <span>Create an Account</span></p>
          </div>
        </div>
        { this._modalContent() }
        <div className={ Styles.banner }>
          <h1 className={ Styles.banner__title }>The Fastest Growing Digital Marketing & Advertising Platform</h1>
        </div>
        <div className={ Styles.content }></div>
      </div>
    );
  }
}

export default App;
