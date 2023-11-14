import logo from './logo.svg';
import './App.css';

import Header from './1/header';
import Footer from './1/footer';
import Nav from './1/nav';

function App() {
  return(
    <header>
      <link href='https://fonts.googleapis.com/css?family=Droid+Sans' rel='stylesheet' type='text/css' />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/fork-awesome@1.1.7/css/fork-awesome.min.css" integrity="sha256-gsmEoJAws/Kd3CjuOQzLie5Q3yshhvmo7YNtBG7aaEY=" crossorigin="anonymous"></link>
            
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />

      <link type="text/css" rel="stylesheet" href="https://sampforum.blast.hk/cache/themes/theme3/global.css?t=1628341445" />
      <link type="text/css" rel="stylesheet" href="https://sampforum.blast.hk/cache/themes/theme3/css3.css?t=1625923460" />
      <link type="text/css" rel="stylesheet" href="https://sampforum.blast.hk/cache/themes/theme3/responsive.css?t=1625923460" />
      <link type="text/css" rel="stylesheet" href="https://sampforum.blast.hk/cache/themes/theme3/grey.css?t=1628447859" />
      <Header />
      <span class="float_right hidden-xs">Hello There, Guest!</span>
      
      <Nav />
      <Footer />
    </header>
  )
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
};

export default App;
