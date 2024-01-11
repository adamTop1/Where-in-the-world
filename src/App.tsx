import Filter from "./components/Filter"
import Header from "./components/Header"
import Input from "./components/Input"
import Countries from "./components/Countries"

function App() {

  return (
    <>
    <Header />
    <main className="bg-gray-800 ">
       <Input />
       <Filter />
       <Countries />
    </main>
    </>
  )
}

export default App
