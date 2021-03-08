import React, { useState, useRef } from "react";
import { useStyles } from './HomeStyles';
import Background1 from "./GradienteHome.svg";
import Background2 from "./GradienteCursos.svg";
import Background3 from "./GradienteQuemSomos.svg";
import Background4 from "./GradienteContato.svg";
import airplane from './AviaoIcon.svg';
import AnimatedModal from '../components/AnimatedModal/AnimatedModal'
import Footer from '../components/Footer/Footer'
import {
  Button,
  ButtonGroup,
  Modal,
  Fade,
  Grow,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Slide,
  Typography
} from '@material-ui/core'
import { ExpandMore, ExpandLess } from "@material-ui/icons"

function Home() {

  let x1 = 90;
  let grad = Background1;
  const [posBackground, setPosBackground] = useState();
  const [gradiente, setGradiente] = useState(grad);
  const [posX, setPosX] = useState('15vw');
  const [posXAngle, setPosXAngle] = useState(0);
  const [posY, setPosY] = useState('30vh');
  const [posYAngle, setPosYAngle] = useState(0);
  const [angle, setAngle] = useState(0);
  const [colorHome, setColorHome] = useState('#100554');
  const [colorCursos, setColorCursos] = useState('#100554');
  const [colorQuemSomos, setColorQuemSomos] = useState('#100554');
  const [colorContato, setColorContato] = useState('#100554');
  const [open, setOpen] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);

  const [size] = useState(() => {
    let proposedWidth = window.innerWidth / 40;
    if (proposedWidth < 20) proposedWidth = 20;
    return proposedWidth;
  });

  const [flying, setFlying] = useState(true);
  const animating = useRef(false);
  const target = useRef({ x: 0, y: 0 });

  function spin1(e) {
    x1 = 90;
    grad = Background1;
    setPosBackground(x1);
    setGradiente(grad);

    const x = e.clientX;
    const y = e.clientY;

    let newAngle = (180 / Math.PI) * (Math.atan2(posYAngle - y, x - posXAngle)) + 120;
    newAngle -= 90;
    if (newAngle < 0) {
      newAngle += 360;
    }

    animating.current = true;
    target.current = { x: x - size / 2, y: y - size / 2 }



    setFlying(true);

    setAngle(360 - newAngle);

    setPosX('15vw');
    setPosY('30vh');
    setPosXAngle(x - size / 2);
    setPosYAngle((y - size / 2) + 40);
    setColorHome('white');
    setColorCursos('#100554');
    setColorQuemSomos('#100554');
    setColorContato('#100554');
  }

  function spin2(e) {
    x1 = 60;
    grad = Background2;
    setPosBackground(x1);
    setGradiente(grad);

    const x = e.clientX;
    const y = e.clientY;

    let newAngle = (180 / Math.PI) * (Math.atan2(posYAngle - y, x - posXAngle)) + 120;
    newAngle -= 90;
    if (newAngle < 0) {
      newAngle += 360;
    }

    animating.current = true;
    target.current = { x: x - size / 2, y: y - size / 2 }




    setFlying(true);

    setAngle(360 - newAngle);

    setPosX('30vw');
    setPosY('40vh');
    setPosXAngle(x - size / 2);
    setPosYAngle((y - size / 2) + 40);
    setColorHome('#100554');
    setColorCursos('white');
    setColorQuemSomos('#100554');
    setColorContato('#100554');

    setOpen(true);
  }

  function spin3(e) {
    x1 = 30;
    grad = Background3;
    setPosBackground(x1);
    setGradiente(grad);

    const x = e.clientX;
    const y = e.clientY;

    let newAngle = (180 / Math.PI) * (Math.atan2(posYAngle - y, x - posXAngle)) + 120;
    newAngle -= 90;
    if (newAngle < 0) {
      newAngle += 360;
    }

    animating.current = true;
    target.current = { x: x - size / 2, y: y - size / 2 }



    setFlying(true);

    setAngle(360 - newAngle);

    setPosX('43vw');
    setPosY('65vh');
    setPosXAngle(x - size / 2);
    setPosYAngle((y - size / 2) + 40);
    setColorHome('#100554');
    setColorCursos('#100554');
    setColorQuemSomos('white');
    setColorContato('#100554');

    setOpenMobile(true);
  }

  function spin4(e) {
    x1 = 0;
    grad = Background4;
    setPosBackground(x1);
    setGradiente(grad);

    const x = e.clientX;
    const y = e.clientY;

    let newAngle = (180 / Math.PI) * (Math.atan2(posYAngle - y, x - posXAngle)) + 120;
    newAngle -= 90;
    if (newAngle < 0) {
      newAngle += 360;
    }

    animating.current = true;
    target.current = { x: x - size / 2, y: y - size / 2 }



    setFlying(true);

    setAngle(360 - newAngle);

    setPosX('69vw');
    setPosY('82vh');
    setPosXAngle(x - size / 2);
    setPosYAngle((y - size / 2) + 40);
    setColorHome('#100554');
    setColorCursos('#100554');
    setColorQuemSomos('#100554');
    setColorContato('white');
  }

  const classes = useStyles()
  const [slideStyle, setSlideStyle] = useState(classes.cardMobile)

  return (
    <div className={classes.homeContainer} style={{ backgroundImage: "url(" + gradiente + ")", height: "100vh" }}>
      <div className={classes.homeContainerChildren} style={{ backgroundPositionX: posBackground, backgroundPositionY: -200, height: "100vh" }}>
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
            <p onClick={spin1} style={{ color: colorHome, cursor: 'pointer' }}>HOME</p>
          </div>
          <div className={classes.button2}>
            <p onClick={spin2} style={{ color: colorCursos, cursor: 'pointer' }}>CURSOS</p>
          </div>
          <div className={classes.button3}>
            <p onClick={spin3} style={{ color: colorQuemSomos, cursor: 'pointer' }}>QUEM SOMOS</p>
          </div>
          <div className={classes.button4}>
            <p onClick={spin4} style={{ color: colorContato, cursor: 'pointer' }}>CONTATO</p>
          </div>
        </div>
      </div>
      
      <Footer />

      <Modal
        open={open}
        onBackdropClick={() => setOpen(false)}
        classNme={classes.modalBackground}
      >
        <Grow in={open} timeout={2500}>
          <Fade in={open} timeout={2500}>
            <div className={classes.fadeRoot}>
              <Card className={classes.card}>
                <CardContent>
                  <div className={classes.cardContent}>
                    <div className={classes.cardTitle}>
                      <Typography variant="h4" style={{ color: '#3467eb' }}>
                        Título do Curso
                      </Typography>
                      <ExpandMore onClick={() => setOpen(false)} fontSize="large" />
                    </div>
                    <div className={classes.cardBody}>
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor in mi ut egestas. Phasellus mi neque, viverra sed pulvinar sit amet, eleifend non ante. Phasellus vel nibh tempor, tincidunt tortor nec, molestie nibh. Morbi nec odio volutpat, mollis quam a, fringilla urna. Cras iaculis velit risus, convallis vestibulum urna sollicitudin et. Aenean id ex finibus, rutrum enim sed, semper ante. In aliquam, arcu id consectetur euismod, purus turpis tincidunt felis, vitae dapibus erat sem quis turpis. Mauris non scelerisque lorem, ac ornare nulla. Mauris venenatis elit id tellus convallis tempus. In blandit vulputate eros, a rutrum purus. Aliquam eu mi at diam bibendum mollis convallis et sem.
                      </Typography>
                    </div>
                  </div>
                </CardContent>

                <CardActions>
                  <div className={classes.buttonContainer}>
                    <Button
                      variant='contained'
                      className={classes.button}
                      onClick={() => setOpen(false)}
                    >
                      Garanta sua vaga
                    </Button>
                  </div>

                </CardActions>
              </Card>
            </div>
          </Fade>
        </Grow>
      </Modal>

      <Modal
        open={openMobile}
        onBackdropClick={() => setOpenMobile(false)}
        classNme={classes.modalBackground}
      >
        <Slide
        direction="left"
        in={openMobile}
        timeout={1500}
        >
        <div className={slideStyle} >
          <Card className={classes.card}>
            <CardContent>
              <div className={classes.cardContent}>
                <div className={classes.cardTitle}>
                  <Typography variant="h4" style={{ color: '#3467eb' }}>
                    Quem Somos
                  </Typography>
                  {slideStyle === classes.cardMobileUp && (<ExpandMore onClick={() => {
                    setSlideStyle(classes.cardMobileDown)
                    setTimeout(() => { setSlideStyle(classes.cardMobile) }, 1500); // epsera a animação acaba
                  }} fontSize="large" />)}
                  {slideStyle !== classes.cardMobileUp && (<ExpandLess onClick={() => setSlideStyle(classes.cardMobileUp)} fontSize="large" />)}
                </div>

                <div className={classes.cardBody}>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor in mi ut egestas. Phasellus mi neque, viverra sed pulvinar sit amet, eleifend non ante. Phasellus vel nibh tempor, tincidunt tortor nec, molestie nibh. Morbi nec odio volutpat, mollis quam a, fringilla urna. Cras iaculis velit risus, convallis vestibulum urna sollicitudin et. Aenean id ex finibus, rutrum enim sed, semper ante. In aliquam, arcu id consectetur euismod, purus turpis tincidunt felis, vitae dapibus erat sem quis turpis. Mauris non scelerisque lorem, ac ornare nulla. Mauris venenatis elit id tellus convallis tempus. In blandit vulputate eros, a rutrum purus. Aliquam eu mi at diam bibendum mollis convallis et sem.
                  </Typography>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        </Slide>
      </Modal>

    </div>
  );
}

export default Home;

