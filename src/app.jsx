import React, {Component} from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {};
  }
  render() {
    return (
      <div>
        <div class="jumbotron">
        <h1 class="display-4">Amazing React, Bootstrap and Webpack</h1>
        <p class="lead">Created with love</p>
        <hr class="my-4"/>
        <p>It uses utility classes for typography and spacing to space content out
        within the larger container.</p>
        <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </p>
        </div>
      </div>
    )
  }
}

export default App;