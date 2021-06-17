import './index.scss';
import SideBar from './Componets/SideBar/SideBar';

import contacts from './data/contacts.json';

function App() {
  return (
    <>
      {/* <h2>Hello it is my CV</h2> */}
      <SideBar contacts={contacts} />
    </>
  );
}

export default App;
