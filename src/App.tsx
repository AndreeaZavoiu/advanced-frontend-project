import './App.css';
import { Route, Routes } from 'react-router-dom';
import Create from './components/Create';
import Details from './components/Details';
import NotFound from './components/NotFound';
import Card from './components/Card';
import Login from './components/Login';
import AuthRoute from './components/AuthRoute';


export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {

  return (
    <Routes>
      <Route path="/create/" element={< Create />} />
      <Route path="/hotels/:id" element={< Details />} />
      <Route path="*" element={< NotFound />} />
      <Route path="/" element={<AuthRoute> < Card /> </AuthRoute>} />
      <Route path="/login" element={< Login />} />
    </Routes>

  );
}

export default App;
