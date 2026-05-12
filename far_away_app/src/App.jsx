import { useState } from 'react'
import Header from "./component/header";
import ItemForm from "./component/itemForm";
import ItemListBody from "./component/itemListBody";
import State from "./component/state";

import './App.css'

function App() {
  const [formData, setFormData] = useState([])

  return (
    <>
      <Header />
      <ItemForm formData={formData} setFormData={setFormData} />
      <ItemListBody formData={formData} setFormData={setFormData} />
      <State formData={formData} />
    </>
  )
}

export default App
