import React, {useState} from "react";
import {useStyles} from './HomeStyles';
import Background1 from "./GradienteHome.svg";
import Background2 from "./GradienteCursos.svg";
import Background3 from "./GradienteQuemSomos.svg";
import Background4 from "./GradienteContato.svg";

function Home() {

  var x = 90;
  var grad = Background1;
  const [xx, setXX] = useState();
  const [gradiente, setGradiente] = useState();

  function rodar1(){
      x=90;
      grad = Background1;
      setXX(x);
      setGradiente(grad);
  }

  function rodar2(){
      x=60;
      grad = Background2;
      setXX(x);
      setGradiente(grad);
  }

  function rodar3(){
      x=30;
      grad = Background3;
      setXX(x);
      setGradiente(grad);
  }

  function rodar4(){
      x=0;
      grad = Background4;
      setXX(x);
      setGradiente(grad);
  }

  const classes = useStyles();
  return(
    <div className={classes.homeContainer} style={{backgroundImage: "url("+ gradiente +")", height: "100vh"}}>
      <div className={classes.homeContainerChildren} style={{backgroundPositionX: xx, backgroundPositionY: -200, height: "100vh"}}>
        <div className={classes.homeGeneral}>
          <div className={classes.button1}>
            <button onClick={rodar1} style={{width:"10vw", height:"5vh"}}>1</button>
          </div>
          <div className={classes.button2}>
            <button onClick={rodar2} style={{width:"10vw", height:"5vh"}}>2</button>
          </div>
          <div className={classes.button3}>
            <button onClick={rodar3} style={{width:"10vw", height:"5vh"}}>3</button>
          </div>
          <div className={classes.button4}>
            <button onClick={rodar4} style={{width:"10vw", height:"5vh"}}>4</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
