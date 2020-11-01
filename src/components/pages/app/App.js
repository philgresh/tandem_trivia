import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar, Main, Footer, PageContainer } from '../../organisms';
import Home from '../home';
import NewRound from '../newRound/NewRound';

function App() {
  return (
    <Router>
      <PageContainer navBar={<Navbar />}>
        <Main>
          <Switch>
            <Route exact path="/play" component={NewRound} />
            <Route path="/" component={Home} />
          </Switch>
        </Main>
        <Footer />
      </PageContainer>
    </Router>
  );
}

export default App;
