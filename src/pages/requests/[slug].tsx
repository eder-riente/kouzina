import { useRouter } from 'next/router';
import Eggs from '@/components/eggs';
function Requests() {
  const router = useRouter();
  const { slug } = router.query;
  switch (slug) {
    case 'eggs':
      return <Eggs />;

    default:
      return <h1>Page {slug}</h1>;
  }
}

export default Requests;
