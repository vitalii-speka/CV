import style from './Experience.module.scss';

function Experience({ profession, company, time, country, duties }) {
  return (
    <li className={style.Experience__li}>
      <h4 className={style.Experience__profession}>
        {profession}
        <span className={style.Experience__company}>{company}</span>
      </h4>
      <span className={style.Experience__time}>
        {time}
        <span className={style.Experience__divider}> |</span> {country}
      </span>
      <ul className={style.Experience__duties}>
        {duties.map(({ id, duty }) => (
          <li key={id} className={style.Experience__dutiesItem}>
            {duty}
          </li>
        ))}
      </ul>
    </li>
  );
}

export default Experience;
