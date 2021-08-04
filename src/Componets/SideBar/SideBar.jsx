import style from './SideBar.module.scss';
import myFoto from '../../image/ava.jpg';
import Contacts from '../Contacts/Contacts';
import Skills from '../Skills/Skills';
import Langueages from '../Langueages/Langueages';
import cv from '../../cv/CV-VitaliiSpeka.pdf';

const SideBar = ({ contacts, techSkills, softSkills, langueages }) => {
  return (
    <aside className={style.sideBar}>
      <img
        src={myFoto}
        alt="foto Vitalii Speka"
        className={style.SideBar__foto}
      />
      <div className={style.SideBar__section}>
        <h3 className={style.SideBar__title}>Contacts</h3>
        <ul className={style.SideBar__ul}>
          {contacts.map(({ id, link, text, icon }) => (
            <Contacts key={id} link={link} text={text} icon={icon} />
          ))}
        </ul>
      </div>
      <div className={style.SideBar__section}>
        <h3 className={style.SideBar__title}>Tech Skills</h3>
        <ul className={style.SideBar__ul}>
          {techSkills.map(({ id, label }) => (
            <Skills key={id} label={label} />
          ))}
        </ul>
      </div>
      <div className={style.SideBar__section}>
        <h3 className={style.SideBar__title}>Soft Skills</h3>
        <ul className={style.SideBar__ul}>
          {softSkills.map(({ id, label }) => (
            <Skills key={id} label={label} />
          ))}
        </ul>
      </div>
      <div className={style.SideBar__section}>
        <h3 className={style.SideBar__title}>Langueages</h3>
        <ul className={style.SideBar__ul}>
          {langueages.map(({ id, label, text }) => (
            <Langueages key={id} label={label} text={text} />
          ))}
        </ul>
      </div>
      <div className={style.SideBar__section}>
        <a
          className={style.SideBar__link}
          href={cv}
          target="_blank"
          rel="noreferrer"
        >
          Download CV
        </a>
      </div>
    </aside>
  );
};

export default SideBar;
