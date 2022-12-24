import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <Link to="/">&lt;Home/&gt;</Link>
        </li>
        <li>
          <Link to="/team">&lt;Team/&gt;</Link>
        </li>
        <li>
          <Link to="/testimonial">&lt;Testimonials/&gt;</Link>
        </li>
        <li>
          <Link to="/contest">&lt;Contest/&gt;</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;