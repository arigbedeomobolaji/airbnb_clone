import tw from 'tailwind-styled-components';
import Image from 'next/image';

export const HeaderWrapper = tw.header`sticky top-0 z-50 bg-white shadow-md p-5 grid grid-cols-10 md:px-10`;
export const LeftBar = tw.div`relative flex items-center h-10 cursor-pointer col-span-2`;
export const MiddleBar = tw.div`flex items-center shadow-lg rounded-full py-2 col-span-5 mx-2 border-red-50 border-2`;
export const RightBar = tw.div`flex items-center justify-end col-span-3 space-x-2 md:space-x-4 text-gray-500`;
export const Filter = tw.div`flex flex-col col-span-9 mx-auto mt-5`;
export const Img = tw(Image)``;
export const Input = tw.input`bg-transparent outline-none pl-5 text-xs sm:text-sm text-gray-600 placeholder-gray-300 flex-grow`;
export const Text = tw.p``;
export const Title = tw.h2``;
export const DivWrapper = tw.div`flex items-center justify-center space-x-2 border border-gray-50 p-2 px-3 mx-2 shadow-md rounded-full`;
export const ExpectedGuest = tw.div`flex items-center py-3 border-b-2 border-red-50`;
export const ExpectedGuestTitle = tw(
	Title
)`flex-grow text-gray-500 semi-bold text-xl`;
export const ExpectedGuestInput = tw.input`w-12 rounded-xl bg-gray-100 outline-none shadow-xl text-center text-red-500`;

export const Actions = tw.div`flex space-x-4 mx-5`;
export const Action = tw.div`flex-grow text-center p-3 text-gray-600 cursor-pointer`;
