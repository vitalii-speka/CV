import style from './AboytMe.module.scss';

function AboytMe() {
  return (
    <div className={style.AboytMe__container}>
      <div className={style.AboytMe__margin} class="blok-margin">
        <h2 class="profession-text">Front-End Developer</h2>
        <h1 class="name-info">Vitalii Speka</h1>

        <p class="description">
          I'm a beginer Front-end Developer and looking for an interesting job.
          I want to be in a good team to improve my skills and use them for
          interesting tasks. I am a fast learner, responsible, ready for hard
          tasks.
        </p>
      </div>
    </div>
  );
}

export default AboytMe;
