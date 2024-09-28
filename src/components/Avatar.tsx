interface AvatarProps {
  src      ?: string
  alt      ?: string
  size     ?: 'small' | 'medium' | 'large'
  className?: string
}

const Avatar: React.FC<AvatarProps> = ({ src, alt = 'Avatar', size = 'medium', className }) => {
  const sizeClass = size === 'small' ? 'w-8 h-8' : size === 'large' ? 'w-16 h-16' : 'w-12 h-12'

  return (
    <div className={`inline-block ${className}`}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className={`${sizeClass} rounded-full object-cover`}
        />
      ) : (
        <div
          className={`${sizeClass} rounded-full bg-gray-300 flex items-center justify-center`}
        >
          <span className="text-white font-bold">A</span>
        </div>
      )}
    </div>
  )
}

export default Avatar
