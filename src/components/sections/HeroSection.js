import React from "react"
import styled from "styled-components"
import { H1, MediumText } from "../styles/TextStyles"
import { themes } from "../styles/ColorStyles"
import PurchaseButton from "../buttons/PurchaseButton"
import MockupAnimation from "../animations/MockupAnimation"
import WaveBackground from "../backgrounds/WaveBackground"

function HeroSection() {
  return (
    <Wrapper>
      <WaveBackground />
      <ContentWrapper>
        <TextWrapper>
          <Title>Hi people</Title>
          <Description>Welcome to your new Gatsby site.</Description>
          <PurchaseButton
            title="Start learning"
            subtitle="120+ hours of video"
          />
        </TextWrapper>
        <MockupAnimation />
      </ContentWrapper>
    </Wrapper>
  )
}

export default HeroSection

const Wrapper = styled.div`
  overflow: hidden;
`

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
  display: grid;
  grid-template-columns: 360px auto;
`

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;
`
const Title = styled(H1)`
  color: ${themes.dark.text1};
`

const Description = styled(MediumText)`
  font-size: 17px;
  line-height: 130%;
`
