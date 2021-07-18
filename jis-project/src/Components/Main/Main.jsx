import style from "./Main.module.css";


function Main() {
  return (
    <div className={style.header}>
     
      
  
     <div className={style.analititcs}>
         <div className={style.sub_analitics}>

             

         <p className={style.paragraph_a}>Analitics</p>  

         <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 3.49691e-07L0.535898 6L7.4641 6L4 3.49691e-07Z" fill="#F3F3F3"/>
</svg>

         </div>
    
      

     </div>
     

     <div className={style.posts}>
  

         <div className={style.filter_container}>


         <p className={style.posts_par}>Posts</p>

<div className={style.filter}>

    <div className={style.export}>
        <div className={style.sub_export}>

        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 0C7.68294 0 7 0.682937 7 1.5V8H2.58594L10 15.4141L17.4141 8H13V1.5C13 0.682937 12.3171 0 11.5 0H8.5ZM9 2H11V10H12.5859L10 12.5859L7.41406 10H9V2ZM0 18V20H20V18H0Z" fill="#854EDE"/>
</svg>

Export

        </div>


    </div>
    <div className={style.sort}>
        <div className={style.sub_sort}>
          <p className={style.paragraph}>Sort By Dates</p>  


          <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 8L0.669873 0.5L9.33013 0.500001L5 8Z" fill="#131315"/>
</svg>


 

  

    </div>


    </div>
    <div className={style.types}>
<div className={style.sub_types}>
<p className={style.paragraph}>All past types</p>  

<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 8L0.669873 0.5L9.33013 0.500001L5 8Z" fill="#131315"/>
</svg>


</div>
      

    </div>
    <div className={style.brands}>

<div className={style.sub_brand}>
<div className={style.name_br}>
<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0V18H10H20V4H10V0H0ZM2 2H4V4H2V2ZM6 2H8V4H6V2ZM2 6H4V8H2V6ZM6 6H8V8H6V6ZM10 6H18V16H10V14H12V12H10V10H12V8H10V6ZM14 8V10H16V8H14ZM2 10H4V12H2V10ZM6 10H8V12H6V10ZM14 12V14H16V12H14ZM2 14H4V16H2V14ZM6 14H8V16H6V14Z" fill="black"/>
</svg>
 


 <p className={style.paragraph_b}>10 Brands</p>
 </div>

<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 8L0.669873 0.5L9.33013 0.500001L5 8Z" fill="#131315"/>
</svg>


 
</div>

    </div>
    <div className={style.today}>

   
        <div className={style.sub_today}>
        <div className={style.today_br}>
        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 0V2H2C0.9 2 0 2.9 0 4V18C0 19.1 0.9 20 2 20H16C17.1 20 18 19.1 18 18V4C18 2.9 17.1 2 16 2H15V0H13V2H5V0H3ZM2 4H3H5H13H15H16V6H2V4ZM2 8H16V18H2V8Z" fill="black"/>
</svg>

            <p className={style.par_today}>
                Today
            </p>
            </div>

            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 8L0.669873 0.5L9.33013 0.500001L5 8Z" fill="#131315"/>
</svg>

        </div>
  
    </div>
</div>
         </div>

     </div>
    
    </div>
  );
}

export default Main;