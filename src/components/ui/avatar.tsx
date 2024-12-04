import Image, { type ImageProps } from "next/image";
import { FC } from "react";

interface Props extends ImageProps {}

const Avatar: FC<Props> = (props) => {
  return (
    <div className="inline-block overflow-hidden rounded-full ring-2 ring-gray-300 ring-offset-2 ring-offset-background">
      <Image {...props} />
    </div>
  );
};

export default Avatar;
