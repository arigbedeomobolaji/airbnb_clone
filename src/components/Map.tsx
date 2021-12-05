import tw from 'tailwind-styled-components';
import { useState } from 'react';
import { getCenter } from 'geolib';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { SearchResult } from '@nextPages/search';

interface Props {
	searchResults: SearchResult[];
}

type CurrentPopup = {
	latitude: number;
	longitude: number;
	title: string;
};

type Coordinate = {
	latitude: number;
	longitude: number;
};

type Viewport = {
	width: string;
	height: string;
	latitude: number;
	longitude: number;
	zoom: number;
};

const MarkerPin = tw.p`text-lg cursor-pointer animate-bounce`;

const MAPBOX_KEY = process.env.MAPBOX_KEY || '';

function Map({ searchResults }: Props): JSX.Element {
	const coordinates: Coordinate[] = searchResults?.map(
		({ lat, long }): Coordinate => ({
			latitude: lat,
			longitude: long,
		})
	);

	const { latitude, longitude } = getCenter(coordinates) as Coordinate;

	const [viewport, setViewport] = useState<Viewport>({
		width: '100%',
		height: '100%',
		latitude,
		longitude,
		zoom: 11,
	});
	const [showPopup, togglePopup] = useState(false);
	const [currentPopup, setCurrentPopup] = useState<CurrentPopup | null>(null);

	const handlePopup = (searchResult: SearchResult): void => {
		togglePopup(true);
		setCurrentPopup({
			latitude: searchResult.lat,
			longitude: searchResult.long,
			title: searchResult.title,
		});
	};
	const handlePopupClose = (): void => {
		togglePopup(false);
		setCurrentPopup(null);
	};
	return (
		<ReactMapGL
			mapboxApiAccessToken={MAPBOX_KEY}
			mapStyle={
				'mapbox://styles/arigbedeomobolaji/ckwqaepas5w3q14o5p5hg5y4h'
			}
			{...viewport}
			onViewportChange={(viewport: Viewport) => setViewport(viewport)}
		>
			{searchResults?.map((searchResult: SearchResult, index) => (
				<Marker
					key={searchResult.lat + '' + searchResult.long + '' + index}
					latitude={searchResult.lat}
					longitude={searchResult.long}
					offsetLeft={-20}
					offsetTop={-10}
				>
					<MarkerPin onClick={() => handlePopup(searchResult)}>
						📌
					</MarkerPin>
				</Marker>
			))}
			{showPopup && currentPopup && (
				<Popup
					latitude={currentPopup.latitude}
					longitude={currentPopup.longitude}
					closeButton={true}
					closeOnClick={false}
					onClose={handlePopupClose}
					anchor='top'
				>
					<p>{currentPopup.title}</p>
				</Popup>
			)}
		</ReactMapGL>
	);
}

export default Map;
