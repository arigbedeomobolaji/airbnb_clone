import Image from 'next/image';
import tw from 'tailwind-styled-components';
import { HeartIcon } from '@heroicons/react/outline';
import { StarIcon } from '@heroicons/react/solid';
import { SearchResult } from '@nextPages/search';

interface Props {
	searchResult: SearchResult;
}

const Wrapper = tw.section`sm:flex py-5 px-1 pr-2 sm:py-7 sm:px-2 sm:pr-4 border-b cursor-pointer rounded-lg hover:opacity-80 hover:shadow-2xl first:border-t <first:pt-7></first:pt-7> transition duration-200 ease-out`;
const Left = tw.div`relative h-52 w-[98%] sm:h-24 sm:w-40 mb-3 md:mb-0 md:h-52 md:w-80 flex-shrink-0`;
const Right = tw.div`flex flex-col flex-grow pl-2 sm:pl-5`;
const InnerWrapper = tw.div`flex justify-between`;
const Text = tw.p``;
const Title = tw.h2`text-xl`;
const Description = tw.p`pt-2 text-sm text-gray-500 flex-grow pb-10`;
const InfoWrapper = tw.div`flex justify-between items-end pt-5`;
const Star = tw.p`flex items-center`;
const CostWrapper = tw.div``;
const Price = tw.p`text-lg font-semibold pb-2 lg:text-2xl`;
const TotalPrice = tw.p`text-right font-extralight`;
const Img = tw(Image)`rounded-lg`;

function InfoCard({ searchResult }: Props) {
	const {
		img,
		location,
		title,
		description,
		star,
		price,
		total,
		long,
		lat,
	} = searchResult;
	return (
		<Wrapper>
			<Left>
				<Img
					layout='fill'
					src={img}
					objectFit='cover'
					objectPosition='left'
					alt={title}
				/>
			</Left>
			<Right>
				<InnerWrapper>
					<Text>{location}</Text>
					<HeartIcon className='h-7 cursor-pointer text-red-500' />
				</InnerWrapper>
				<Title>{title}</Title>
				<div className='border-b w-10 pt-2' />
				<Description>{description}</Description>
				<InfoWrapper>
					<Star>
						<StarIcon className='h-5 text-red-400' />
						{star}
					</Star>
					<CostWrapper>
						<Price>{price}</Price>
						<TotalPrice>{total}</TotalPrice>
					</CostWrapper>
				</InfoWrapper>
			</Right>
		</Wrapper>
	);
}

export default InfoCard;
