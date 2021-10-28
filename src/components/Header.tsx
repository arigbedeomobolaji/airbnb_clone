import React from 'react';
import Image from 'next/image';
import tw from 'tailwind-styled-components';
import {
	SearchIcon,
	GlobeAltIcon,
	MenuIcon,
	UserCircleIcon,
	UsersIcon,
} from '@heroicons/react/solid';

const HeaderWrapper = tw.header`sticky top-0 z-50 bg-white shadow-md p-5 grid grid-cols-10 md:px-10`;
const LeftBar = tw.div`relative flex items-center h-10 cursor-pointer col-span-2`;
const MiddleBar = tw.div`flex items-center shadow-lg rounded-full py-2 col-span-5 mx-2`;
const RightBar = tw.div`flex items-center justify-end col-span-3 space-x-2 text-gray-500`;
const Img = tw(Image)`
`;
const Input = tw.input`bg-transparent outline-none pl-5 text-sm text-gray-600 placeholder-gray-300 flex-grow`;

const Text = tw.p``;
const DivWrapper = tw.div`flex items-center justify-center space-x-2 border border-gray-50 p-2 px-3 mx-2 shadow-md rounded-full`;

function Header(): JSX.Element {
	return (
		<HeaderWrapper>
			<LeftBar>
				<Img
					src='https://links.papareact.com/qd3'
					layout='fill'
					objectFit='contain'
					objectPosition='left'
					alt='Logo'
				/>
			</LeftBar>
			<MiddleBar>
				<Input type='text' placeholder='Start your search' />
				<SearchIcon className='hidden bg-red-500 h-full w-10 text-md text-white rounded-full p-2 cursor-pointer mx-2 md:inline-flex' />
			</MiddleBar>
			<RightBar>
				<Text className='hidden  md:inline-flex'>Become a Host</Text>
				<GlobeAltIcon className='h-6 cursor-pointer' />
				<DivWrapper>
					<MenuIcon className='h-6 cursor-pointer' />
					<UserCircleIcon className='h-6 cursor-pointer' />
				</DivWrapper>
			</RightBar>
		</HeaderWrapper>
	);
}
export default Header;
