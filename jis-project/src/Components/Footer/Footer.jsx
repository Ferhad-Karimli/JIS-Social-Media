
import style from '../Footer/Footer.module.css';
import photo from '../Image/Combined Shape.png'


function Footer () {
  return (
    <div className={style.container}>

<div className={style.header}>

    <div className={style.logo_container}>

<div className={style.logo}>

<img src={photo} alt="" />


</div>

        <p className={style.price}>Pricing</p>
        <p className={style.price}> Terms & Privacy </p>

    </div>

    <div className={style.name}>

       <p>Insight-hunter © 2021. All rights reserved</p>

    </div>

</div>
      
    </div>
  );
}

export default Footer;