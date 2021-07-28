'use strict';

class projects extends React.Component {
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
      'Projects'
    );
  }
}

ReactDOM.render(e(projects), document.querySelector('#projects'));