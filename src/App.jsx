// import HomePage from './docs/HomePage'
import Navbar from './docs/Navbar'
import Porto from './docs/Porto'
import HomePage from './docs/HomePage'
// import {BrowserRouter as Router, Switch, Route}  from 'react-router-dom' 

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className=' bg-black pt-10'>
      <Navbar/>
      <HomePage/>
      <Porto/>
    </div>
    )
  }

export default App

  // <Router>
  //   <div>
  //     <Switch>
  //       <Route exact path="/" component = {HomePage}/>
  //       <Route exact path="/porto" component = {Porto}/>
  //     </Switch>
  //   </div>
  // </Router>