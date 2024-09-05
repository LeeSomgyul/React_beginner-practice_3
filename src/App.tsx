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
  border-radius: 15px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const myVars = {
  start: {scale: 0},
  end: {scale: 1, rotateZ: 360, transition: {type: 'spring', bounce: 0.3, delay: 0.5}},
}

function App() {
  return (
    <Wrapper>
      <Box variants={myVars} initial="start" animate="end">
        &nbsp;{/*크롬에서 애니메이션이 작동하지 않는 버그를 해결하기 위한 공백 문자*/}
      </Box>
    </Wrapper>
  );
}

export default App;