import React from 'react';
import tw from 'tailwind-styled-components';
import Image from 'next/image';

const Wrapper = tw.div`relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[550px]`;
const Img = tw(Image)``;
const BannerContent = tw.div`absolute top-1/2 w-full text-center`;
const BannerText = tw.p`text-sm sm:text-lg`;
const Button = tw.button`text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 outline-none
hover:shadow-xl
active:scale-90
transition
duration-150
`;

function Banner(): JSX.Element {
	return (
		<Wrapper>
			<Img
				src='https://links.papareact.com/0fm'
				layout='fill'
				objectFit='cover'
				objectPosition='center'
				alt='Hero Image'
			/>
			<BannerContent>
				<BannerText>Not sure where to go? Perfect.</BannerText>
				<Button>I'm Flexible</Button>
			</BannerContent>
		</Wrapper>
	);
}

export default Banner;
