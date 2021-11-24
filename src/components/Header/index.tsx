import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {
	SearchIcon,
	GlobeAltIcon,
	MenuIcon,
	UserCircleIcon,
	UsersIcon,
} from '@heroicons/react/solid';
import { DateRangePicker, DateRange, RangeKeyDict } from 'react-date-range';
import { useMediaQuery } from '@react-hook/media-query';
import {
	HeaderWrapper,
	LeftBar,
	MiddleBar,
	RightBar,
	Filter,
	Img,
	Input,
	Text,
	DivWrapper,
	ExpectedGuest,
	ExpectedGuestTitle,
	ExpectedGuestInput,
	Actions,
	Action,
} from './style';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

interface Props {
	placeholder?: string;
}
function Header({ placeholder }: Props): JSX.Element {
	const [searchInput, setSearchInput] = useState('');
	const [startDate, setStartDate] = useState<Date | undefined>(new Date());
	const [endDate, setEndDate] = useState<Date | undefined>(new Date());
	const [guest, setGuest] = useState('1');
	const router = useRouter();

	const isSmallScreen = useMediaQuery('(max-width: 36rem)');

	const handleDateChange = (ranges: RangeKeyDict): void => {
		setStartDate(ranges.selection.startDate);
		setEndDate(ranges.selection.endDate);
	};

	const handleSearch = (): void => {
		router.push({
			pathname: '/search',
			query: {
				location: searchInput,
				guest,
				startDate: startDate?.toISOString(),
				endDate: endDate?.toISOString(),
			},
		});
	};

	const selectionRange = {
		startDate,
		endDate,
		key: 'selection',
	};

	return (
		<HeaderWrapper>
			<LeftBar onClick={() => router.push('/')}>
				<Img
					src='https://links.papareact.com/qd3'
					layout='fill'
					objectFit='contain'
					objectPosition='left'
					alt='Logo'
				/>
			</LeftBar>
			<MiddleBar>
				<Input
					type='text'
					placeholder={placeholder || 'Start your search'}
					value={searchInput}
					onChange={(e) => setSearchInput(e.target.value)}
				/>
				<SearchIcon className='hidden bg-red-500 h-full w-10 text-md text-white rounded-full p-2 cursor-pointer mx-2 md:inline-flex' />
			</MiddleBar>
			<RightBar>
				<Text className='hidden sm:text-xs sm:semi-bold md:inline-flex'>
					Become a Host
				</Text>
				<GlobeAltIcon className='h-6 cursor-pointer' />
				<DivWrapper>
					<MenuIcon className='h-6 cursor-pointer' />
					<UserCircleIcon className='h-6 cursor-pointer' />
				</DivWrapper>
			</RightBar>

			{searchInput && (
				<Filter>
					{isSmallScreen ? (
						<DateRange
							ranges={[selectionRange]}
							onChange={handleDateChange}
							rangeColors={['#FD5B61']}
							minDate={new Date()}
						/>
					) : (
						<DateRangePicker
							ranges={[selectionRange]}
							onChange={handleDateChange}
							rangeColors={['#FD5B61']}
							minDate={new Date()}
						/>
					)}
					<ExpectedGuest>
						<ExpectedGuestTitle>Expected guest</ExpectedGuestTitle>
						<UsersIcon className='h-6 text-gray-500 pr-2' />
						<ExpectedGuestInput
							type='number'
							onChange={(e) => setGuest(e.target.value)}
							min='1'
							value={guest}
						/>
					</ExpectedGuest>
					<Actions>
						<Action onClick={() => setSearchInput('')}>
							Cancel
						</Action>
						<Action onClick={handleSearch}>Search</Action>
					</Actions>
				</Filter>
			)}
		</HeaderWrapper>
	);
}
export default Header;
