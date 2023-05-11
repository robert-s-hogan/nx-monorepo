import { PageNotFound } from '@with-nx/react-ui';
import Image from 'next/image';
import Link from 'next/link';

import AccountantLayout from '../components/AccountantLayout';

export default function Custom404() {
  return (
    <AccountantLayout>
      <PageNotFound />
    </AccountantLayout>
  );
}
