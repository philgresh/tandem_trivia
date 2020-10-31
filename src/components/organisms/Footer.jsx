import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCodeBranch, faHome } from '@fortawesome/free-solid-svg-icons';

const linksList = [
  {
    to: 'https://github.com/philgresh/tandem_apprenticeship',
    icon: <FontAwesomeIcon icon={faCodeBranch} color="inherit" />,
  },
  {
    to: 'https://github.com/philgresh',
    icon: <FontAwesomeIcon icon={faGithub} color="inherit" />,
  },
  {
    to: 'https://gresham.dev',
    icon: <FontAwesomeIcon icon={faHome} color="inherit" />,
  },
  {
    to: 'https://www.linkedin.com/in/philgresham',
    icon: <FontAwesomeIcon icon={faLinkedin} color="inherit" />,
  },
];

const Links = () =>
  linksList.map(({ to, icon }) => (
    <a key={to} href={to}>
      {icon}
    </a>
  ));

const Footer = () => {
  return (
    <footer>
      <Links />
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
