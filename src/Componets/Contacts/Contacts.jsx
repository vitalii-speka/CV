import style from './Contacts.module.scss';
import sprite from '../../image/symbol-defs.svg';

function Contacts({ link, text, icon }) {
  return (
    <li className={style.Contacts__li}>
      <a className={style.Contacts__link} href={link}>
        <svg className={style.Contacts__icon}>
          <use href={`${sprite}#${icon}`}></use>
        </svg>
        {text}
      </a>
    </li>
  );
}

export default Contacts;
