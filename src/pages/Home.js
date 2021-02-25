import React, {useState} from "react";
import {useStyles} from './HomeStyles';
import Background2 from "./GradienteHome.svg";

function Home() {

  var x = -300;
  const [xx, setXX] = useState();

  function rodar1(){
      x=-300;
      setXX(x);
  }

  function rodar2(){
      x=-600;
      setXX(x);
  }

  function rodar3(){
      x=-900;
      setXX(x);
  }

  function rodar4(){
      x=-1300;
      setXX(x);
  }

  const classes = useStyles();
  return(
    <div className={classes.homeContainer} style={{backgroundImage: "url("+ Background2 +")", height: "100vh"}}>
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
