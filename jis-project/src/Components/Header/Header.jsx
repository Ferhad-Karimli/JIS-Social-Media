
import style from "./Header.module.css";

function Header() {
  return (
    <div className={style.container}>

      <div className={style.logo}>

      <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.6346 13.6371C4.07181 13.6371 5.23691 14.8159 5.23691 16.2702C5.23691 17.7244 4.07181 18.9033 2.6346 18.9033C1.19738 18.9033 0.0322876 17.7244 0.0322876 16.2702C0.0322876 14.8159 1.19738 13.6371 2.6346 13.6371ZM13.1704 0.900692V8.24586H19.3434V0.900692H23.5162V18.6389H19.343V11.9683H13.1704V18.6389H9.02222V0.900692H13.1704ZM4.69114 0.838745V12.4994H0.57806V0.838745H4.69114Z" fill="black"/>
</svg>
      </div>

      <div className={style.titles}>

        <span className="title">

     <p className={style.parag}>
     Brand strategy
     <svg className={style.icon}   width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6L0.535898 -1.75695e-07L7.4641 4.29987e-07L4 6Z" fill="#F3F3F3"/>
</svg>
       </p>   

        </span>
        <span className="title">
        <p className={style.parag}>Brand identity</p> 
        <svg className={style.icon}  width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6L0.535898 -1.75695e-07L7.4641 4.29987e-07L4 6Z" fill="#F3F3F3"/>
</svg>
        </span>
        <div className="title">
        
        <p className={style.parag}>Products
        
        <svg className={style.icon}    width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6L0.535898 -1.75695e-07L7.4641 4.29987e-07L4 6Z" fill="#F3F3F3"/>
</svg>
        
        </p> 
        </div>
        <div className="title">
        
    <p className={style.parag}>   Services

        <svg className={style.icon}  width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6L0.535898 -1.75695e-07L7.4641 4.29987e-07L4 6Z" fill="#F3F3F3"/>
</svg>
</p> 
        </div>
        <div className="title">
       <p className={style.parag}>
       Store

       <svg  className={style.icon} width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6L0.535898 -1.75695e-07L7.4641 4.29987e-07L4 6Z" fill="#F3F3F3"/>
</svg>


         </p> 
        
        
        </div>
        <div className="title">
        <p  className={style.parag}>

        Communication
        <svg className={style.icon}  width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 6L0.535898 -1.75695e-07L7.4641 4.29987e-07L4 6Z" fill="#F3F3F3"/>
</svg>
        </p>
    
        
        </div>
     
     
      </div>
      
      
   <div className={style.name}>

   <span className={style.sub_name}>
   jeykhun_imanov
     </span>    
   </div>
     
      
    </div>
  );
}

export default Header;
