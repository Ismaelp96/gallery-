import type React from 'react';
import { tv } from 'tailwind-variants';

export const containerImagePreviewVariants = tv({
	base: `
    rounded-lg overflow-hidden
  `,
});

export const imagePreviewVariants = tv({
	base: `
    w-full h-full object-cover
  `,
});

interface ImagePreviewProps extends React.ComponentProps<'img'> {
	imageClassName?: string;
}

export default function ImagePreview({
	imageClassName,
	className,
	...props
}: ImagePreviewProps) {
	return (
		<div className={containerImagePreviewVariants({ className })}>
			<img
				className={imagePreviewVariants({ className: imageClassName })}
				alt='image preview'
				title='image preview'
				{...props}
			/>
		</div>
	);
}
