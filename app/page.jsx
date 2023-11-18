import Banner from '@/components/Banner/Banner';
import styles from './page.module.css';
import CardsHome from '@/components/CardsHome/CardsHome';

export default function Home() {
	return (
		<main className={styles.main}>
			<Banner />
			<CardsHome />
		</main>
	);
}
