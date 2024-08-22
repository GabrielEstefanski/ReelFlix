import Banner from '../../components/banner';
import Header from "../../components/header";
import PlanCard from './components/components/planCard';
import FieldPromotional from './components/fieldPromotional';
import FieldPromotional2 from './components/fieldPromotional2';
import styled from 'styled-components';

const Container = styled.div`
	margin: 0 20%;
`

export default function Home() {
	return (
		<>
			<Header />
			<Banner />
			<Container>
				<PlanCard />
			</Container>
			<FieldPromotional />
			<FieldPromotional2 />
		</>
	)
}