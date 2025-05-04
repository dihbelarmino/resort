import React from 'react';
import Image from 'next/image';

interface ResortLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon';
}

export const ResortLogo: React.FC<ResortLogoProps> = ({ 
  className, 
  size = 'md',
  variant = 'full'
}) => {
  const sizeClasses = {
    sm: "h-8",
    md: "h-12",
    lg: "h-20",
    xl: "h-28"
  };

  // Calculando dimensões ideais para cada tamanho
  const getImageDimensions = () => {
    const dimensions = {
      width: variant === 'icon' ? 40 : 240,
      height: variant === 'icon' ? 40 : 100
    };

    // Ajuste de escala com base no tamanho
    if (size === 'sm') {
      dimensions.width = dimensions.width * 0.6;
      dimensions.height = dimensions.height * 0.6;
    } else if (size === 'md') {
      dimensions.width = dimensions.width * 0.8;
      dimensions.height = dimensions.height * 0.8;
    } else if (size === 'lg') {
      dimensions.width = dimensions.width * 1.2;
      dimensions.height = dimensions.height * 1.2;
    } else if (size === 'xl') {
      dimensions.width = dimensions.width * 1.5;
      dimensions.height = dimensions.height * 1.5;
    }

    return dimensions;
  };

  const { width, height } = getImageDimensions();

  // Usando o logo do Tauá do arquivo estático
  return (
    <div className={`relative flex items-center justify-center ${sizeClasses[size]} ${className}`}>
      <Image
        src="/logo.png"
        alt="Tauá Resort Logo"
        width={width}
        height={height}
        className="h-full w-auto object-contain"
        priority
      />
    </div>
  );
} 