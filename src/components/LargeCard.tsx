import Image from 'next/image';
import tw from 'tailwind-styled-components';

const Wrapper = tw.section`relative py-8 sm:py-16 cursor-pointer`;
const ImageWrapper = tw.div`relative h-[300px] sm:h-96`;
const Img = tw(Image)`rounded-2xl`;
const CardContent = tw.div`absolute left-12 top-32`;
const Title = tw.h3`text-4xl mb-3 w-64`;
const Description = tw.h3``;
const Button = tw.button`text-sm text-white bg-gray-900 py-2 px-4 rounded-lg mt-5 transition-transform duration-150 ease-out
hover:shadow-md
active:scale-95
`;
function LargeCard({
	img,
	title,
	description,
	buttonText,
}: Props): JSX.Element {
	return (
		<Wrapper>
			<ImageWrapper>
				<Img
					src={img}
					layout='fill'
					objectFit='cover'
					objectPosition='center'
				/>
			</ImageWrapper>
			<CardContent>
				<Title>{title}</Title>
				<Description>{description}</Description>
				<Button>{buttonText}</Button>
			</CardContent>
		</Wrapper>
	);
}

export default LargeCard;

type Props = {
	img: string;
	title: string;
	description: string;
	buttonText: string;
};
