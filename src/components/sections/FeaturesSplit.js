import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import ButtonGroup from "../elements/ButtonGroup";
import Button from "../elements/Button";

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const FeaturesSplit = ({
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
    title: 'Code4All Team',
    paragraph: 'We are an enthusiastic group of coders. We want to replace code anxiety and fear with inspiration and motivation to learn. Our team comprises a problem setter, a technical department, administration/ operations, graphic designers, content curation and video editors.'
  };

  const nameStyle ={
    fontSize:"200%"
  }


  const cardStyle = {
    // display:"flex",
    // height: "100%",
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center"
  }

  const cardStyle2 = {
    display:"block",
    height: "100%",
    width:"100%",
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center"
  }
   const styles = {
     marginTop: "4px",
     marginRight: "5px",
   };

  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <ButtonGroup>
              <Button
                tag="a"
                color="primary"
                wideMobile
                href="/team"
              >
                <i class="fas fa-users" style={styles}></i>Team Code4All
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;



