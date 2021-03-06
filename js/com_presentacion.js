'use strict';

class presentation extends React.Component {
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
      'Presentation'
    );
  }
}

ReactDOM.render(e(presentation), document.querySelector('#presentation'));