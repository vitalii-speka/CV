import style from '../Skills/Skills.module.scss';

function Langueages({ label, text }) {
  return (
    <li className={style.Skills__li}>
      <span className={style.Skills__span}>
        {label} - {text}
      </span>
    </li>
  );
}

export default Langueages;
