import classNames from 'classnames';

type SocialLink = {
  platform: string;
  url     : string;
};

type FooterProps = {
  companyName : string;
  year?       : number;
  socialLinks?: SocialLink[];
  className?  : string;
};

const Footer: React.FC<FooterProps> = ({ companyName, year = new Date().getFullYear(), socialLinks = [], className }) => {
  return (
    <footer className={classNames('bg-gray-800 text-white py-6', className)}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <span className="text-sm">
            &copy; {year} {companyName}. Todos los derechos reservados.
          </span>

          {socialLinks.length > 0 && (
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400"
                  aria-label={link.platform}
                >
                  {link.platform}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
