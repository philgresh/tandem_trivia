import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar, Main, Footer, PageContainer } from '../organisms';
import Home from './Home';
import Play from './Play';

function App() {
  return (
    <Router>
      <PageContainer navBar={<Navbar />}>
        <Main>
          <Switch>
            <Route exact path="/play" component={Play} />
            <Route path="/" component={Home} />
          </Switch>
        </Main>
        <Footer />
      </PageContainer>
    </Router>
  );
}

export default App;
