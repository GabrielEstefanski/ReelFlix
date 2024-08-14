import Carousel from './components/carousel';
import images from '../../data/imgs.json';
import Header from './components/header';
import Banner from './components/banner';

const categories = ["Comédia", "Ação/Aventura", "Suspense", "Ação", "Animação", "Terror", "Romance"]

export default function films() {
	return (
		<>
			<Header/>
			<Banner/>
			{categories.map(category => (
				<Carousel key={category} category={category} images={images.images} />
			))}
		</>
	)
}