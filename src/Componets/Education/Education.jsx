import style from './Education.module.scss';

function Education({ university, label, time, experience }) {
  return (
    <li className={style.Education__item}>
      <h4>
        {university}
        <span className={style.Education__tileCompany}>{label}</span>
      </h4>
      <span className={style.Education__time}>{time}</span>
      {experience && (
        <ul className={style.Education__list}>
          {experience.map(({ id, label }) => (
            <li key={id} className={style.Education__duty}>
              {label}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default Education;
