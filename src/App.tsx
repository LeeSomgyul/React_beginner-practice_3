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
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: {scale: 1.5, rotateZ: 90},
  tap: {scale: 1, borderRadius: "100px"},
  drag: {backgroundColor: "rgb(46, 204, 113)"},
};



function App() {
  return (
    <Wrapper>
      <Box variants={boxVariants} drag whileHover="hover" whileTap="tap" whileDrag="drag">
        &nbsp;
      </Box>
    </Wrapper>
  );
}

export default App;