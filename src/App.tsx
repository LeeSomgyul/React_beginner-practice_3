import styled from "styled-components";
import {motion, useMotionValue, useTransform, useScroll} from "framer-motion";


const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: white;
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;



function App() {
  const boxPosition = useMotionValue(0);//Box가 움직일때마다 위치 좌표가 저장
  const rotate = useTransform(boxPosition, [-800, 800], [-360, 360]);//boxPosition이 -800이면 2, 0이면 1, 800이면 0.1로 출력
  const gradient = useTransform(
    boxPosition,
    [-800, 800],
    ["linear-gradient(135deg, rgb(0, 210, 238), rgb(0, 83, 238))", "linear-gradient(135deg, rgb(0, 228, 155), rgb(238, 178, 0))"]
  );

  const {scrollYProgress} = useScroll();//수직으로 스크롤 할때마다 위치 좌표가 저장
  const scale = useTransform(scrollYProgress, [0,1], [1,5]);//스크롤이 0%(시작)이면 1, 100%(끝)이면 5 반환

  return (
    <Wrapper style={{background: gradient}}>
        <Box drag="x" dragSnapToOrigin style={{x:boxPosition, rotateZ: rotate, scale:scale}}>{/*sytle: CSS스타일인 X축에 boxPosition의 값을 적용해라 */}
          &nbsp;
        </Box>
    </Wrapper>
  );
}

export default App;