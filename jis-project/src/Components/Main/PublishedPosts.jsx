import style from "./PublishedPosts.module.css";

function PublishedPosts() {
  return (
    <div className={style.container}>

    <div className={style.posts}>
        <div className={style.sub_posts}>

        
    <div className={style.published}>
<span className={style.parag}>Published Posts</span>

<span className={style.number}>615</span>


</div>

        
            <div className={style.conclusion}>
               
            
            <div className={style.videos}>
               

                <div className={style.v_numbers}>
                    360 
                </div>

                <p className={style.p_words}>
                    videos
                </p>
          
            </div>
                
            <div className={style.images}>

            <div className={style.v_numbers}>
                    180 
                </div>

                <p className={style.p_words}>
                Images
                </p>

</div>
            <div className={style.carusels}>


            <div className={style.v_numbers}>
                   75
                </div>

                <p className={style.p_words}>
                carusels
                </p>


</div>

            </div>
            
            </div>

    </div>


    <div className={style.hashtags}>
        <div className={style.sub_hashtags}>

<p className={style.used}  >Most Used 5 Hashtags</p>
<div className={style.jis_container}>

<p className={style.js}>#JIStudio</p>
<p className={style.js}>#Design</p>
<p className={style.js}>#Agency</p>
<p className={style.js}>#Digital</p>
<p className={style.js}>#Web</p>

</div>



</div>

</div>
    
    </div>
  );
}

export default PublishedPosts;
