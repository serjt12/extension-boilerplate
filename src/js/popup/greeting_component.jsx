import React from 'react'
import { hot } from 'react-hot-loader'

class GreetingComponent extends React.Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    window.close()
  }
  render () {
    const Logo = 'myusmall.png'
    const Cart = 'cart.png'
    return (
      <div className='extension-container'>
        <div className='header'>
          <div className='header-left'>
            <div className='myus_close' onClick={this.handleClick}>X</div>
            <a className='myus_logo' href='http://www.myus.com' target='_blank' tabIndex='-1'><img src={Logo} /></a>
          </div>
          <div className='header-right'>
            <p>SIGN IN</p>
            <img className='cart' src={Cart} />
          </div>
        </div>
        <div className='form-container'>
          <h4>Sign In</h4>
          <form>
            <label class='label' for='credentials'>Credentials</label>
            <input type='text' placeholder='Email or Suite #' id='credentials' autofocus />
            <label class='label' for='password'>Password</label>
            <input type='password' placeholder='Password' id='password' autofocus />
            <label class='label' for='verification'>Verification</label>
            <input type='text' placeholder='Enter the code to the right' id='verification' autofocus />
            <div className='actions-myus'>
              <button type='button' class='btn myus_logout_btn' ng-click='logout()' target='_blank' tabIndex='-1'>Sign In to MyUs account</button>
              <a href='/' className='guest'>Continue as Guest</a>
            </div>
          </form>
        </div>
      </div>
    )
  }
};

export default hot(module)(GreetingComponent)
