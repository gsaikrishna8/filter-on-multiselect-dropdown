import { useEffect, useState } from 'react'

import './App.css'
import MultiSelectDropdown from './MultiSelectDropdown'

function App() {
  const data: { id: number; category: string; name: string }[] = [
    {id:1, category:"electronics", name:"laptop"},
    {id:2, category:  "books", name:"harry potter"},
    {id:3, category:  "clothes", name:"t-shirt"},
    {id:4, category:  "electronics", name:"smartphone"},
  ]
  const [filters, setFilters] = useState<string[]>([])
  const [filteredData, setFilteredData] = useState<typeof data>(data)
  const options=[
{value:"electronics", label:"Electronics"},
{value:"books", label:"Books"},
{value:"clothes", label:"Clothes"},
  ]
 useEffect(()=>{
    if(filters.length===0){
      setFilteredData(data)
   
    }else{
      const filtered = data.filter(item=>filters.includes(item.category))
      setFilteredData(filtered) 
    }
  },[filters])
  const handleFilterChange = (selectedFilters: string[]) => {
    setFilters(selectedFilters)
  }
  return (
    <>
     <MultiSelectDropdown options={options} onChange={handleFilterChange} />
     <div>
      <h2>Filtered Data:</h2>
      <ul>
        {filteredData.map(item=>(
          <li key={item.id}>{item.name} - {item.category}</li>
        ))}
      </ul>
     </div>
    </>
  )
}

export default App
