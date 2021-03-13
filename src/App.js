import './App.css';

import {I18nProvider, LOCALES} from './i18n';
import translate from './i18n/translate'
import { useState } from 'react';
function App() {
   
  const [locale,setLocale] = useState(LOCALES.ENGLISH)
  return (
    <I18nProvider locale={locale}>
    <div className="App">
      <header className="App-header">
        {translate("hello")}
        
        
        <p>
        {translate("edit",{path: <code>src/App.js</code>} )}
        </p>
        
        <hr/>
        <button class="item" onClick={()=>setLocale(LOCALES.ENGLISH)}>English</button>
        <button class="item"  onClick={()=>setLocale(LOCALES.FRENCH)}>French</button>
        
      </header>
    </div>
    </I18nProvider>
  );
}

export default App;
