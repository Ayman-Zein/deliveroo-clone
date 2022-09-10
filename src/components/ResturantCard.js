import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { StarIcon } from 'react-native-heroicons/solid';
import { MapPinIcon } from 'react-native-heroicons/outline';

const ResturantCard = ({ id, imgUrl, title, rating, short_description, genre, dishes, address, long, lat }) => {
	return (
		<TouchableOpacity className='bg-white mr-3 shadow mb-1'>
			<Image source={{ uri: imgUrl }} className='w-64 h-36 rounded-sm' />
			<View className='px-3'>
				<Text className='font-bold text-lg pt-2 '>{title}</Text>
				<View className='flex-row items-center space-x-1 mb-1'>
					<StarIcon size={22} color='#00ccbb' opacity={0.5} />
					<Text className='text-gray-500 text-xs'>
						{rating} . {genre}
					</Text>
				</View>
				<View className='flex-row items-center space-x-1 mb-2'>
					<MapPinIcon size={22} color='gray' opacity={0.5} />
					<Text className='text-gray-500 text-xs capitalize'>near by . {address}</Text>
				</View>
			</View>
		</TouchableOpacity>
	);
};

export default ResturantCard;
