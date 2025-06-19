import Navbar from './component/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 
import TextForm from './component/TextForm';
import React, { useState} from 'react'
import Alert from './component/Alert';

 
function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{
    setAlert({

      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }


  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode Enable", "success");
      
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode Enable", "success");
    }
  
   }


  return (
    // <> 
    //   {/* <Navbar title="Convert Case" aboutText ="About text" mode={mode} toggleMode={toggleMode}/>  
    //   <Alert alert={alert}/> */}
    //   {/* <div className="container my-3">
    //     <TextForm showAlert ={showAlert}heading="Enter the text to analyze below" mode={mode}/>
             
    //  </div> */}
    //  {/* <About/>  */}

    
    // </>
    
      // <>
      //   <Router>
      //     <Navbar title="Case Converter" mode={mode} toggleMode={toggleMode} />
      //     <Alert alert={alert} />
      //     <div className="container my-3">
      //       <Routes>
      //         <Route exact path="/case-converter" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
            
      //       </Routes>
      //     </div>
      //   </Router>
      // </>
    

    // vercel k liye change kiya

<Router basename="/case-converter">
  <Navbar title="Case Converter" mode={mode} toggleMode={toggleMode} />
  <Alert alert={alert} />
  <div className="container my-3">
    <Routes>
      <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
    </Routes>
  </div>
</Router>


  );
}

export default App;
