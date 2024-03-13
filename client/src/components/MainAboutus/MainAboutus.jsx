import React from 'react'
import style from './MainAboutus.module.css'
import img from './../../assets/images/img.jpg'

const MainAboutus = () => {
  return (
    <div className={style.mainAboutus}>
    <div className={style.mainAboutusWrapper}>
        <div className={style.mainAboutusImg}>
            <img src={img} alt="profile" />
        </div>
        <div className={style.mainAboutusTxt}>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae recusandae aliquam amet molestiae </h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita explicabo asperiores quam eius, iste fuga quae veritatis officia corrupti, deserunt non alias magni, facilis similique distinctio nulla. Dicta, aut expedita.
                lorem
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita explicabo asperiores quam eius, iste fuga quae veritatis officia corrupti, deserunt non alias magni, facilis similique distinctio nulla. Dicta, aut expedita.
                lorem
            </p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita explicabo asperiores quam eius, iste fuga quae veritatis officia corrupti, deserunt non alias magni, facilis similique distinctio nulla. Dicta, aut expedita.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita explicabo asperiores quam eius, iste fuga quae veritatis officia corrupti, deserunt non alias magni, facilis similique distinctio nulla. Dicta, aut expedita.
            </p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita explicabo asperiores quam eius, iste fuga quae veritatis officia corrupti, deserunt non alias magni, facilis similique distinctio nulla. Dicta, aut expedita.
            </p>
        </div>
    </div>
</div>
  )
}

export default MainAboutus