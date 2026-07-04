import { useStore } from '../store/useStore';
import DMToolkitLayout from '../components/DMToolkitLayout';
import FreeformSessionView from '../components/FreeformSessionView';
import ConquestSessionView from '../components/ConquestSessionView';

const SESSION_VIEWS = {
  freeform: FreeformSessionView,
  conquest: ConquestSessionView,
};

export default function Session() {
  const { getActiveCampaign } = useStore();
  const sessionMode = getActiveCampaign()?.session_mode ?? 'freeform';
  const View = SESSION_VIEWS[sessionMode];

  return (
    <DMToolkitLayout>
      <div className="max-w-7xl mx-auto px-6 py-8">
        <View />
      </div>
    </DMToolkitLayout>
  );
}
