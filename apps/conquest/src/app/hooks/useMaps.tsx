import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@with-nx/firebase';
import { Map } from '../types/Maps';

export const useMaps = () => {
  const [maps, setMaps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMaps = async () => {
      const querySnapshot = await getDocs(collection(db, 'dnd.maps'));
      const mapsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      // setMaps(mapsData as Map);
      setLoading(false);
    };

    fetchMaps();
  }, []);

  return { maps, loading };
};
