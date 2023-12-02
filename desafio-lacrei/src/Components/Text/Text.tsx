import React from "react";
import { StyledText } from "./styles";

const Text: React.FC<{ text: string; className?: string }> = ({
  text,
  className,
}) => {
  return <StyledText className={className}>{text}</StyledText>;
};

export default Text;
