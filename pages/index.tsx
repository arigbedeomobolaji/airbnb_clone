import type { NextPage } from 'next';
import Head from 'next/head';
import Homepage from '@pages/Homepage';
export interface Props {
	exploreData: [ExploreData];
	cardsData: [CardsData];
}

const Home: NextPage<Props> = ({ exploreData, cardsData }) => {
	return (
		<>
			<Head>
				<title>Omobolaji Airbnb</title>
				<meta
					name='description'
					content='AirBnB Clone created by Arigbede Omobolaji Paul.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<Homepage exploreData={exploreData} cardsData={cardsData} />
		</>
	);
};

export default Home;

export type ExploreData = {
	img: string;
	location: string;
	distance: string;
};

export type CardsData = {
	img: string;
	title: string;
};

type GetStaticProps = {
	props: {
		exploreData: [ExploreData];
		cardsData: [CardsData];
	};
};

export async function getStaticProps(): Promise<GetStaticProps> {
	const exploreDataFetch = await fetch('https://links.papareact.com/pyp');
	const exploreData: [ExploreData] = await exploreDataFetch.json();

	const cardsDataFetch = await fetch('https://links.papareact.com/zp1');
	const cardsData: [CardsData] = await cardsDataFetch.json();

	return {
		props: {
			exploreData,
			cardsData,
		},
	};
}
