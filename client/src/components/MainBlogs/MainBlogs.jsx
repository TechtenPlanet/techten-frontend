import React from 'react'
import style from './MainBlogs.module.css'
import { FaRegCalendar, FaRegUser} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const MainBlogs = () => {

    // Function to trim text to the specified maxLength
    const trimText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + "..."; // Trim text to maxLength and add "..." at the end
        } else {
            return text; // Return the original text if it's already maxLength or less
        }
    }

    const txt = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque sit beatae, eum voluptatem ut obcaecati minima vel sapiente iste quam aliquam omnis eveniet fugiat fuga ullam quas perferendis doloribus aspernatur."
    return (
        <div className={style.blogsSection}>
            <div className={style.blogsSectionWrapper}>
                <div className={style.blogCards}>
                    <div className={style.blogCard}>
                        <div className={style.blogImg}></div>
                        <div className={style.blogTxt}>
                            <div className={style.aboutBlog}>
                                <p className={style.blogLocation}>
                                    <FaRegUser className={style.blogIcon} />
                                    Achimota
                                </p>
                                <p className={style.blogTime}>
                                    <FaRegCalendar className={style.blogIcon} />
                                    12: 50 Am
                                </p>
                            </div>
                            <h4 className={style.blogHeading}>
                                AI summit
                            </h4>

                            <p className={style.blogBrief}>
                                {trimText(txt, 80)}
                            </p>

                            <Link className={style.blogLink} to=""> Read More </Link>

                        </div>
                    </div>
                    <div className={style.blogCard}>
                        <div className={style.blogImg}></div>
                        <div className={style.blogTxt}>
                            <div className={style.aboutBlog}>
                                <p className={style.blogLocation}>
                                    <FaRegUser className={style.blogIcon} />
                                    Achimota
                                </p>
                                <p className={style.blogTime}>
                                    <FaRegCalendar className={style.blogIcon} />
                                    12: 50 Am
                                </p>
                            </div>
                            <h4 className={style.blogHeading}>
                                AI summit
                            </h4>

                            <p className={style.blogBrief}>
                                {trimText(txt, 80)}
                            </p>

                            <Link className={style.blogLink} to=""> Read More </Link>

                        </div>
                    </div>
                    <div className={style.blogCard}>
                        <div className={style.blogImg}></div>
                        <div className={style.blogTxt}>
                            <div className={style.aboutBlog}>
                                <p className={style.blogLocation}>
                                    <FaRegUser className={style.blogIcon} />
                                    Achimota
                                </p>
                                <p className={style.blogTime}>
                                    <FaRegCalendar className={style.blogIcon} />
                                    12: 50 Am
                                </p>
                            </div>
                            <h4 className={style.blogHeading}>
                                AI summit
                            </h4>

                            <p className={style.blogBrief}>
                                {trimText(txt, 80)}
                            </p>

                            <Link className={style.blogLink} to=""> Read More </Link>

                        </div>
                    </div>
                    <div className={style.blogCard}>
                        <div className={style.blogImg}></div>
                        <div className={style.blogTxt}>
                            <div className={style.aboutBlog}>
                                <p className={style.blogLocation}>
                                    <FaRegUser className={style.blogIcon} />
                                    Achimota
                                </p>
                                <p className={style.blogTime}>
                                    <FaRegCalendar className={style.blogIcon} />
                                    12: 50 Am
                                </p>
                            </div>
                            <h4 className={style.blogHeading}>
                                AI summit
                            </h4>

                            <p className={style.blogBrief}>
                                {trimText(txt, 80)}
                            </p>

                            <Link className={style.blogLink} to=""> Read More </Link>

                        </div>
                    </div>
                    <div className={style.blogCard}>
                        <div className={style.blogImg}></div>
                        <div className={style.blogTxt}>
                            <div className={style.aboutBlog}>
                                <p className={style.blogLocation}>
                                    <FaRegUser className={style.blogIcon} />
                                    Achimota
                                </p>
                                <p className={style.blogTime}>
                                    <FaRegCalendar className={style.blogIcon} />
                                    12: 50 Am
                                </p>
                            </div>
                            <h4 className={style.blogHeading}>
                                AI summit
                            </h4>

                            <p className={style.blogBrief}>
                                {trimText(txt, 80)}
                            </p>

                            <Link className={style.blogLink} to=""> Read More </Link>

                        </div>
                    </div>
                    <div className={style.blogCard}>
                        <div className={style.blogImg}></div>
                        <div className={style.blogTxt}>
                            <div className={style.aboutBlog}>
                                <p className={style.blogLocation}>
                                    <FaRegUser className={style.blogIcon} />
                                    Achimota
                                </p>
                                <p className={style.blogTime}>
                                    <FaRegCalendar className={style.blogIcon} />
                                    12: 50 Am
                                </p>
                            </div>
                            <h4 className={style.blogHeading}>
                                AI summit
                            </h4>

                            <p className={style.blogBrief}>
                                {trimText(txt, 80)}
                            </p>

                            <Link className={style.blogLink} to=""> Read More </Link>

                        </div>
                    </div>
                    <div className={style.blogCard}>
                        <div className={style.blogImg}></div>
                        <div className={style.blogTxt}>
                            <div className={style.aboutBlog}>
                                <p className={style.blogLocation}>
                                    <FaRegUser className={style.blogIcon} />
                                    Achimota
                                </p>
                                <p className={style.blogTime}>
                                    <FaRegCalendar className={style.blogIcon} />
                                    12: 50 Am
                                </p>
                            </div>
                            <h4 className={style.blogHeading}>
                                AI summit
                            </h4>

                            <p className={style.blogBrief}>
                                {trimText(txt, 80)}
                            </p>

                            <Link className={style.blogLink} to=""> Read More </Link>

                        </div>
                    </div>
                    <div className={style.blogCard}>
                        <div className={style.blogImg}></div>
                        <div className={style.blogTxt}>
                            <div className={style.aboutBlog}>
                                <p className={style.blogLocation}>
                                    <FaRegUser className={style.blogIcon} />
                                    Achimota
                                </p>
                                <p className={style.blogTime}>
                                    <FaRegCalendar className={style.blogIcon} />
                                    12: 50 Am
                                </p>
                            </div>
                            <h4 className={style.blogHeading}>
                                AI summit
                            </h4>

                            <p className={style.blogBrief}>
                                {trimText(txt, 80)}
                            </p>

                            <Link className={style.blogLink} to=""> Read More </Link>

                        </div>
                    </div>
                    <div className={style.blogCard}>
                        <div className={style.blogImg}></div>
                        <div className={style.blogTxt}>
                            <div className={style.aboutBlog}>
                                <p className={style.blogLocation}>
                                    <FaRegUser className={style.blogIcon} />
                                    Achimota
                                </p>
                                <p className={style.blogTime}>
                                    <FaRegCalendar className={style.blogIcon} />
                                    12: 50 Am
                                </p>
                            </div>
                            <h4 className={style.blogHeading}>
                                AI summit
                            </h4>

                            <p className={style.blogBrief}>
                                {trimText(txt, 80)}
                            </p>

                            <Link className={style.blogLink} to=""> Read More </Link>

                        </div>
                    </div>
                    <div className={style.blogCard}>
                        <div className={style.blogImg}></div>
                        <div className={style.blogTxt}>
                            <div className={style.aboutBlog}>
                                <p className={style.blogLocation}>
                                    <FaRegUser className={style.blogIcon} />
                                    Achimota
                                </p>
                                <p className={style.blogTime}>
                                    <FaRegCalendar className={style.blogIcon} />
                                    12: 50 Am
                                </p>
                            </div>
                            <h4 className={style.blogHeading}>
                                AI summit
                            </h4>

                            <p className={style.blogBrief}>
                                {trimText(txt, 80)}
                            </p>

                            <Link className={style.blogLink} to=""> Read More </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBlogs