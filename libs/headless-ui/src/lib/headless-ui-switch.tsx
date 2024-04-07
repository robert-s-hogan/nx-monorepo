import { useState } from 'react';
import { Switch } from '@headlessui/react';

const HeadlessUiSwitch: React.FC = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch checked={enabled} onChange={setEnabled} className="bg-blue-600">
      <span className="sr-only">Enable notifications</span>
      <span className="pointer-events-none" aria-hidden="true">
        {enabled ? '🔔' : '🔕'}
      </span>
    </Switch>
  );
};

export default HeadlessUiSwitch;
