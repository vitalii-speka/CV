import style from './SideBar.module.scss';
import myFoto from '../../image/ava.jpg';
import Contacts from '../Contacts/Contacts';

const SideBar = ({ contacts }) => {
  return (
    <aside className={style.sideBar}>
      <img src={myFoto} alt="foto Vitalii Speka" className={style.foto} />
      <div className={style.section}>
        <h3>Contacts</h3>
        <ul>
          {contacts.map(({ id, label, link, text, icon }) => (
            <Contacts
              key={id}
              label={label}
              link={link}
              text={text}
              icon={icon}
            />
          ))}
        </ul>
      </div>
      {/* <p>Vitalii Speka</p>
      <p>FRONT-END DEVELOPER</p> */}
    </aside>
  );
};

export default SideBar;
