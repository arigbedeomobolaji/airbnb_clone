import MediumCard from '@src/components/MediumCard';
import SmallCard from '@src/components/SmallCard';
import LargeCard from '@src/components/LargeCard';
import tw from 'tailwind-styled-components';
import { Props, ExploreData, CardsData } from './';

const MainWrapper = tw.main`max-w-7xl mx-auto px-8 sm:px-16`;
const Section = tw.section`pt-6`;
const SectionTitle = tw.h1`text-4xl font-semibold pb-5`;
const SmallCards = tw.div`grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`;
const LiveAnywhere = tw(SectionTitle)`pt-8`;
const MediumCards = tw.div`flex items-center space-x-3 p-3 pb-5 overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-50 hover:scrollbar-thumb-gray-500`;

function Main({ exploreData, cardsData }: Props) {
	return (
		<MainWrapper>
			<Section>
				<SectionTitle>Explore Nearby</SectionTitle>
				<SmallCards>
					{exploreData?.map(
						({ img, location, distance }: ExploreData) => (
							<SmallCard
								key={img}
								img={img}
								location={location}
								distance={distance}
							/>
						)
					)}
				</SmallCards>
			</Section>
			<Section>
				<LiveAnywhere>Live Anywhere</LiveAnywhere>
				<MediumCards>
					{cardsData?.map(({ img, title }: CardsData) => (
						<MediumCard key={img} img={img} title={title} />
					))}
				</MediumCards>
			</Section>
			<LargeCard
				img='https://links.papareact.com/4cj'
				title='The Greatest Outdoors'
				description='Wishlists curated by Airbnb.'
				buttonText='Get Inspired'
			/>
		</MainWrapper>
	);
}

export default Main;
