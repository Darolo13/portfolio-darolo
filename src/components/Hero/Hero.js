import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>Learn about what I've developed, what I'm currently developing and many more things!</SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>See More</Button>
    </LeftSection>
  </Section>
);

export default Hero;