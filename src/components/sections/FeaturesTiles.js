import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import './card.scss';
const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
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
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'About Us',
    paragraph: 'Code4All is a bunch of committed youngsters working to expand the culture of coding. We believe that learning how to code and implementing the art of competitive programming must be embraced by youngsters like us. Code4All will bring about amazing coding contests and interactive activities in the coming days! It is a group of enthusiastic coders who works together in order to stimulate coding for everyone. Code4all empowers youngsters through activities that strengthen coding skills and augment the command of programming. Code4all is a place that brings people together. We believe learning is more fun and efficient when we help each other along the way.'
  };

  return (
    <section
      id="about"
      {...props}
      className={outerClasses + " abtSecClass"}
      style={{ marginTop: "300px" }}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={'timeline-about '+tilesClasses}>
            <div className="timeline">
              <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
                <div className="timeline__event__icon ">
                  <i className="fab fa-font-awesome"></i>
                </div>
                <div
                  className="timeline__event__date"
                  style={{ fontSize: "25px", color: "#fff" }}
                >
                  Motto
                </div>
                <div className="timeline__event__content ">
                  <div className="timeline__event__description">
                    <p style={{ color: "#9CA9B3" }}>
                      Code4All is having a very clear vision to encourage
                      students towards Coding. We are working together only to
                      enhance the coding culture among students.
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
                <div className="timeline__event__icon">
                  <i className="fab fa-bandcamp"></i>
                </div>
                <div
                  className="timeline__event__date"
                  style={{ fontSize: "25px", color: "#fff" }}
                >
                  Contests
                </div>
                <div className="timeline__event__content">
                  <div className="timeline__event__title"></div>
                  <div className="timeline__event__description">
                    <p style={{ color: "#9CA9B3" }}>
                      Attend all the contests, Rise or fall doesn't matter learn
                      from your last one and Rock on the next. We organize
                      coding contests every 15 days.
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
                <div className="timeline__event__icon">
                  <i className="fab fa-gg"></i>
                </div>
                <div
                  className="timeline__event__date"
                  style={{ fontSize: "25px", color: "#fff" }}
                >
                  Editorials
                </div>
                <div className="timeline__event__content">
                  <div className="timeline__event__title"></div>
                  <div className="timeline__event__description">
                    <p style={{ color: "#9CA9B3" }}>
                      Editorials to all the problems are available on our Github
                      Account. In all the Forthcoming contests, editorials shall
                      be available just after the contest.
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline__event animated fadeInUp timeline__event--type1">
                <div className="timeline__event__icon">
                  <i className="fas fa-code"></i>
                </div>
                <div
                  className="timeline__event__date"
                  style={{ fontSize: "25px", color: "#fff" }}
                >
                  Coding is
                  <br /> Important
                </div>
                <div className="timeline__event__content">
                  <div className="timeline__event__description">
                    <p style={{ color: "#9CA9B3" }}>
                      Learning to write programs stretches your mind, and helps
                      you think better, creates a way of thinking about things
                      that we think is helpful in all domains.
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
                <div className="timeline__event__icon ">
                  <i className="fas fa-desktop"></i>
                </div>
                <div
                  className="timeline__event__date"
                  style={{ fontSize: "25px", color: "#fff" }}
                >
                  Contest <br /> Platform
                </div>
                <div className="timeline__event__content ">
                  <div className="timeline__event__description">
                    <p style={{ color: "#9CA9B3" }}>
                      Code4All provides you a platform where you can analyze
                      where do you stand in UIT-RGPV among other coders of
                      UIT-RGPV.
                    </p>
                  </div>
                </div>
              </div>
              <div className="timeline__event animated fadeInUp timeline__event--type1">
                <div className="timeline__event__icon">
                  <i className="fas fa-network-wired"></i>
                </div>
                <div
                  className="timeline__event__date"
                  style={{ fontSize: "25px", color: "#fff" }}
                >
                  Contest <br />
                  Difficulty
                </div>
                <div className="timeline__event__content">
                  <div className="timeline__event__title"></div>
                  <div className="timeline__event__description">
                    <p style={{ color: "#9CA9B3" }}>
                      The questions in the Code4All contest series follow the
                      top-down approach. As you proceed to the subsequent
                      problem the degree of difficulty intensifies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
