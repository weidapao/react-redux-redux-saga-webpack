import { Switch, Route } from 'react-router-dom'
import React from 'react'

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/roster" component={Roster} />
      <Route path="/schedule" component={Schedule} />
    </Switch>
  </main>
)

const Home = () => <div>Home</div>
const Roster = () => <div>Roster</div>
const Schedule = () => <div>Schedule</div>

export default Main