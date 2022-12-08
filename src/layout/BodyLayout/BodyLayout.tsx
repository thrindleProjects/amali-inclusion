import React, { PropsWithChildren } from "react";

const BodyLayout:React.FC<PropsWithChildren> = ({children}) => {
	return (
		<div className='bg-white border border-gray-300 rounded-lg  p-6'>
			{children}
		</div>
	);
};

export default BodyLayout;