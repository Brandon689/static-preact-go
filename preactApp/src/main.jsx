import { render } from 'preact'
import './index.css'
import Wooper from './components/Wooper.jsx'
import Ekans from './components/Ekans.jsx'

render(<Wooper />, document.getElementById('wooper'))
render(<Ekans />, document.getElementById('ekans'))