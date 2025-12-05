import { useState, useTransition } from 'react';
import usePhoto from '../hooks/use-photo';
import {
	Dialog,
	DialogBody,
	DialogClose,
	DialogContent,
	DialogHeader,
	DialogTrigger,
} from '../../../components/dialog';
import Button from '../../../components/button';

interface PhotoDeleteDialogProps {
	trigger: React.ReactNode;
	id: string;
}

export default function PhotoDeleteDialog({
	trigger,
	id,
}: PhotoDeleteDialogProps) {
	const [modalOpen, setModalOpen] = useState(false);
	const [isDeletingPhoto, setIsDeletingPhoto] = useTransition();
	const { deletePhoto } = usePhoto();

	function handleDeletePhoto() {
		setIsDeletingPhoto(async () => {
			await deletePhoto(id);
		});
	}

	return (
		<Dialog open={modalOpen} onOpenChange={setModalOpen}>
			<DialogTrigger asChild>{trigger}</DialogTrigger>
			<DialogContent className='w-full '>
				<DialogHeader>Deseja realmente excluir?</DialogHeader>
				<DialogBody>
					<div className='flex items-center justify-between gap-2'>
						<DialogClose asChild>
							<Button variant='secondary' disabled={isDeletingPhoto}>
								Não
							</Button>
						</DialogClose>
						<Button
							type='button'
							variant='destructive'
							disabled={isDeletingPhoto}
							onClick={handleDeletePhoto}>
							{isDeletingPhoto ? 'Excluindo...' : 'Sim'}
						</Button>
					</div>
				</DialogBody>
			</DialogContent>
		</Dialog>
	);
}
