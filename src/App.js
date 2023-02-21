import { Toaster } from 'react-hot-toast'
import './App.css'
import AppContent from './components/AppContent'
import AppHeader from './components/AppHeader'
import PageTitle from './components/PageTitle'
function App() {
  return (
    <>
      <div className="App w-auto text-center block items-center">
        <PageTitle>
          <h1 className="font-bold underline text-5xl pb-10">TO DO APP</h1>
        </PageTitle>
        <AppHeader />
        <AppContent />
      </div>
      <div className="">
        <Toaster  />
      </div>
    </>
  )
}

export default App
