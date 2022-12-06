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
			// className={`block object-contain object-center w-full h-full ${className ? className : ""}`}
			// fill={true}
			// objectFit="contain"
			style={{ height: "100%", objectFit: "cover" }}
		/>
	);
};

export default ImageComponent;
