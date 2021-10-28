import Image from 'next/image';
import tw from 'tailwind-styled-components';
import { ExploreData } from '../../pages';

const CardWrapper = tw.div`
flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer
hover:bg-gray-100 hover:scale-105 transition transfor duration-200 ease-out
`;
const LeftWrapper = tw.div`relative h-16 w-16`;
const RightWrapper = tw.div``;
const Img = tw(Image)`rounded-lg`;
const Location = tw.h2``;
const Distance = tw.p`text-gray-500`;
function SmallCard({ img, location, distance }: ExploreData) {
	return (
		<CardWrapper>
			<LeftWrapper>
				<Img
					src={img}
					layout='fill'
					objectFit='contain'
					objectPosition='center'
				/>
			</LeftWrapper>
			<RightWrapper>
				<Location>{location}</Location>
				<Distance>{distance}</Distance>
			</RightWrapper>
		</CardWrapper>
	);
}

export default SmallCard;
