import React, {useState, useEffect, useRef} from "react";
import {useStyles} from './HomeStyles';
import Background1 from "./GradienteHome.svg";
import Background2 from "./GradienteCursos.svg";
import Background3 from "./GradienteQuemSomos.svg";
import Background4 from "./GradienteContato.svg";
import airplane from './AviaoIcon.svg';

function Home() {

  var x = 90;
  var grad = Background1;
  const [xx, setXX] = useState();
  const [gradiente, setGradiente] = useState();
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const [angle, setAngle] = useState(0);

  const [baseSize] = useState(() => {
    let proposedWidth = window.innerWidth / 20;
    if (proposedWidth < 50) proposedWidth = 50;
    return proposedWidth;
  });
  const [size] = useState(() => {
    let proposedWidth = window.innerWidth / 20;
    if (proposedWidth < 50) proposedWidth = 50;
    return proposedWidth;
  });

  const [flying, setFlying] = useState(true);
  const animating = useRef(false);
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    function onClick(e) {
      const x = e.clientX;
      const y = e.clientY;

      let newAngle = (180 / Math.PI) * (Math.atan2(posY - y, x - posX)) + 120;
      console.log(`posY: ${posY} y: ${y} posX: ${posX} x: ${x}`)
      console.log(newAngle);
      newAngle -= 90;
      if (newAngle < 0) {
        newAngle += 360;
      }

      animating.current = true;
      target.current = { x: x - size / 2, y: y - size / 2 }



      setFlying(true);

      setAngle(360 - newAngle);

      setPosX(x - size / 2);
      setPosY(y - size / 2);

    }

    window.addEventListener('click', onClick);

    return () => window.removeEventListener('click', onClick);
  }, [posX, posY, baseSize, size, flying]);

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
        <div className={classes.planeContainer} style={{
          position: 'absolute',
          left: posX,
          top: posY,
          transform: `rotate(${angle}deg)`,
          transformOrigin: 'center',
          width: size,
          height: size
        }}>
          <img
            className={"plane" + (flying ? " flying" : "")}
            src={airplane}
            alt="airplane"
            width={size}
            height={size}
            onAnimationEnd={(e) => { setFlying(false) }}
          />
        </div>
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
