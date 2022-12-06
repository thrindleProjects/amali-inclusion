import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
	src: string | StaticImageData;
	alt: string;
	className?: string;
};

const ImageComponent = ({ src, alt, className }: Props) => {
	return (
		<Image
			src={src}
			alt={alt}
			className={`${className ? className : ""} block object-center w-full h-full`}
			objectFit="contain"
			fill={true}
		/>
	);
};

export default ImageComponent;
