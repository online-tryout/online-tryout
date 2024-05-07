"use client";

import { FC } from "react";

interface PicturePreviewProps {
  picture: string;
  className?: string;
}

const PicturePreview: FC<PicturePreviewProps> = ({ picture, className }) => {
  const combinedClassName = `h-full w-full max-w-[300px] object-cover rounded-md ${className ?? ''}`;

  return (
    <img
      src={picture}
      alt="Preview"
      className={combinedClassName}
    />
  );
}

PicturePreview.displayName = "PicturePreview";
export default PicturePreview;
