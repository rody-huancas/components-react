interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  text: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ level = 1, text, className, ...props }) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  
  return (
    <HeadingTag className={`text-${level === 1 ? '3xl' : level === 2 ? '2xl' : level === 3 ? 'xl' : 'lg'} font-bold ${className}`} {...props}>
      {text}
    </HeadingTag>
  );
};

export default Title;
