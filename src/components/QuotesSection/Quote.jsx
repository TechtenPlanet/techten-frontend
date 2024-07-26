import React from 'react';
import style from './QuotesSection.module.css'

const Quote = () => {
    return (
        <div id="quote">
            <div className={style.quoteSection}>
                <h2 className={style.quoteHeading}>What People Are Saying</h2>
                    <div className={style.blockquotewrapper}>
                        <div className={style.blockquote}>
                            <h1>
                                "Techten Planet is a great and affordable place to learn about <span className={style.span}>technology and engineering</span>. 
                                The teachers are very helpful and the classes are fun and interactive. 
                                I have <span className={style.span}>learned useful skills </span> and I am excited to learn more."
                            </h1>
                            <h4 className={style.quoteAuthor}><em>- Techten Student</em></h4>
                        </div>
                    </div>
            </div>
        </div>
        
  
    );
};

export default Quote;
