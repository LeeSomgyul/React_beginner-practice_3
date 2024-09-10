import styled from "styled-components";
import {motion, AnimatePresence} from "framer-motion";
import { useState } from "react";


const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, rgb(255, 120, 165), rgb(161, 64, 214));
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visivle: {
    opacity: 1,
    scale: 1,
    retateZ: 360,
  },
  leaving: {
    opacity: 0,
    scale: 0,
    y: 50,
  }
}


function App() {
  const [showing, setShowing] = useState(false);
  const handleClick = () => {
    setShowing((prev) => !prev);
  }

 
  return (
    <Wrapper>
      <button onClick={handleClick}>클릭!</button>
      <AnimatePresence>
        {showing ? (
          <Box
            variants={boxVariants}
            initial="initial"
            animate="visivle"
            exit="leaving"
          />
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;