import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import CategoryCard from './CategoryCard';
import { categories } from '../data/categories.json';
const Categories = () => {
	return (
		<ScrollView
			horizontal
			showsHorizontalScrollIndicator={false}
			contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 10 }}>
			{categories.map((cat) => <CategoryCard key={cat.id} imgUri={cat.imgUri} title={cat.title} />)}
		</ScrollView>
	);
};

export default Categories;
