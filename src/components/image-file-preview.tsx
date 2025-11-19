import type React from 'react';
import { tv } from 'tailwind-variants';

export const containerImageFilePreviewVariants = tv({
	base: `
    rounded-lg overflow-hidden
  `,
});

export const imageFilePreviewVariants = tv({
	base: `
    w-full h-full object-cover
  `,
});

interface ImageFilePreviewProps extends React.ComponentProps<'img'> {
	imageClassName?: string;
}

export default function ImageFilePreview({
	imageClassName,
	className,
	...props
}: ImageFilePreviewProps) {
	return (
		<div className={containerImageFilePreviewVariants({ className })}>
			<img
				className={imageFilePreviewVariants({ className: imageClassName })}
				alt='image preview'
				title='image preview'
				{...props}
			/>
		</div>
	);
}
