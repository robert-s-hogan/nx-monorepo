import { Disclosure } from '@headlessui/react';

const HeadlessUiDisclosure: React.FC = () => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button>
            {open ? 'Hide content' : 'Show content'}
          </Disclosure.Button>
          <Disclosure.Panel>
            <p>Content goes here</p>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default HeadlessUiDisclosure;
