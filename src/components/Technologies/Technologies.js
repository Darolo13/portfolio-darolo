import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { SiAdobe } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I'm experienced in working with a range of technologies. <br /> From Front-end to Back-end.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>Experience with <br /> React.js</ListParagraph>
        </ListContainer>
      </ListItem>
        <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Experience with <br /> Node.js, MySQL, MongoDB</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <SiAdobe size="3rem" />
        <ListContainer>
          <ListTitle>Design</ListTitle>
          <ListParagraph>Experience with <br /> Photoshop, Premiere Pro, Adobe Illustrator, Adobe XD</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
