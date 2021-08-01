import style from './Experience.module.scss';

function Experience({ profession, company, time, country, duties }) {
  return (
    <li className={style.Experience__item}>
      <h4>
        {profession}
        <span className={style.Experience__tileCompany}>{company}</span>
      </h4>
      <span className={style.Experience__time}>
        {time}
        <span> |</span> {country}
      </span>
      <ul>
        {duties.map(({ id, duty }) => (
          <li id={id} className={style.Experience__duty}>
            {duty}
          </li>
        ))}
      </ul>
    </li>
  );
}

export default Experience;
