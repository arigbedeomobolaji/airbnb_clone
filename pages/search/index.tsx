import type { NextPage } from 'next';
import Head from 'next/head';
import SearchPage from '@pages/Search';

export interface Props {
	searchResults: SearchResult[];
}
const Search: NextPage<Props> = ({ searchResults }) => {
	return (
		<div>
			<Head>
				<title>Omobolaji Airbnb</title>
				<meta
					name='description'
					content='AirBnB Search created by Arigbede Omobolaji Paul.'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<SearchPage searchResults={searchResults} />
		</div>
	);
};

export default Search;

export type SearchResult = {
	img: string;
	location: string;
	title: string;
	description: string;
	star: number;
	price: string;
	total: string;
	long: number;
	lat: number;
};

type GetServerSideProps = {
	props: {
		searchResults: SearchResult[];
	};
};

export const getServerSideProps = async (): Promise<GetServerSideProps> => {
	const searchResultResponse = await fetch('https://links.papareact.com/isz');
	const searchResults = await searchResultResponse.json();

	return {
		props: {
			searchResults,
		},
	};
};
