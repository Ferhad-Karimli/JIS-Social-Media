
import style from '../Main/Post.module.css';

function Post() {
  return (
    <div className={style.container }>


<div className={style.search + ' '+style.cont_two}>

<div className={style.subsearch}>
    <p className={styleMedia.paragraph}>Search for post types</p>
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.49996 0.666626C3.28817 0.666626 0.666626 3.28817 0.666626 6.49996C0.666626 9.71175 3.28817 12.3333 6.49996 12.3333C7.95662 12.3333 9.28747 11.79 10.3118 10.901L10.6666 11.2558V12.3333L15.6666 17.3333L17.3333 15.6666L12.3333 10.6666H11.2558L10.901 10.3118C11.79 9.28747 12.3333 7.95662 12.3333 6.49996C12.3333 3.28817 9.71175 0.666626 6.49996 0.666626ZM6.49996 2.33329C8.81102 2.33329 10.6666 4.1889 10.6666 6.49996C10.6666 8.81102 8.81102 10.6666 6.49996 10.6666C4.1889 10.6666 2.33329 8.81102 2.33329 6.49996C2.33329 4.1889 4.1889 2.33329 6.49996 2.33329Z" fill="#6C6C75"/>
</svg>



</div>
       </div>

        <div className={style.cont+' '+ style.cont_two}>

           <div className={style.words}>

<span className={style.word}>All post  types</span>
           </div>

        </div>
        <div className={style.cont}>

        <div className={style.words}>
        <span className={style.word}>Videos</span>

           </div>

</div>
<div className={style.cont}>


<div className={style.words}>
<span className={style.word}>Images</span>

           </div>

</div>
<div className={style.cont}>


<div className={style.words}>
<span className={style.word}>Carousel posts</span>
           </div>

</div>
        

      
    </div>
  );
}

export default Post;