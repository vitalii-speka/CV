import style from './Skills.module.scss';

function Skills({ label }) {
  return (
    <li className={style.Skills__li}>
      <span className={style.Skills__span}>{label}</span>
    </li>
  );
}

export default Skills;
