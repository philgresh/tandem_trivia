import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar, Main, Footer, PageContainer } from '../organisms';
import Home from './Home';
import Play from './Play';
import Results from './Results';
import RoundContextProvider from '../logic/RoundContext';

function App() {
  return (
    <Router>
      <PageContainer navBar={<Navbar />}>
        <Main>
          <RoundContextProvider>
            <Switch>
              <Route exact path="/play" component={Play} />
              <Route exact path="/results" component={Results} />
              <Route path="/" component={Home} />
            </Switch>
          </RoundContextProvider>
        </Main>
        <Footer />
      </PageContainer>
    </Router>
  );
}

export default App;
