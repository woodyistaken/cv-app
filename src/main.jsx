import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import './stylesheets/index.css'
//import App from './App.jsx'
import { GeneralSection } from './components/general.jsx'
import { EducationSection } from './components/education.jsx'
import { PracticalSection } from './components/practical.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GeneralSection/>
    <EducationSection/>
    <PracticalSection/>
  </StrictMode>,
)
