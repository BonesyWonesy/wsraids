import React from 'react';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="container">
        <div class="block-heading">
          <h2 class="text-info">Log In</h2>
          <p>
            <button>Login with Discord</button>
          </p>
        </div>
        <form>
          <div class="form-group">
            <label for="email">Email</label>
            <input class="form-control item" type="text" id="email" />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input class="form-control" type="password" id="password" />
          </div>
          <button class="btn btn-primary btn-block" type="button">
            Log In
          </button>
        </form>
      </div>
    );
  }
}
