import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { ImFileText } from 'react-icons/im';
import { DiCssdeck } from 'react-icons/di';

import {
  Container,
  Div1,
  Div2,
  Div3,
  Span,
  NavLink,
  SocialIcons,
} from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: 'flex',
            alignItem: 'center',
            color: 'white',
            marginBottom: '20px',
          }}
        >
          <DiCssdeck size="3rem" /> <Span>David's Portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/darolo13">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/davidromero-l/">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://docs.google.com/document/d/1Hhb50hcJ1lok8n4LtWfhSnouQTFljRuT50KN_Bvg084/edit?usp=sharing">
        <ImFileText size="2.5rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
