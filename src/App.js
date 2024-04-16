import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import { Component } from 'react';
import './styles/mystyle.css';
import Login from './pages/login/Page.jsx'
import Signup from './pages/signup/Page.jsx'
import InvChild from './pages/inv_child/Page.jsx'
import CheckEmail from './pages/check_email/Page.jsx'
import VerifyCode from './pages/verify_code/Page.jsx'
import ResetPassword from './pages/reset_password/Page.jsx'
import Success from './pages/success/Page.jsx'
import About from './pages/about/Page.jsx'
import Activities from './pages/activities/Page.jsx';
import Children from './pages/children/Page.jsx';
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";


class App extends Component {
  render() {
    return (<>
      <Router>
        <Routes>
          <Route path="/" index exact element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/inv-child" element={<InvChild />} />
          <Route path="/check-email" element={<CheckEmail />} />
          <Route path="/verify-code" element={<VerifyCode />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/success" element={<Success />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/children" element={<Children />} />
        </Routes>
      </Router>
    </>)
  };
}

export default App;
