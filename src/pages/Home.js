import React, {useState, useRef} from "react";
import {useStyles} from './HomeStyles';
import Background1 from "./GradienteHome.svg";
import Background2 from "./GradienteCursos.svg";
import Background3 from "./GradienteQuemSomos.svg";
import Background4 from "./GradienteContato.svg";
import airplane from './AviaoIcon.svg';

function Home() {

  let x1 = 90;
  let grad = Background1;
  const [posBackground, setPosBackground] = useState();
  const [gradiente, setGradiente] = useState(grad);
  const [posX, setPosX] = useState(200);
  const [posY, setPosY] = useState(200);
  const [angle, setAngle] = useState(0);
  const [colorHome, setColorHome] = useState('#100554');
  const [colorCursos, setColorCursos] = useState('#100554');
  const [colorQuemSomos, setColorQuemSomos] = useState('#100554');
  const [colorContato, setColorContato] = useState('#100554');

  const [size] = useState(() => {
    let proposedWidth = window.innerWidth / 40;
    if (proposedWidth < 20) proposedWidth = 20;
    return proposedWidth;
  });

  const [flying, setFlying] = useState(true);
  const animating = useRef(false);
  const target = useRef({ x: 0, y: 0 });

  function spin1(e){
      x1=90;
      grad = Background1;
      setPosBackground(x1);
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
      setPosY((y - size / 2)+40);
      setColorHome('white');
      setColorCursos('#100554');
      setColorQuemSomos('#100554');
      setColorContato('#100554');
  }

  function spin2(e){
      x1=60;
      grad = Background2;
      setPosBackground(x1);
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
      setPosY((y - size / 2)+40);
      setColorHome('#100554');
      setColorCursos('white');
      setColorQuemSomos('#100554');
      setColorContato('#100554');
  }

  function spin3(e){
      x1=30;
      grad = Background3;
      setPosBackground(x1);
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
      setPosY((y - size / 2)+40);
      setColorHome('#100554');
      setColorCursos('#100554');
      setColorQuemSomos('white');
      setColorContato('#100554');
  }

  function spin4(e){
      x1=0;
      grad = Background4;
      setPosBackground(x1);
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
      setPosY((y - size / 2)+40);
      setColorHome('#100554');
      setColorCursos('#100554');
      setColorQuemSomos('#100554');
      setColorContato('white');
  }

  const classes = useStyles();
  return(
    <div className={classes.homeContainer} style={{backgroundImage: "url("+ gradiente +")", height: "100vh"}}>
      <div className={classes.homeContainerChildren} style={{backgroundPositionX: posBackground, backgroundPositionY: -200, height: "100vh"}}>
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
            <p onClick={spin1} style={{color: colorHome, cursor: 'pointer'}}>HOME</p>
          </div>
          <div className={classes.button2}>
            <p onClick={spin2} style={{color: colorCursos, cursor: 'pointer'}}>CURSOS</p>
          </div>
          <div className={classes.button3}>
            <p onClick={spin3} style={{color: colorQuemSomos, cursor: 'pointer'}}>QUEM SOMOS</p>
          </div>
          <div className={classes.button4}>
            <p onClick={spin4} style={{color: colorContato, cursor: 'pointer'}}>CONTATO</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
