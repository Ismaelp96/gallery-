import type { Album } from '../models/album';
import type { Photo } from '../../photos/models/photo';
import cx from 'classnames';
import Text from '../../../components/text';
import InputCheckbox from '../../../components/input-checkbox';
import Divider from '../../../components/divider';
import Skeleton from '../../../components/skeleton';
import usePhotoAlbums from '../../photos/hooks/use-photo-albums';
import { useTransition } from 'react';

interface AlbumsListSelectableProps extends React.ComponentProps<'ul'> {
	loading?: boolean;
	albums: Album[];
	photo: Photo;
}
export default function AlbumsListSelectable({
	loading,
	albums,
	photo,
	className,
	...props
}: AlbumsListSelectableProps) {
	const { managePhotoOnAlbum } = usePhotoAlbums();
	const [isUpdatingPhoto, setIsUpdatingPhoto] = useTransition();

	function isChecked(albumId: string) {
		return photo?.albums?.some((album) => album.id === albumId);
	}

	async function handlePhotoOnAlbum(albumId: string) {
		let albumsIds = [];

		if (isChecked(albumId)) {
			albumsIds = photo.albums
				.filter((album) => album.id !== albumId)
				.map((album) => album.id);
		} else {
			albumsIds = [...photo.albums.map((album) => album.id, albumId)];
		}

		setIsUpdatingPhoto(async () => {
			await managePhotoOnAlbum(photo.id, albumsIds);
		});
	}
	return (
		<ul className={cx('flex flex-col gap-4', className)} {...props}>
			{!loading &&
				albums?.length > 0 &&
				albums.map((album, index) => (
					<li key={album.id}>
						<div className='flex items-center justify-between'>
							<Text>{album.title}</Text>
							<InputCheckbox
								defaultChecked={isChecked(album.id)}
								onChange={() => handlePhotoOnAlbum(album.id)}
								disabled={isUpdatingPhoto}
							/>
						</div>
						{index !== albums.length - 1 && <Divider className='mt-4' />}
					</li>
				))}
			{loading &&
				Array.from({ length: 4 }).map((_, i) => (
					<li key={`album-list-loading-${i}`}>
						<Skeleton className='h-[2.5rem]' />
					</li>
				))}
		</ul>
	);
}
