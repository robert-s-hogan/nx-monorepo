import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { GiDeathSkull } from 'react-icons/gi';
import { Flex } from '@with-nx/react-ui';

import { Campaign } from '../../types/types';
import withAuth from '../../hooks/withAuth';
import ConquestLayout from '../../components/ConquestLayout';
import { useAuth } from '../../hooks/useAuth';
import { useRouter } from 'next/router';

import ConquestModal from '../../components/ConquestModal';
import { useModal } from '@with-nx/react-hooks';

interface CampaignProps {
  campaign: Campaign;
}

const CampaignPage = ({ campaign }: CampaignProps) => {
  const { isShowing, toggle } = useModal();

  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [campaignData, setCampaignData] = useState({
    id: campaign.id,
    name: campaign.name,
    player_experience_start: campaign.player_experience_start,
    // group_alive: campaign.group_alive === 'true' ? true : false,
    notes: campaign.notes,
  });

  const [newEncounter, _newEncounter] = useState({
    player_count: 0,
    player_experience_start: 0,
    encounter_adjusted_experience: 0,
    encounter_experience: 0,
    notes: campaign.notes,
  });

  const handleEncounterChange = (event) => {
    const encounterId = event.target.value;
    if (encounterId) {
      router.push(`/encounters/${encounterId}`);
    }
  };

  const { user } = useAuth();
  const token = user?.token;

  const handleSave = async (e) => {
    e.preventDefault();

    const bodyData = {
      name: campaignData.name,
      // player_count: campaignData.player_count,
      player_experience_start: campaignData.player_experience_start,
      // group_alive: campaignData.group_alive,
      // rests: campaignData.rests,
      // notes: campaignData.notes,
    };

    try {
      const res = await fetch(
        `http://localhost:3333/api/campaign/${campaignData.id}`,
        {
          // changed from campaign.id
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(bodyData),
        }
      );

      // Check if the response status indicates success
      if (res.ok) {
        console.log(
          `updated campaign data: ${JSON.stringify(bodyData, null, 2)}`
        );
        setIsEditing(!isEditing);
        router.reload();
      } else {
        console.error('Error updating campaign:', await res.text());
      }
    } catch (error) {
      console.error(error);
    }
  };

  const createEncounter = async () => {
    const res = await fetch(`http://localhost:3333/api/encounters/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        campaignId: campaign.id,
        player_count: newEncounter.player_count,
        player_experience_start: newEncounter.player_experience_start,
        encounter_adjusted_experience:
          newEncounter.encounter_adjusted_experience,
        encounter_experience: newEncounter.encounter_experience,
        notes: newEncounter.notes,
      }),
    });

    const data = await res.json();

    console.log(`new encounter data: ${JSON.stringify(data, null, 2)}`);
    toggle();
    router.push('/encounters/' + data.id);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    const numericFields = [
      'player_count',
      'player_experience_start',
      'encounter_adjusted_experience',
      'encounter_experience',
    ];

    const parsedValue = numericFields.includes(name) ? Number(value) : value;

    _newEncounter((prevState) => ({
      ...prevState,
      [name]: parsedValue,
    }));
  };

  function handleSubmit(e) {
    e.preventDefault();
    createEncounter();
  }

  return (
    <ConquestLayout>
      {/* <pre className="text-xs grid grid-cols-2">
        <div>Campaign:{JSON.stringify(campaign, null, 2)}</div>
        <div>Encounter: {JSON.stringify(newEncounter, null, 2)}</div>
      </pre> */}

      <div className="container max-w-7xl mx-auto mt-8 px-2">
        <Flex className="items-center space-x-2">
          <Link href="/admin" className="underline flex items-center">
            <FiChevronLeft size={16} /> back
          </Link>
          <span className="text-gray-400">/</span>
          <p>{campaign.name}</p>
        </Flex>

        <div className="div flex justify-between my-12">
          <div>
            <Flex className="items-center">
              <div className="mr-4">
                <h1 className="text-black mt-3">{campaign.name}</h1>
                <p>Campaign info (#{campaign.id})</p>
              </div>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="w-auto h-min border-none align-top"
              >
                {isEditing ? 'Cancel' : 'Edit'}
              </button>
            </Flex>
          </div>

          <button onClick={toggle} className="bg-custom-gradient w-auto">
            Start Encounter
          </button>
        </div>
        <div className="grid grids-col-1 md:grid-cols-4 gap-4">
          <div className="flex flex-col border-b pb-4 md:col-span-3">
            {isEditing ? (
              <div className="flex justify-between w-full">
                <form className="space-y-8 w-full" onSubmit={handleSave}>
                  {/* notes */}
                  <div className="flex flex-col">
                    <div className="flex justify-between">
                      <div className="flex justify-between w-full">
                        <div>
                          <p>Notes</p>
                          <p className="text-xs md:text-md">
                            Placeholder text.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="block mt-4">
                      <label htmlFor="notes" className="sr-only">
                        Notes
                      </label>
                      <input
                        type="text"
                        name="notes"
                        id="notes"
                        placeholder={campaign.notes}
                        onChange={(e) =>
                          setCampaignData({
                            ...campaignData,
                            notes: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  {/* player starting experience */}
                  <div className="flex flex-col">
                    <div className="flex justify-between">
                      <div className="flex justify-between w-full">
                        <div>
                          <p>Player Experience Start</p>
                          <p className="text-xs md:text-md">
                            This is the group starting experience and how the
                            level is calulcated.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="block mt-4">
                      <label
                        htmlFor="player_experience_start"
                        className="sr-only"
                      >
                        Player Experience Start{' '}
                      </label>
                      <input
                        type="number"
                        name="player_experience_start"
                        id="player_experience_start"
                        // placeholder={campaign.player_experience_start}
                        onChange={(e) =>
                          setCampaignData({
                            ...campaignData,
                            player_experience_start: Number(e.target.value),
                          })
                        }
                      />
                    </div>
                  </div>

                  {/* group alive */}
                  <div className="flex flex-col items-center">
                    <div className="flex justify-between w-full">
                      <div>
                        <p>Group Alive</p>
                        <p className="text-xs md:text-md">
                          Toggle the group alive status.
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 w-full">
                      <Flex className="items-center">
                        <select
                          name="group_alive"
                          id="group_alive"
                          // value={campaignData.group_alive ? 'true' : 'false'}
                          onChange={(e) =>
                            setCampaignData({
                              ...campaignData,
                              // group_alive:
                              //   e.target.value === 'true' ? true : false,
                            })
                          }
                        >
                          <option value="true">Alive</option>
                          <option value="false">Dead</option>
                        </select>
                      </Flex>
                    </div>
                  </div>

                  <button type="submit" className="bg-red-400 text-white">
                    Save
                  </button>
                </form>
              </div>
            ) : (
              <div className="flex justify-between">
                <div className="space-y-8">
                  <div>
                    <p className="">Player Experience Start</p>
                    <p className="text-sm pb-2">
                      {campaign.player_experience_start}
                    </p>
                  </div>
                  <div>
                    <p className="">Notes</p>
                    <p className="text-sm pb-2">{campaign.notes}</p>
                  </div>
                  <div>
                    <div>
                      <p className="">Group Status</p>
                      <p className="text-sm pb-2">
                        {campaign.group_alive ? 'Alive' : 'Dead'}
                      </p>
                    </div>

                    {/* encounters dropdown */}
                    <div className="flex flex-col items-center mt-4">
                      <div className="flex justify-between w-full">
                        <div>
                          <p>Previous Encounters</p>
                        </div>
                      </div>
                      <div className="mt-1 w-full">
                        <Flex className="items-center">
                          {campaign?.encounters.length > 0 ? (
                            <select
                              name="previous-encounters"
                              id="previous-encounters"
                              onChange={handleEncounterChange}
                              className="select"
                            >
                              <option value="">Select an encounter</option>
                              {campaign?.encounters.map((encounterId) => (
                                <option key={encounterId} value={encounterId}>
                                  {encounterId}
                                </option>
                              ))}
                            </select>
                          ) : (
                            <p>No encounters yet.</p>
                          )}
                        </Flex>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="bg-white h-auto" />
        </div>
      </div>
      <ConquestModal isShowing={isShowing} toggle={toggle}>
        <div className="space-y-8">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 p-4 md:p-6">
              <div className="space-y-1">
                <h3>Encounter Information</h3>
                <p>
                  This information will determine the experience, gold, and
                  difficulty of the encounter.
                </p>
              </div>
              <div>
                <label htmlFor="player_count" className="sr-only">
                  How many players?
                </label>
                <input
                  id="player_count"
                  name="player_count"
                  required
                  type="number"
                  placeholder="Player count"
                  className="w-full border-t-0 border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white text-sm px-4 rounded-bl-none rounded-br-none rounded-t-none"
                  onChange={handleInputChange}
                />

                <label htmlFor="player_experience_start" className="sr-only">
                  Starting Player Experience
                </label>
                <input
                  id="player_experience_start"
                  name="player_experience_start"
                  type="number"
                  placeholder="Starting experience level"
                  className="w-full border-t-0 border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white text-sm px-4 rounded-bl-none rounded-br-none rounded-t-none"
                  onChange={handleInputChange}
                />

                <label
                  htmlFor="encounter_adjusted_experience"
                  className="sr-only"
                >
                  Encounter Adjust Experience
                </label>
                <input
                  id="encounter_adjusted_experience"
                  name="encounter_adjusted_experience"
                  type="number"
                  placeholder="Encounter adjusted experience"
                  className="w-full border-t-0 border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white text-sm px-4 rounded-bl-none rounded-br-none rounded-t-none"
                  onChange={handleInputChange}
                />

                <label htmlFor="encounter_experience" className="sr-only">
                  Encounter Experience
                </label>
                <input
                  id="encounter_experience"
                  name="encounter_experience"
                  type="number"
                  placeholder="Encounter experience"
                  className="w-full border-t-0 border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white text-sm px-4 rounded-b rounded-t-none"
                  onChange={handleInputChange}
                />
                <label htmlFor="notes" className="sr-only">
                  Encounter Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  placeholder="Encounter notes"
                  className="w-full border-t-0 border py-2 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white text-sm px-4 rounded-b rounded-t-none"
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit" className="btn-primary">
                Start Encounter
              </button>
            </div>
          </form>
        </div>
      </ConquestModal>
    </ConquestLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params;

  const res = await fetch(`http://localhost:3333/api/campaign/${id}`);
  const data = await res.json();
  const campaign = data.data;

  return {
    props: {
      campaign: campaign || null,
    },
  };
};

export default withAuth(CampaignPage);
