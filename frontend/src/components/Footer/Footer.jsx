import './Footer.css';

const footerLinks = [
  { label: 'Conditions of Use', href: '#', featured: true },
  { label: 'Privacy Notice', href: '#' },
  { label: 'Your Ads Privacy Choices', href: '#' },
  { label: 'Accessibility', href: '#' },
];

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__brand">ProCommerce</div>
      <div className="footer__links">
        {footerLinks.map((link) => (
          <a
            key={link.label}
            className={`footer__link ${link.featured ? 'footer__link--featured' : ''}`}
            href={link.href}
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="footer__copyright">
        © 2024 ProCommerce, Inc. or its affiliates
      </div>
    </footer>
  );
}

export default Footer;
