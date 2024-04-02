'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import Layout from '@conquestComponents/Layout';
import CampaignForm from '@conquestComponents/CampaignForm';
import { fetchCampaignBySlug } from '@conquestServices/campaignService';
import { Campaign as CampaignType } from '../../types'; // Renamed for clarity
import { useCampaignForm } from '@conquestHooks/useCampaignForm';
import { useCampaigns } from '@conquestHooks/useCampaigns'; // Import the useCampaigns hook
import EncountersList from '@conquestComponents/EncountersList';
import { EncounterProvider } from '@conquestContexts/EncounterContext';
import { useEncounters } from '@conquestHooks/useEncounters';
import { IonIcon } from '@ionic/react';
import { chevronBack, create, trash } from 'ionicons/icons';

export default function DynamicCampaignPage() {
  const pathname = usePathname();
  const [selectedCampaign, setSelectedCampaign] = useState<CampaignType | null>(
    null
  );
  const [isEditMode, setIsEditMode] = useState(false);
  const { handleAddCampaign, handleEditCampaign, handleDeleteCampaign } =
    useCampaignForm(); // Destructure handleEditCampaign from the hook

  const { campaigns } = useCampaigns(); // Fetch all campaigns
  const {
    encounters,
    isLoading: isEncountersLoading,
    isError: isEncountersError,
  } = useEncounters(selectedCampaign?.id as string); // Fetch encounters for the selected campaign

  // Fetch the selected campaign data based on the slug
  useEffect(() => {
    const slug = pathname.split('/').pop();
    if (slug) {
      const fetchAndSetCampaign = async () => {
        const fetchedCampaign = await fetchCampaignBySlug(
          decodeURIComponent(slug)
        );
        setSelectedCampaign(fetchedCampaign);
      };
      fetchAndSetCampaign();
    }
  }, [pathname, campaigns]);

  if (!selectedCampaign) return <div>Loading...</div>;

  return (
    <EncounterProvider>
      <Layout
        title={
          isEditMode
            ? `Edit Campaign: ${selectedCampaign.name}`
            : selectedCampaign.name
        }
      >
        <div className="flex flex-col lg:flex-row w-full">
          {/* Selected campaign details and encounters list */}
          <div className="w-full lg:w-1/2 p-4 flex flex-col">
            <div className="flex items-center space-between space-x-2">
              <h2>Your Campaign</h2>
              <button
                className="btn-primary"
                onClick={handleAddCampaign as any}
              >
                Add
              </button>
            </div>
            {!isEditMode ? (
              <>
                {campaigns &&
                  campaigns.map((campaign) => (
                    <div
                      key={campaign.id}
                      className="border border-black rounded my-4 p-4"
                    >
                      <div className="flex items-center space-between space-x-2">
                        <button
                          onClick={() => handleEditCampaign(campaign)}
                          className="btn-edit flex ml-auto"
                        >
                          <IonIcon icon={create} size="large" />
                        </button>
                        <button
                          onClick={() =>
                            handleDeleteCampaign(campaign.id as string)
                          }
                        >
                          <IonIcon icon={trash} size="large" />
                        </button>
                      </div>
                      <div className="pb-2">
                        <h2 className="my-0">{campaign.name}</h2>
                        <p className="py-0">{campaign.description}</p>
                      </div>
                      <p>Players: {campaign.numberOfPlayers}</p>
                      <p>Group Alive: {campaign.groupDead ? 'No' : 'Yes'}</p>
                    </div>
                  ))}
              </>
            ) : (
              <div className="border border-black mb-4 p-4">
                <button
                  onClick={() => setIsEditMode(false)}
                  className="btn-cancel py-3 flex w-auto"
                >
                  <IonIcon icon={chevronBack} />
                </button>
                <CampaignForm
                  campaign={selectedCampaign}
                  onSubmit={handleEditCampaign}
                  operation="edit"
                />
              </div>
            )}
          </div>
          <div className="w-full lg:w-1/2 p-4 flex flex-col">
            {isEncountersLoading ? (
              <div>Loading encounters...</div>
            ) : isEncountersError ? (
              <div>Error loading encounters.</div>
            ) : (
              <EncountersList encounters={encounters || []} />
            )}
          </div>
        </div>
      </Layout>
    </EncounterProvider>
  );
}
