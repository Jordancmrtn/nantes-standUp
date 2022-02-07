import Header from './Common/Header';
import FirstBlock from './Sections/FirstBlock';
import SecondBlock from './Sections/SecondBlock';

import style from './index.css'
import Line from './Common/Line';

function App() {
  return (
    <div style={style.root}>
      <Line />
      <Header/>
      <FirstBlock />
      <SecondBlock/>
    </div>
  );
}

export default App;
