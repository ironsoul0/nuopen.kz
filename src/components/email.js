import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import theme from "../styles/theme";
import mixins from "../styles/mixins";
import media from "../styles/media";

const Email = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          email
        }
      }
    }
  `);

  const { email } = data.site.siteMetadata;

  return (
    <EmailWrapper>
      <EmailLink href={`mailto:${email}`}>{email}</EmailLink>
    </EmailWrapper>
  );
};

export default Email;

const EmailWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: fixed;
  right: 40px;
  left: auto;
  bottom: 0;
  z-index: 1;

  ${media.desktop`
    display: none;
  `};

  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: ${theme.colors.thinGrey};
  }
`;

const EmailLink = styled.a`
  writing-mode: vertical-rl;
  color: ${theme.colors.thinGrey};
  font-weight: 200;
  font-size: 16px;
  transform: translateY(-30px);

  &:hover {
    transform: translateY(-35px);
    color: ${theme.colors.red};
  }

  &:active,
  &:focus {
    transform: translateY(-30px);
    color: ${theme.colors.thinGrey};
  }

  ${mixins.dropDecoration};
  ${mixins.transition};
`;
