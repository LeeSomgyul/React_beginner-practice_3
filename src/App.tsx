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
  initial: {
    x: 500,
    opacity: 0,
    scale: 0,
  },
  visivle: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  living: {
    x: -500,
    opacity: 0,
    scale: 0,
  }
}


function App() {
  const [order, setOrder] = useState(1);
  const handleNext = () => {
    setOrder((prev) => (prev === 10 ? 10 : prev + 1));
  }

 
  return (
    <Wrapper>
      <AnimatePresence>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => 
          i === order ? (
            <Box variants={boxVariants} initial="initial" animate="visivle" exit="living" key={i}>
              {i}
            </Box>
          ) : null
        )}
      </AnimatePresence>
      <button onClick={handleNext}>클릭!</button>
    </Wrapper>
  );
}

export default App;