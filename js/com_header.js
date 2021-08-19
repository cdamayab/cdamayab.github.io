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
    var parr='Soy un aspirante a desarrollador, busco desempeñarme en el area del desarrollo de software, soy una persona dinamica, proactiva, con buenas habilidades tecnicas escribiendo codigo en varios lenguajes de programacion, tengo \
          experiencia en el desarrollo web front-end (HTML, JavaScript, CSS) y conocimientos en lenguajes back-end (PHP, Java, Python)';
    const skills=["HTML","CSS","JavaScript", "PHP", "JAVA", "SQL", "C++", "Python"];

    return [
      e('div',{ className:'pan', id: 'pan-left'},
        [
          e('div',{ id: 'intro'},
            [
              e('h1',{onClick: () => this.setState({ liked: true })}, title),
              e('p',{}, parr),
              e('div',{ id: 'contactinfo'},
                [
                  e('a',{ className:'fa fa-envelope'},' cristhiand3@gmail.com'),
                  e('a',{ className:'fa fa-phone'},'  +57 320 876 5336'),
                  e('a',{ className:'fa fa-map-marker'},' Bogota, Colombia'),
                ]
              ),
              e('div',{id: "miniskills"}, 
                [
                  //e('div',{className:"bracket", id: "left-bracket"}, "{"),
                  e('div',{id:"buttons"}, skills.map(element => {return e('button',{ className: 'btn btn-outline-dark'}, element)})),
                  //e('div',{className:"bracket", id: "right-bracket"}, "}")
                ]
              )
            ]
          ),
          e('div',{ id: 'intro-buttons'},
            [
              e('button',{ className:'btn btn-outline-dark'},'Contactame'),
              e('button',{ className:'btn btn-outline-dark'},'Descargar HV')
            ]
          ),
          e('div',{ id: 'social'},
            [
              e('a',{ className:'fa fa-facebook-square', target:"blank", href:"https://web.facebook.com/cristhiand993/"},''),
              e('a',{ className:'fa fa-linkedin-square', target:"blank", href:"https://www.linkedin.com/in/cristhian-amaya-5a9b85144/"},''),
              e('a',{ className:'fa fa-github-square',   target:"blank", href:"https://github.com/cdamayab"},'')
            ]
          )
        ]
      ),
      e('div',{ className:'pan', id: 'pan-right'},
        [
          e('img',{ className:"centered", id:'photo', src: "./media/computer-user.svg"})
        ]
      )
    ];
  }
}

ReactDOM.render(e(header), document.querySelector('#header'));