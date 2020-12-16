import styled from 'styled-components'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rootReducer from './state'
import CommentForm from './components/CommentForm'
import CommentList from './components/CommentList'

import WebSocketProvider from './WebSocket'

const store = createStore(rootReducer);

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

function App() {
  return (
    <Provider store={store}>
      <WebSocketProvider>
        <Container>
          <CommentForm/>
          <CommentList />
        </Container>
      </WebSocketProvider>
    </Provider>
  );
}

export default App;
