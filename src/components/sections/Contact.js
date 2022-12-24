import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Contact = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Contact Us',
    paragraph: 'Follow us on our different social media platforms to keep yourself updated ????'
  };

  const styles={
      width:"60%",
      marginLeft:"auto",
      marginRight:"auto"
  }

  const contactIcon={
      fontSize:"120px",
      marginLeft:"30%",
      marginTop:"2%"  
  }

  const contactText={
      marginLeft:"95px",
      marginTop:"50px",
      color:"#fff"
  }
  return (
    <>
      <section id="contact" {...props} className={outerClasses}>
        <hr style={styles} />
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader data={sectionHeader} className="center-content" />
            <div className={tilesClasses}>
              <div class="social-media">
                <ul>
                  <li>
                    <a href="https://www.hackerrank.com/code4all_uit">
                      <i class="fab fa-hackerrank" aria-hidden="true"></i>
                    </a>
                    <p
                      style={{
                        marginTop: "30px",
                        transform:
                          "perspective(1000px) rotate(-30deg) skew(25deg) translate(0,0)",
                      }}
                    >
                      Hackerrank
                    </p>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/code4all-rgpv/">
                      <i class="fab fa-linkedin" aria-hidden="true"></i>
                    </a>
                    <p
                      style={{
                        marginTop: "30px",
                        transform:
                          "perspective(1000px) rotate(-30deg) skew(25deg) translate(0,0)",
                      }}
                    >
                      LinkedIn
                    </p>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/code4all_rgpv/">
                      <i class="fab fa-instagram" aria-hidden="true"></i>
                    </a>
                    <p
                      style={{
                        marginTop: "30px",
                        transform:
                          "perspective(1000px) rotate(-30deg) skew(25deg) translate(0,0)",
                      }}
                    >
                      Instagram
                    </p>
                  </li>
<li>
                    <a href="https://github.com/code4allrgpv">
<i class="fab fa-github" aria-hidden="true"></i>
                    </a>
                    <p
                      style={{
                        marginTop: "30px",
                        transform:
                          "perspective(1000px) rotate(-30deg) skew(25deg) translate(0,0)",
                      }}
                    >
                      Github
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Contact.propTypes = propTypes;
Contact.defaultProps = defaultProps;

export default Contact;
