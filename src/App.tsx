import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Box, Flex, Text, Spinner } from '@chakra-ui/react'

import Sidebar from './components/Sidebar';
import LoginRoute from './pages/Auth/login'


function App() {
  const MessagesPage = lazy(() => import('./pages/Messages/'))
  const ContactsPage = lazy(() => import('./pages/Contacts/'))

  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <Box>
          <Sidebar />
          <Flex
            width="50%"
            pos="absolute"
            top="14%"
            left="48%"
            transform="translate(-50%, -50%)"
          >
            <Switch>
              <Route path="/messages" component={MessagesPage} exact />
              <Route path="/contacts" component={ContactsPage} exact />
            </Switch>
          </Flex>
        </Box>
      </Router>
    </Suspense>
  );
}

export default App;
