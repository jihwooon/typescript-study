import styles from './page.module.css';
import ClientComponent from '@/component/client-component';
import ServerComponent from '@/component/server-component';

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>인덱스 페이지</h1>
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
