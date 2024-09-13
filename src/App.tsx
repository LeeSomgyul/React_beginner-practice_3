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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;
  div:first-child,
  div:last-child{
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  height: 200px;
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;


function App() {
  const [boxId, setBoxId] = useState<null|string>(null);
  
  return (
    <Wrapper>
      <Grid>
        {["1", "2", "3", "4"].map(i=><Box key={i} layoutId={i} onClick={() => setBoxId(i)}/>)}
      </Grid>
      <AnimatePresence>
        {boxId ? 
          <Overlay onClick={() => setBoxId(null)} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <Box layoutId={boxId} style={{width: 450, height: 250}}/>
          </Overlay>
        : null};
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;