import { useRouter } from 'next/router';

const MapsIdPage = () => {
  const router = useRouter();
  const { mapsId } = router.query;

  return (
    <div>
      <h1>Dynamic Route: {mapsId}</h1>
      {/* Your JSX content here */}
    </div>
  );
};

export default MapsIdPage;
