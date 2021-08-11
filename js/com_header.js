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
    var parr='Estoy buscando una oportunidad para desempeñarme en el area del desarrollo de software, soy una persona dinamica, proactiva, con buenas habilidades tecnicas escribiendo codigo en varios lenguajes de programacion, tengo \
          experiencia en el desarrollo web front-end (HTML, JavaScript, CSS) y conocimientos en lenguajes back-end (PHP, Java, Python)';
    const skills=["HTML","CSS","JavaScript", "PHP", "JAVA", "SQL", "C++", "Python"];

    return [
      e('div',{ className:'pan', id: 'pan-left'},
        [
          e('div',{ id: 'intro'},
            [
              e('h1',{onClick: () => this.setState({ liked: true })}, title),
              e('p',{}, parr),
                
              e('a',{ className:'fa fa-envelope'},' cristhiand3@gmail.com'),
              e('a',{ className:'fa fa-phone'},'  +57 320 876 5336'),
              e('a',{ className:'fa fa-map-marker'},' Bogota, Colombia'),

              e('div',{}, 
                skills.map(element => {return e('button',{ className: 'btn btn-outline-dark'}, element)})
              )
            ]
          ),
          e('div',{ id: 'social'},
            [
              e('a',{ className:'fa fa-facebook-square'},''),
              e('a',{ className:'fa fa-linkedin-square'},''),
              e('a',{ className:'fa fa-github-square'},'')
            ]
          ),
          e('div',{ id: 'intro-buttons'},
            [
              e('button',{ className:'btn btn-outline-dark'},'Contactame'),
              e('button',{ className:'btn btn-outline-dark'},'Descargar HV')
            ]
          )
        ]
      ),
      e('div',{ className:'pan', id: 'pan-right'},"div2")
    ];
  }
}

ReactDOM.render(e(header), document.querySelector('#header'));