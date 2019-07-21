import React from 'react'
import styled from 'styled-components'

import wood from '../assets/img/backgrounds/wood.jpg'

const backgroundImages = {
  woodDefault: wood
}

const Background = () => {
  return (
    <Wrapper image={backgroundImages.woodDefault}>
      <div />
    </Wrapper>
  )
}

export default Background

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${props => props.image}) repeat;
`
