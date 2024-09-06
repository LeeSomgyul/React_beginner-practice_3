import styled from "styled-components";
import {motion} from "framer-motion";
import { useRef } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #6C48C5, #C68FE6);
`;

const BiggerBox = styled(motion.div)`
  width: 500px;
  height: 500px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: {rotateZ: 90},
  tap: {borderRadius: "100px"},
};



function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null);//처음에 아무것도 가르키지 않다가(null) 나중에 BiggerBox(div)를 참조한다는 의미

  return (
    <Wrapper>
      <BiggerBox ref={biggerBoxRef}>
        <Box 
          variants={boxVariants}
          drag//drag기능 추가
          dragSnapToOrigin//기존 위치로 돌아가려는 성질
          dragConstraints={biggerBoxRef}//BiggerBox에서 Box가 벗어나지 못하도록
          dragElastic={0.7}
          whileHover="hover"
          whileTap="tap"
        >
          &nbsp;
        </Box>
      </BiggerBox>
    </Wrapper>
  );
}

export default App;