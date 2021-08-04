import style from './Projects.module.scss';

function Project({ label, link, tech }) {
  return (
    <li className={style.Project__li}>
      <a
        className={style.Project__link}
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        {label}
      </a>
      <span className={style.Project__dots}>...........................</span>
      <span>
        <b>[</b> <span className={style.Project__techName}>{tech}</span>
        <b> ]</b>
      </span>
    </li>
  );
}

export default Project;
