import React, { useLayoutEffect } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
	ChevronDownIcon,
	UserIcon,
	AdjustmentsHorizontalIcon,
	MagnifyingGlassIcon
} from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
	const navigation = useNavigation();

	useLayoutEffect(() => {
		navigation.setOptions({
			headerShown: false
		});
	}, []);
	return (
		<SafeAreaView className='pt-6 bg-white flex-1'>
			<View className='pb-3 flex-row items-center px-4 space-x-2 '>
				<Image
					source={{
						uri:
							'https://lh3.googleusercontent.com/a-/AFdZucqzjqBeeF1K9otzoRtIAIyuoNv-VhveYdU2NQRA5A=s360-p-rw-no'
					}}
					className='w-7 h-7 rounded-full bg-gray-300 p-4'
				/>
				<View className='flex-1'>
					<Text className='font-bold text-gray-400 text-xs capitalize'>deliver now!</Text>
					<Text className='font-bold text-xl capitalize '>
						current location
						<ChevronDownIcon size={20} color='#00ccbb' />
					</Text>
				</View>
				<UserIcon size={35} color='#00ccbb' />
			</View>
			<View className='flex-row items-center space-x-2 px-4 mb-3'>
				<View className='flex-row flex-1 space-x-2 items-center bg-gray-100 p-3'>
					<MagnifyingGlassIcon size={25} color='gray' />
					<TextInput placeholder='Resturants and cuisines' keyboardType='default' />
				</View>
				<AdjustmentsHorizontalIcon size={30} color='#00ccbb' />
			</View>

			<ScrollView className='bg-gray-100 flex-1'>
				<Categories />
				<FeaturedRow
					title='Featured'
					description='This is small description for featured section'
					featuredCategory='featured'
				/>
				<FeaturedRow
					title='Featured'
					description='This is small description for featured section'
					featuredCategory='featured'
				/>
				<FeaturedRow
					title='Featured'
					description='This is small description for featured section'
					featuredCategory='featured'
				/>
			</ScrollView>
		</SafeAreaView>
	);
};

export default HomeScreen;
