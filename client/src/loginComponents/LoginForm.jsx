import React from 'react';
import ButtonInput from 'react-bootstrap/lib/ButtonInput';
import Input from 'react-bootstrap/lib/Input';

class LoginForm extends React.Component {
  constructor() {
    super();
}


  // handleSubmit(event) {
  //   event.preventDefault();
  //   // $.get('http://localhost:3000/auth/google', function(data){
  //   //     console.log('error', err);
  //   // });
  //   $.ajax({
  //     type: 'GET',
  //     url: 'http://localhost:3000/auth/google',
  //     xhrFields: {
  //       withCredentials: true
  //     },

  //     success: function(data){
  //       console.log('SUCCESS', data);
  //     }

  //   });

  // }

  render() {
    return (
      <div>
        <button><a href="http://localhost:3000/auth/google">Login with Google</a></button>
        // <button onClick={(event) => this.handleSubmit(event)} value='Login with google'>Login With Google</button>
      </div>
    );
  }

}

export default LoginForm;
