import Container from '../components/container';
import AlbumsFilter from '../contexts/albums/components/albums-filter';
import PhotosList from '../contexts/photos/components/photo-list';

export function PageHome() {
	return (
		<Container>
			<AlbumsFilter
				albums={[
					{ id: '3421', title: 'Esportes' },
					{ id: '1234', title: 'Natureza' },
					{ id: '4132', title: 'Geométrico' },
				]}
				className='mb-9'
			/>
			<PhotosList
				photos={[
					{
						id: '123',
						title: 'Olá mundo!',
						imageId: 'portrait-tower.png',
						albums: [
							{ id: '3421', title: 'Esportes' },
							{ id: '1234', title: 'Natureza' },
							{ id: '4132', title: 'Geométrico' },
						],
					},
					{
						id: '123',
						title: 'Olá mundo!',
						imageId: 'portrait-tower.png',
						albums: [
							{ id: '3421', title: 'Esportes' },
							{ id: '1234', title: 'Natureza' },
							{ id: '4132', title: 'Geométrico' },
						],
					},
					{
						id: '123',
						title: 'Olá mundo!',
						imageId: 'portrait-tower.png',
						albums: [
							{ id: '3421', title: 'Esportes' },
							{ id: '1234', title: 'Natureza' },
							{ id: '4132', title: 'Geométrico' },
						],
					},
					{
						id: '123',
						title: 'Olá mundo!',
						imageId: 'portrait-tower.png',
						albums: [
							{ id: '3421', title: 'Esportes' },
							{ id: '1234', title: 'Natureza' },
							{ id: '4132', title: 'Geométrico' },
						],
					},
					{
						id: '123',
						title: 'Olá mundo!',
						imageId: 'portrait-tower.png',
						albums: [
							{ id: '3421', title: 'Esportes' },
							{ id: '1234', title: 'Natureza' },
							{ id: '4132', title: 'Geométrico' },
						],
					},
				]}
			/>
		</Container>
	);
}
