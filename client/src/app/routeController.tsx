import { EActiveView } from 'domains/enums/EActiveView';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewLogin from 'views/viewLogin';
import ViewRegister from '../views/viewRegister';
import ViewEventList from '../views/viewEventList';
import ViewHome from '../views/viewHome';
import ViewNotFound from '../views/viewNotFound';
import ViewEventDetail from '../views/viewEventDetail';

const RouteController = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/${EActiveView.home}`} Component={ViewHome} />
        <Route path={`/register`} Component={ViewRegister} />
        <Route path={`/eventList`} Component={ViewEventList} />
        <Route path={`/`} Component={ViewLogin} />
        <Route path={`/eventDetail`} Component={ViewEventDetail} />
        <Route path="*" Component={ViewNotFound} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteController;
