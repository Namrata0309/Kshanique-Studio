import {useState} from 'react';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  loading?: 'eager' | 'lazy';
}

export function EditorialImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'Kshanique Studio',
  loading = 'lazy',
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#F6E7E7] via-[#FFF9F3] to-[#EFE0D8] p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          aria-hidden="true"
          className="mb-3 text-[#C6A36A]"
        >
          <path
            d="M18 4C18 11.732 11.732 18 4 18C11.732 18 18 24.268 18 32C18 24.268 24.268 18 32 18C24.268 18 18 11.732 18 4Z"
            stroke="currentColor"
            strokeWidth="1.2"
          />
          <circle cx="18" cy="18" r="3" stroke="currentColor" strokeWidth="1.2" />
        </svg>
        <span className="font-serif text-base font-medium text-[#672D3D]">{fallbackTitle}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
