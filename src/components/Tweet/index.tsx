import React from 'react';

import {
  Container,
  Retwitter,
  MyIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetwitterIcon,
  LikeIcon
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retwitter>
        <MyIcon />
        you retwitter
      </Retwitter>

      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Rui Domingues</strong>
            <span>@ruijadomingues</span>
            <Dot />
            <time>18 de Jul</time>
          </Header>

          <Description>Lorem ipsum</Description>
          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon />
              12
            </Status>
            <Status>
              <RetwitterIcon />4
            </Status>
            <Status>
              <LikeIcon />
              523
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
