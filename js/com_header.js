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

    return e('div',{ id: 'particles'},
		e('div',{ id: 'intro'},
	    	    [
			e('h1',{onClick: () => this.setState({ liked: true })},'Cristhian Amaya'),
			e('p',{},'Desarrollador con conocimiento en lenguajes de programacion web front-end (HTML, JavaScript, CSS) y en back-end (PHP, Java, Python)')
         	    ]
		)
    	   );
      
  }
}

ReactDOM.render(e(header), document.querySelector('#header'));