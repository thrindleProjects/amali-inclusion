import React, { PropsWithChildren } from "react";

const BodyLayout:React.FC<PropsWithChildren> = ({children, ...rest}) => {
	return (
		<div className='bg-white border border-gray-300 rounded-lg p-6 h-max' {...rest}>
			{children}
		</div>
	);
};

export default BodyLayout;