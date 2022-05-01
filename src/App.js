import styled from 'styled-components';
import { useEffect } from 'react';
import axios from 'axios';

import MessagePost from './components/MessagePost';

const App = () => {
  useEffect(() => {});

  return (
    <Root>
      <MessagePost />
    </Root>
  );
};

export default App;

const Root = styled.div`
  margin: 0 auto;
  width: 60%;
`;
