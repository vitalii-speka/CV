import style from './SideBar.module.scss';
import myFoto from '../../image/ava.jpg';

const SideBar = () => {
  return (
    <>
      <h3>SideBar</h3>
      <img src={myFoto} alt="Vitalii Speka" className={style.foto} />
      <p>Vitalii Speka</p>
      <p>FRONT-END DEVELOPER</p>
    </>
  );
};

export default SideBar;
