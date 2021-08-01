import style from './Experience.module.scss';

function Experience({ label, link, tech }) {
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
      <span class="dots">...........................</span>
      <span>
        <b>[</b> <span class="tech-name">{tech}</span>
        <b> ]</b>
      </span>
    </li>
  );
}

export default Experience;
