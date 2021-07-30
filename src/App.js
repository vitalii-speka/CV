import './index.scss';
import SideBar from './Componets/SideBar/SideBar';

import contacts from './data/contacts.json';
import techSkills from './data/techSkills.json';
import softSkills from './data/softSkills.json';
import langueages from './data/langueages.json';
import style from './App.module.scss';
import AboytMe from './Componets/AboytMe/AboytMe.jsx';

function App() {
  return (
    <div className={style.wrapper}>
      {/* <h2>Hello it is my CV</h2> */}
      <SideBar
        contacts={contacts}
        techSkills={techSkills}
        softSkills={softSkills}
        langueages={langueages}
      />
      <AboytMe />
    </div>
  );
}

export default App;
