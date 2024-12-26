import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MyComponent from './comp1'
import StateExample from './lec23_12/stateExam1'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StateExample />
  </StrictMode>,
)
