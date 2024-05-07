
import './App.css'
import ContactHeader from './components/ContactHeader/ContactHeader';
import ContactForm from './components/Contactform/ContactForm';

import Navigation from './components/Navigatiion/Navigation';

function App() {
  
  return (
  <div>
    <Navigation/>
    <main className='main_container'>
    <ContactHeader/>
    <ContactForm/>
    </main>
  </div>
  );
}

export default App
