import React, {useState, useRef} from "react";
import {useStyles} from './HomeStyles';
import Background1 from "./GradienteHome.svg";
import Background2 from "./GradienteCursos.svg";
import Background3 from "./GradienteQuemSomos.svg";
import Background4 from "./GradienteContato.svg";
import airplane from './AviaoIcon.svg';

function Home() {

  var x1 = 90;
  var grad = Background1;
  const [xx, setXX] = useState();
  const [gradiente, setGradiente] = useState(grad);
  const [posX, setPosX] = useState(0);
  const [posY, setPosY] = useState(0);
  const [angle, setAngle] = useState(0);

  const [size] = useState(() => {
    let proposedWidth = window.innerWidth / 20;
    if (proposedWidth < 50) proposedWidth = 50;
    return proposedWidth;
  });

  const [flying, setFlying] = useState(true);
  const animating = useRef(false);
  const target = useRef({ x: 0, y: 0 });

  function spin1(e){
      x1=90;
      grad = Background1;
      setXX(x1);
      setGradiente(grad);

      const x = e.clientX;
      const y = e.clientY;
  
      let newAngle = (180 / Math.PI) * (Math.atan2(posY - y, x - posX)) + 120;
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

  function spin2(e){
      x1=60;
      grad = Background2;
      setXX(x1);
      setGradiente(grad);

      const x = e.clientX;
      const y = e.clientY;
  
      let newAngle = (180 / Math.PI) * (Math.atan2(posY - y, x - posX)) + 120;
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

  function spin3(e){
      x1=30;
      grad = Background3;
      setXX(x1);
      setGradiente(grad);

      const x = e.clientX;
      const y = e.clientY;
  
      let newAngle = (180 / Math.PI) * (Math.atan2(posY - y, x - posX)) + 120;
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

  function spin4(e){
      x1=0;
      grad = Background4;
      setXX(x1);
      setGradiente(grad);

      const x = e.clientX;
      const y = e.clientY;
  
      let newAngle = (180 / Math.PI) * (Math.atan2(posY - y, x - posX)) + 120;
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
            <button onClick={spin1} style={{width:"58px", height:"22px"}}>HOME</button>
          </div>
          <div className={classes.button2}>
            <button onClick={spin2} style={{width:"93px", height:"24px"}}>CURSOS</button>
          </div>
          <div className={classes.button3}>
            <button onClick={spin3} style={{width:"142px", height:"22px"}}>QUEM SOMOS</button>
          </div>
          <div className={classes.button4}>
            <button onClick={spin4} style={{width:"98px", height:"22px"}}>CONTATO</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
