import style from './SideBar.module.scss';
import myFoto from '../../image/ava.jpg';
import Contacts from '../Contacts/Contacts';
import Skills from '../Skills/Skills';
import Langueages from '../Langueages/Langueages';

const SideBar = ({ contacts, techSkills, softSkills, langueages }) => {
  return (
    <aside className={style.sideBar}>
      <img
        src={myFoto}
        alt="foto Vitalii Speka"
        className={style.SideBar__foto}
      />
      <div className={style.section}>
        <h3>Contacts</h3>
        <ul>
          {contacts.map(({ id, link, text, icon }) => (
            <Contacts key={id} link={link} text={text} icon={icon} />
          ))}
        </ul>
      </div>
      <div className={style.section}>
        <h3>Tech Skills</h3>
        <ul>
          {techSkills.map(({ id, label }) => (
            <Skills key={id} label={label} />
          ))}
        </ul>
      </div>
      <div className={style.section}>
        <h3>Soft Skills</h3>
        <ul>
          {softSkills.map(({ id, label }) => (
            <Skills key={id} label={label} />
          ))}
        </ul>
      </div>
      <div className={style.section}>
        <h3>Langueages</h3>
        <ul>
          {langueages.map(({ id, label, text }) => (
            <Langueages key={id} label={label} text={text} />
          ))}
        </ul>
      </div>
      {/* <p>Vitalii Speka</p>
      <p>FRONT-END DEVELOPER</p> */}
    </aside>
  );
};

export default SideBar;
