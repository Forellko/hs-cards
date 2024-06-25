import style from './style.module.css';
import hscard from './hscard.png';
function Main() {
  return (
    <div className={style.main}>
      <div className={style.grid}>
        <img src={hscard} alt="card" className={style.card} />
        <img src={hscard} alt="card" className={style.card} />
        <img src={hscard} alt="card" className={style.card} />
        <img src={hscard} alt="card" className={style.card} />
        <img src={hscard} alt="card" className={style.card} />
        <img src={hscard} alt="card" className={style.card} />
      </div>
    </div>
  );
}

export default Main;
