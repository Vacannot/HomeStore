import React, { CSSProperties } from 'react';
import image from '../assets/bannerimage.jpg';

function Banner() {
	return (
		<div style={bannerStyle}>
			<img src={image} alt='Banner Glasbulb Image' height={178} width={1097} />
		</div>
	);
}

const bannerStyle: CSSProperties = {
	height: '178px',
	width: '1097px',
	backgroundColor: 'red',
};

export default Banner;
