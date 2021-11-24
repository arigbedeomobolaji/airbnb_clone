import { useRouter } from 'next/router';
import { format } from 'date-fns';
import { SearchResult } from '@nextPages/search';
import tw from 'tailwind-styled-components';
import Footer from '@components/Footer';
import Header from '@components/Header';
import InfoCard from '@components/InfoCard';
interface Props {
	searchResults: SearchResult[];
}
type SearchProps = {
	location: string;
	startDate: string;
	endDate: string;
	guest: string;
};

function formatPlaceholder(query: SearchProps): string {
	const { location, startDate, endDate, guest } = query;
	const startDateFormatted = format(new Date(startDate), 'dd MMM yyyy');
	const endDateFormatted = format(new Date(endDate), 'dd MMM yyyy');

	return `${location} | ${startDateFormatted} - ${endDateFormatted} | ${formatGuest(
		guest
	)}`;
}

const formatDate = (dateString: string): string =>
	format(new Date(dateString), 'dd MMMM yyyy');
const formatGuest = (guest: string): string =>
	parseInt(guest) > 1 ? `${guest} Guests` : `1 Guest`;

const ContentWrapper = tw.main`pt-14 px-6`;
const Text = tw.p`text-xs text-gray-500`;
const Title = tw.h2`text-3xl semi-bold pt-3 pb-5`;
const Features = tw.section`hidden md:flex whitespace-nowrap pb-5 space-x-5 border-b border-gray-100`;
const Feature = tw.div`text-sm text-gray-700 rounded-3xl border-2 border-gray-100 shadow-lg p-3 cursor-pointer active:bg-gray-100 active:scale-95 transition transform duration-100 ease-out`;
const InfoCardWrapper = tw.div`flex flex-col`;

function Search({ searchResults }: Props) {
	const router = useRouter();
	const searchQuery = router.query as SearchProps;
	const placeholder = formatPlaceholder(searchQuery);
	const startDate = formatDate(searchQuery.startDate);
	const endDate = formatDate(searchQuery.endDate);

	return (
		<>
			<Header placeholder={placeholder} />
			<ContentWrapper>
				<Text>{`300+ Stays - ${startDate} - ${endDate} - for ${formatGuest(
					searchQuery.guest
				)}`}</Text>
				<Title>{`Stays in ${searchQuery.location}`}</Title>
				<Features>
					<Feature>Cancellation Flexibility</Feature>
					<Feature>Type of Place</Feature>
					<Feature>Price</Feature>
					<Feature>Rooms and Beds</Feature>
					<Feature>More filters</Feature>
				</Features>
				<InfoCardWrapper>
					{searchResults.length &&
						searchResults.map((searchResult: SearchResult) => (
							<InfoCard
								key={searchResult.title}
								searchResult={searchResult}
							/>
						))}
				</InfoCardWrapper>
			</ContentWrapper>

			<Footer />
		</>
	);
}

export default Search;
