import Container from '../components/container';
import PhotosList from '../contexts/photos/components/photo-list';

export function PageHome() {
	return (
		<Container>
			<PhotosList photos={[]} loading />
		</Container>
	);
}
