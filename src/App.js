import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Component } from 'react';
import Login from './components/Login';
import Onebox from './components/Onebox';
import themecontext from './context/themecontext';
import './App.css';

class App extends Component {
  state = { isDarkTheme: false };

  toggleTheme = () => {
    this.setState((prev) => ({ isDarkTheme: !prev.isDarkTheme }));
  };

  render() {
    const { isDarkTheme } = this.state;
    return (
      <themecontext.Provider
        value={{ isDarkTheme, toggleTheme: this.toggleTheme }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path='/onebox' element={<Onebox/>} />
            <Route path="/signin" element={<Login />} />
          </Routes>
        </Router>
      </themecontext.Provider>
    );
  }
}

export default App;
