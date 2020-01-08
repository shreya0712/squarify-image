import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

const Container = styled.section`
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const Background = styled.section<{ image: string }>`
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  filter: blur(4px);
  position: absolute;
  background-image: ${props => `url(${props.image})`};
`;

const Foreground = styled.section`
  height: 100%;
  width: 100%;
  position: absolute;
  text-align: center;
  > img {
    transform: translate(-50%, -50%);
    position: absolute;
    top: 50%;
    left: 50%;
  }
`;

function Squarify(props) {
  const [dominantSide, setDominantSide] = useState();

  useEffect(() => {
    const image = new Image();
    image.onload = function() {
      let width = (this as HTMLImageElement).width;
      let height = (this as HTMLImageElement).height;
      width > height ? setDominantSide("width") : setDominantSide("height");
    };
    image.src = props.image;
  }, [props]);
  return (
    <Container>
      <Background image={props.image}></Background>
      <Foreground>
        <img
          src={props.image}
          alt="img"
          style={
            dominantSide === "height"
              ? { height: "100%", maxWidth: "100%" }
              : { width: "100%", maxHeight: "100%" }
          }
        ></img>
      </Foreground>
    </Container>
  );
}

export default Squarify;
