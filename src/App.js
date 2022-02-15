import { Routes, Route } from 'react-router-dom';
import Apartment from './components/Apartment';
import CreateApartment from './components/CreateApartment';
import ListApartments from './components/ListApartments';

function App() {
  return (
    <div className="container mx-auto max-w-xs px-4">
      <Routes>
        <Route path="/" element={<ListApartments />} />
        <Route path="/apartments/:id" element={<Apartment />} />
        <Route path="/apartments/create" element={<CreateApartment />} />
      </Routes>
    </div>
  );
}

export default App;
