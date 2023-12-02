import React from "react";
import { StyledImage } from "./styles";

interface ImageComponentProps {
  src: string;
  alt: string;
  className?: string;
}

const Image: React.FC<{ src: string; alt: string; className?: string }> = ({
  src,
  alt,
  className,
}) => {
  return <StyledImage className={className} src={src} alt={alt} />;
};

export default Image;
