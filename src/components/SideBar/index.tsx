import React from 'react';

import List from '../List';
import FollowSugestion from '../FollowSugestion';

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
          elements={[<h1>Test</h1>, <h1>Test</h1>, <h1>Test</h1>]}
        />
      </Body>
    </Container>
  );
};

export default SideBar;
