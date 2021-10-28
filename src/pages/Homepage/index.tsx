import React from 'react';
import Header from '@components/Header';
import Banner from './Banner';
import Main from './Main';
import Footer from '@components/Footer';
import { Props } from '../../../pages';

function index({ exploreData, cardsData }: Props) {
	return (
		<>
			<Header />
			<Banner />
			<Main exploreData={exploreData} cardsData={cardsData} />
			<Footer />
		</>
	);
}

export default index;
export * from '../../../pages';
