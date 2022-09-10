import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import ResturantCard from './ResturantCard';

const FeaturedRow = ({ title, description, featuredCategory }) => {
	return (
		<View className='px-4 my-3'>
			<View className='flex-row items-center justify-between'>
				<Text className='font-bold text-lg'>{title}</Text>
				<ArrowRightIcon size={25} color='#00ccbb' />
			</View>
			<Text className='text-xs text-gray-500'>{description}</Text>
			<ScrollView
				horizontal
				// contentContainerStyle={{ paddingHorizontal: 15 }}
				showsHorizontalScrollIndicator={false}
				className='pt-4'>
				<ResturantCard
					id={1}
					imgUrl='https://rs-menus-api.roocdn.com/images/5418c29c-07ac-48e0-9fd6-5bed1b60f1ab/image.jpeg'
					title='Texmexi Co'
					address='13 hikel street'
					dishes={[]}
					genre='Mexico'
					short_description='Texmexi Co - Newport Town'
					lat={123}
					long={456}
					rating={4.5}
				/>
				<ResturantCard
					id={1}
					imgUrl='https://rs-menus-api.roocdn.com/images/5418c29c-07ac-48e0-9fd6-5bed1b60f1ab/image.jpeg'
					title='Texmexi Co'
					address='13 hikel street'
					dishes={[]}
					genre='Mexico'
					short_description='Texmexi Co - Newport Town'
					lat={123}
					long={456}
					rating={4.5}
				/>
				<ResturantCard
					id={1}
					imgUrl='https://rs-menus-api.roocdn.com/images/5418c29c-07ac-48e0-9fd6-5bed1b60f1ab/image.jpeg'
					title='Texmexi Co'
					address='13 hikel street'
					dishes={[]}
					genre='Mexico'
					short_description='Texmexi Co - Newport Town'
					lat={123}
					long={456}
					rating={4.5}
				/>
			</ScrollView>
		</View>
	);
};

export default FeaturedRow;
