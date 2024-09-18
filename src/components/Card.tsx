interface CardProps {
  title       : string
  description : string
  image      ?: string
  footer     ?: React.ReactNode
  className  ?: string
}

const Card: React.FC<CardProps> = ({ title, description, image, footer, className }) => {
  return (
    <div className={`border rounded-lg shadow-lg p-4 ${className}`}>
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover mb-4 rounded-t-lg"
        />
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      {footer && <div className="mt-4">{footer}</div>}
    </div>
  )
}

export default Card
