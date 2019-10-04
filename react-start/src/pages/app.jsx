import React from 'react';

import './style/app.scss';

import logo from '../assets/imgs/logo.png';

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  sayHello = () => {
    console.log('Hello');
  }
  
  render() {
    return (
      <div className='container'>
        <img src={logo} className='logo' />
        <p className='welcome' onClick={this.sayHello}>React Start</p>
      </div>
    );
  }
}
