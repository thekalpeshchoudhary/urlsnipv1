import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCut } from '@fortawesome/free-solid-svg-icons'
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';



function App() {

  const [value, setValue] = useState()


//   handleClick() {
//     this.setState(state => ({
//       isToggleOn: !state.isToggleOn
//     }));
//   }

  const error = null;
  function handleChange(e) {
    e.preventDefault();
    setValue(e.target.value);
    console.log('dsdsa'+e.target.value);
    if(e.target.value != ''){
      if(!validURL(e.target.value)){
        alert('URL')
      }
    }
  }

  function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    console.log(!!pattern.test(str));
    return !!pattern.test(str);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
          <div>
            <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/v1/workflow-mark-on-white.svg" alt="Workflow"/>
            <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
              URL Snip
            </h2>
          </div>
          <div className="rounded shadow-sm mt-4">
            <div>
              <input aria-label="Email address" name="email" type="email" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Paste Your Link Here" value={value} onChange={handleChange} />
            </div>
          </div>
          <h2 className="mt-6 text-center leading-9 font-extrabold text-red-900">
            {error}
          </h2>
          <div className="mt-6">
            <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <FontAwesomeIcon 
                  icon={faCut}
                />
              </span>
              Snip It!
            </button>
          </div>
      </div>
    </div>
  );
}

export default App;
