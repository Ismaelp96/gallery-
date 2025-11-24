import type React from 'react';
import cx from 'classnames';

import type { Album } from '../models/album';

import Button from '../../../components/button';
import Text from '../../../components/text';
import Skeleton from '../../../components/skeleton';

interface AlbumsFilterProps extends React.ComponentProps<'div'> {
	albums: Album[];
	loading?: boolean;
}

export default function AlbumsFilter({
	albums,
	loading,
	className,
	...props
}: AlbumsFilterProps) {
	return (
		<div
			className={cx('flex items-center gap-3.5 overflow-x-auto', className)}
			{...props}>
			<Text variant='heading-small'>Álbuns</Text>
			<div className='flex gap-3'>
				{!loading ? (
					<>
						<Button size='sm' className='cursor-pointer' variant='primary'>
							Todos
						</Button>
						{albums.map((album) => (
							<Button
								size='sm'
								className='cursor-pointer'
								variant='ghost'
								key={album.id}>
								{album.title}
							</Button>
						))}
					</>
				) : (
					Array.from({ length: 5 }).map((_, index) => (
						<Skeleton
							key={`album-button-loading-${index}`}
							className='w-20 h-7'
						/>
					))
				)}
			</div>
		</div>
	);
}
