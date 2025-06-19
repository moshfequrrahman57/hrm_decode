
import './App.css'
import DataTable from './components/DataTable'
import DataTable2 from './components/DataTable2'
import DataTable3 from './components/DataTable3'
import DataTableWithImage from './components/DataTableWithImage'
import Filter from './components/Filter'
import Header from './components/Header'
function App() {


  return (
    <div className='bg-slate-100 h-full'>
      
   <Header/>
   <Filter/>
   {/* <DataTable/>
   <DataTable2/>
   <DataTable3/> */}
   <DataTableWithImage/>
    </div>
  )
}

export default App
