import React from 'react';
import Sticky from 'react-sticky-box';

import List from '../List';
import FollowSugestion from '../FollowSugestion';
import News from '../News';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Search ..." />
        <SearchIcon />
      </SearchWrapper>

      <Sticky>
        <Body>
          <List
            title="Maybe you like"
            elements={[
              <FollowSugestion name="João Feijão" nickname="@joao" />,
              <FollowSugestion name="Vera" nickname="@vera" />,
              <FollowSugestion name="Maria" nickname="@maria" />,
            ]}
          />

          <List
            title="Maybe you like"
            elements={[<News />, <News />, <News />]}
          />

          <List
            title="Maybe you like"
            elements={[<News />, <News />, <News />]}
          />

          <List
            title="Maybe you like"
            elements={[<News />, <News />, <News />]}
          />
        </Body>
      </Sticky>
    </Container>
  );
};

export default SideBar;
