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

    var title = 'Cristhian Amaya';
    var parr='Soy una persona dinamica, proactiva, con buenas habilidades tecnicas escribiendo codigo en varios lenguajes de programacion, tengo \
          experiencia en el desarrollo web front-end (HTML, JavaScript, CSS) y conocimientos en lenguajes back-end (PHP, Java, Python)';
    const skills=["HTML","CSS","JavaScript", "PHP", "JAVA", "SQL", "C++", "Python"];

    return e('div',{ id: 'particles'},
      e('div',{ id: 'intro'},
        [
          e('h1',{onClick: () => this.setState({ liked: true })}, title),
          e('p',{}, parr),
          e('div',{}, 
            skills.map(element => {return e('button',{ className: 'btn btn-outline-dark'}, element)})
          )
        ]
      )
    );  
  }
}

ReactDOM.render(e(header), document.querySelector('#header'));