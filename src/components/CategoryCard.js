import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const CategoryCard = ({ title, imgUri }) => {
	return (
		<TouchableOpacity className='relative mr-2'>
			<Image className='w-20 h-20 rounded' source={{ uri: imgUri }} />
			{/* <Text className='absolute bottom-1 left-1 font-bold text-white'>{title}</Text> */}
		</TouchableOpacity>
	);
};

export default CategoryCard;
