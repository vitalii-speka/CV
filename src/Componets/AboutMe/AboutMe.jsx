import style from './AboutMe.module.scss';
import Project from '../Projects/Projects';
import Experience from '../Experience/Experience';

function AboutMe({ comandProjects, ownProjects, experience, education }) {
  return (
    <div className={style.AboutMe__container}>
      <div className={style.AboutMe__section}>
        <h2 className={style.AboutMe__professionText}>Front-End Developer</h2>
        <h1 className={style.AboutMe__nameInfo}>Vitalii Speka</h1>

        <p className={style.AboutMe__description}>
          I'm a beginer Front-end Developer and looking for an interesting job.
          I want to be in a good team to improve my skills and use them for
          interesting tasks. I am a fast learner, responsible, ready for hard
          tasks.
        </p>
      </div>

      <div className={style.AboutMe__section}>
        <h3 className={style.AboutMe__title}>Peoject</h3>
        <h4 className={style.AboutMe__subTitle}>
          <span className={style.AboutMe__typeProject}>Teamwork</span>project
        </h4>
        <ol className={style.AboutMe__list}>
          {comandProjects.map(({ id, label, link, tech }) => (
            <Project id={id} label={label} link={link} tech={tech} />
          ))}
        </ol>

        <h3 className={style.AboutMe__title}>Peoject</h3>
        <h4 className={style.AboutMe__subTitle}>
          <span className={style.AboutMe__typeProject}>Own</span>project
        </h4>
        <ol className={style.AboutMe__list}>
          {ownProjects.map(({ id, label, link, tech }) => (
            <Project id={id} label={label} link={link} tech={tech} />
          ))}
        </ol>
      </div>

      <div className={style.AboutMe__section}>
        <h3 className={style.AboutMe__title}>Work Experience</h3>

        <ul className={style.AboutMe__list}>
          {experience.map(
            ({ id, profession, company, time, country, duties }) => (
              <Experience
                id={id}
                profession={profession}
                company={company}
                time={time}
                country={country}
                duties={duties}
              />
            ),
          )}
        </ul>
      </div>

      <div className={style.AboutMe__section}>
        <h3 className={style.AboutMe__title}>Educatin</h3>

        <ul className={style.AboutMe__list}>
          {education.map(({ id, university, label, time, experience }) => (
            <Experience
              id={id}
              university={university}
              label={label}
              time={time}
              experience={experience}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
