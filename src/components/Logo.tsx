import classNames from 'classnames';

type LogoProps = {
  size?     : 'small' | 'medium' | 'large';
  color?    : 'blue' | 'red' | 'green' | 'white' | 'black';
  variant?  : 'detailed' | 'simplified';
  className?: string;
};

export const Logo: React.FC<LogoProps> = ({ size = 'medium', color = 'black', variant = 'detailed', className }) => {
  const logoStyles = classNames(
    'inline-block font-bold',
    {
      'text-2xl': size === 'small',
      'text-4xl': size === 'medium',
      'text-6xl': size === 'large',
    },
    {
      'text-blue-500': color === 'blue',
      'text-red-500': color === 'red',
      'text-green-500': color === 'green',
      'text-white': color === 'white',
      'text-black': color === 'black',
    },
    className
  );

  return (
    <div className={logoStyles}>
      {variant === 'detailed' ? (
        <div className="flex items-center">
          <span className="mr-2">🌟</span>
          <span>MyCompany</span>
        </div>
      ) : (
        <span>🌟</span>
      )}
    </div>
  );
};

export default Logo;
