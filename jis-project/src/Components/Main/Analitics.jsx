
import style from '../Main/Analitics.module.css';

function Analitics() {
  return (
    <div className={style.container}>

        <div className={style.cont}>

           <div className={style.words}>

<span className={style.word}>Posts</span>
           </div>

        </div>
        <div className={style.cont}>

        <div className={style.words}>
        <span className={style.word}>Stories</span>

           </div>

</div>
<div className={style.cont}>


<div className={style.words}>
<span className={style.word}>Ads</span>

           </div>

</div>
<div className={style.cont}>


<div className={style.words}>
<span className={style.word}>Reports</span>
           </div>

</div>
        

      
    </div>
  );
}

export default Analitics;