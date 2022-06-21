import Header from './Common/Header';
import FirstBlock from './Sections/FirstBlock';
import SecondBlock from './Sections/SecondBlock';

import style from './index.css'

function App() {
  return (
    <div style={style.root}>
      <Header/>
      <FirstBlock />
      <SecondBlock/>
    </div>
  );
}

export default App;
