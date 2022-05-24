import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
//import Bar from './component/Navbar/Bar';
import CreateConBusiness from './component/ConsumerBusiness/CreateConBusiness'
import EditBusiness from './component/ConsumerBusiness/EditBusiness'
import ViewConBusiness from './component/ConsumerBusiness/ViewConBusiness'
import CreateProperty from './component/BusinessProperty/CreateProperty'
import EditProperty from './component/BusinessProperty/EditProperty'
import ViewProperty from './component/BusinessProperty/ViewProperty'
import CreatePolicy from './component/Policy/CreatePolicy';
import IssuePolicy from './component/Policy/IssuePolicy';
import ViewPolicy from './component/Policy/ViewPolicy';
import Quotes from './component/Policy/Quotes'
import NotFound from './component/Pages/NotFound'
import Home from './component/Pages/Home'
import Login from './component/Pages/Login'


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/*' element={<NotFound />} />
        <Route path='/createbusiness' element={<CreateConBusiness />}  />
        <Route path='/updatebusiness' element={<EditBusiness />} />
        <Route path='/viewbusiness' element={<ViewConBusiness />} />
        <Route path='/createproperty' element={<CreateProperty />} />
        <Route path='/updateproperty' element={<EditProperty />} />
        <Route path='/viewproperty' element={<ViewProperty />} />
        <Route path='/createpolicy' element={<CreatePolicy />} />
        <Route path='/issuepolicy' element={<IssuePolicy />} />
        <Route path='/viewpolicy' element={<ViewPolicy />} />
        <Route path='/quotes' element={<Quotes />} />
      </Routes>
    </Router>
  );
}

export default App;
