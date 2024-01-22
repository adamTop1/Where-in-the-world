import Header from "./components/Header"
import { Route, Routes } from 'react-router-dom';
import CountryDetail from "./components/CountryDetail";
import Input from "./components/Input";

function App() {

  return (
  <div className='bg-gray-800'>
    <Header />
    <main>
    <Routes>
      <Route path="/" element={<Input />} />
      <Route path="/country/:countryName" element={<CountryDetail />} />
    </Routes>
    </main>
    </div>
  )
}

export default App