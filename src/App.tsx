import styled from "styled-components";
import {motion} from "framer-motion";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #6C48C5, #C68FE6);
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background: linear-gradient(135deg, #C68FE6, #6C48C5);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Circle = styled(motion.div)`
  background-color: white;
  height: 70px;
  width: 70px;
  place-self: center;
  border-radius: 35px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  place-self: center;
`;

const boxVariants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0.5,
      delayChildren: 0.5,//부모(Box) 종료 후 자식(Circle)요소가 실행되도록 함
      staggerChildren: 0.2,//자식(Circle)이 여러개 일때 0.2초마다 자식 애니메이션 실행
    },
  },
};

const circleVariants = {
  start:{
    opacity: 0,
    y: 10,
  },
  end:{
    opacity: 1,
    y: 0,
  },
}

function App() {
  return (
    <Wrapper>
      <Box variants={boxVariants} initial="start" animate="end">
        {/*부모(Box)의 initial, animate의 이름 설정이 자식(Circle)에게도 동일 적용됨으로 자식 initial과 animate는 부모와 같은 이름(start, end)으로 하는게 좋다*/}
        <Circle variants={circleVariants}/>
        <Circle variants={circleVariants}/>
        <Circle variants={circleVariants}/>
        <Circle variants={circleVariants}/>
      </Box>
    </Wrapper>
  );
}

export default App;