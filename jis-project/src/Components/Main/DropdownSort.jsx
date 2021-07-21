import style from "../Main/Analitics.module.css";

function DropdownSort() {
  return (
    <div className={style.container}>
      <div className={style.cont}>
        <div className={style.words}>
          <span className={style.word}>Sort by Dates</span>
        </div>
      </div>
      <div className={style.cont}>
        <div className={style.words}>
          <span className={style.word}>Sort by Week</span>
        </div>
      </div>
      <div className={style.cont}>
        <div className={style.words}>
          <span className={style.word}>Sort by month</span>
        </div>
      </div>
      <div className={style.cont}>
        <div className={style.words}>
          <span className={style.word}>Sort by year</span>
        </div>
      </div>
    </div>
  );
}

export default DropdownSort;
