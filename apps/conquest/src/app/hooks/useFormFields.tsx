import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../../../libs/firebase/src/lib/firebase-config';
import { FieldConfig } from '../types'; // Adjust the import path as necessary

export const useFormFields = (formName: string) => {
  // Use FieldConfig[] for the state type
  const [fields, setFields] = useState<FieldConfig[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchFormFields = async () => {
      const docRef = doc(db, 'FormFields', formName);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        // Ensure that the fields array in the document conforms to FieldConfig[]
        if (
          Array.isArray(data.fields) &&
          data.fields.every((field) => 'name' in field && 'type' in field)
        ) {
          setFields(data.fields as FieldConfig[]);
        } else {
          console.error('Invalid form fields structure');
        }
      } else {
        console.log('No such document!');
      }
      setLoading(false);
    };

    fetchFormFields();
  }, [formName]);

  return { fields, loading, error };
};
