// src/components/BasePathImage.tsx
import { useRouter } from 'next/router';
import React from 'react';

interface BasePathImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;  // делаем src обязательным
}

export function BasePathImage({ src, alt, ...rest }: BasePathImageProps) {
  const { basePath } = useRouter();
  
  // «Прицепляем» basePath перед src
  const finalSrc = `${basePath}${src}`;

  return (
    <img
      src={finalSrc}
      alt={alt}
      {...rest}
    />
  );
}