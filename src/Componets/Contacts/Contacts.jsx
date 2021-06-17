import style from './Contacts.module.scss';

function Contacts({ label, link, text, icon }) {
  return (
    <li>
      <img src={icon} alt={label} width="25" className={style.icon} />
      <a className={style.contactsLink} href={link}>
        {text}
      </a>
    </li>
  );
}

export default Contacts;
