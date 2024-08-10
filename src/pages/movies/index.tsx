import Carousel from './components/carousel';
import images from '../../data/imgs.json';
import Header from "../../components/header";

const categories = ["Comédia", "Ação/Aventura", "Suspense", "Ação", "Animação", "Terror", "Romance"]

export default function films() {
	return (
		<>
			<Header />
			{categories.map(category => (
				<Carousel key={category} category={category} images={images.images} />
			))}
		</>
	)
}