import '@fontsource/roboto/300.css';
import Header from './Header';
import Aside from './Aside';
import style from './style.module.css';
import Main from './Main';

function MainPage() {
  return (
    <div>
      <Header />
      <div className={style.middle}>
        <Aside />
        <Main />
      </div>
    </div>
  );
}

export default MainPage;
