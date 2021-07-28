'use strict';

class header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return e(
      'h1',
      { onClick: () => this.setState({ liked: true }) },
      'Header'
    );
  }
}

ReactDOM.render(e(header), document.querySelector('#header'));