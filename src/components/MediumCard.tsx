import Image from 'next/image';
import { CardsData } from 'pages';
import tw from 'tailwind-styled-components';

const CardWrapper = tw.div`
cursor-pointer
hover:scale-105 transition transform duration-300 ease-out`;
const ImgWrapper = tw.div`relative h-80 w-80`;
const Img = tw(Image)`rounded-xl`;
const CardTitle = tw.h2`text-xl pt-2 text-gray-600`;
function MediumCard({ img, title }: CardsData) {
	return (
		<CardWrapper>
			<ImgWrapper>
				<Img
					src={img}
					layout='fill'
					objectFit='contain'
					objectPosition='center'
				/>
			</ImgWrapper>
			<CardTitle>{title}</CardTitle>
		</CardWrapper>
	);
}

export default MediumCard;
