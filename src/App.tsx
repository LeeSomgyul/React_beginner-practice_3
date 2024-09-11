import styled from "styled-components";
import {motion, AnimatePresence} from "framer-motion";
import { useState } from "react";


const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(135deg, rgb(255, 120, 165), rgb(161, 64, 214));
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  entry: (back: boolean) => ({
      x: back ? -500 : 500,
      opacity: 0,
      scale: 0,
      transition: {duration: 0.3},
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (back: boolean) => ({
    x: back ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: {duration: 0.3},
  })
}


function App() {
  const [order, setOrder] = useState(1);//현재 카드 순서 저장
  const [back, setBack] = useState(false);//카드 애니메이션을 뒤로 움직일지 여부
  const handleNext = () => {
    setBack(false);
    setOrder((prev) => (prev === 10 ? 10 : prev + 1));
  }
  const handlePrev = () => {
    setBack(true);
    setOrder((prev) => (prev === 1 ? 1 : prev - 1));
  }
 
  return (
    <Wrapper>
      <AnimatePresence>
        <Box custom={back} variants={boxVariants} initial="entry" animate="center" exit="exit" key={order}>
          {/*custom: <Box>에 back 매개변수 전달 */}
          {order}
        </Box>
      </AnimatePresence>
      <button onClick={handleNext}>다음</button>
      <button onClick={handlePrev}>이전</button>
    </Wrapper>
  );
}

export default App;