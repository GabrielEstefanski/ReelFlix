import Banner from '../../components/banner';
import Header from "../../components/header";
import PlanCard from './components/components/planCard';
import FieldPromotional from './components/fieldPromotional';
import FieldPromotional2 from './components/fieldPromotional2';

export default function Home() {
	return (
		<>
			<Header />
			<Banner />
			<PlanCard />
			<FieldPromotional />
			<FieldPromotional2 />
		</>
	)
}