import ConquestLayout from '../components/ConquestLayout';
import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import { Campaign } from '../types/campaign';
import Link from 'next/link';
import { useRouter } from 'next/router';

// components & assets
import ConquestModal from '../components/ConquestModal';
import { Flex } from '@with-nx/react-ui';

//auth
import withAuth from '../hooks/withAuth';
import { useAuth } from '../hooks/useAuth';

//hooks
import { useModal } from '@with-nx/react-hooks';

//icons
import { MdGroups3 } from 'react-icons/md';
import { GiCampfire } from 'react-icons/gi';
import { FiX } from 'react-icons/fi';
import { FaLock } from 'react-icons/fa';

import { postNewCampaign } from '../services/campaignsService';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Admin = () => {
  const { user } = useAuth();
  const router = useRouter();
  const { isShowing, toggle } = useModal();

  // New Campaigns
  const [newCampaign, _newCampaign] = useState({
    name: '',
    player_experience_start: 0,
    notes: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    const numericFields = ['player_experience_start'];

    const parsedValue = numericFields.includes(name) ? Number(value) : value;

    _newCampaign((prevState) => ({
      ...prevState,
      [name]: parsedValue,
    }));
  };

  const token = user?.token;

  const createCampaign = async () => {
    const res = await fetch('http://localhost:3333/api/campaign', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: newCampaign.name,
        player_experience_start: newCampaign.player_experience_start,
        notes: newCampaign.notes,
      }),
    });
    const data = await res.json();
    console.log(`data:`, data);

    if (res.status >= 400) {
      console.error('Error creating campaign:', data.message);
      return;
    }

    console.log(`campaign data: ${JSON.stringify(data, null, 2)}`);
    toggle();
    router.push('/campaigns/' + data.campaign.id);
  };

  function handleSubmit(e) {
    e.preventDefault();
    createCampaign();
  }

  async function handleCampaignDelete(e, campaignId) {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:3333/api/campaign/${campaignId}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            id: campaignId,
          }),
        }
      );

      if (!response.ok) {
        console.error(`Error deleting campaign: ${response.statusText}`);
        return;
      }

      console.log(`Campaign deleted successfully.`);
      router.push('/admin');
    } catch (error) {
      console.error(`Error deleting campaign: ${error.message}`);
    }
  }

  const {
    data: campaignsData,
    error,
    // loading,
  } = useSWR<Campaign[]>('http://localhost:3333/api/campaign', fetcher);

  async function getCampaigns() {
    const res = await fetch(`http://localhost:3333/api/campaign/`);
    console.log(`http://localhost:3333/api/campaign/`);
    const data = await res.json();
    return data.data;
  }

  useEffect(() => {
    getCampaigns();
  }, []);

  if (error) {
    return <div>Error fetching campaignsData</div>;
  }

  if (!campaignsData) {
    return <div>Loading...</div>;
  }

  return (
    <ConquestLayout>
      <div className="text-xs p-12">
        {/* <pre>{JSON.stringify(campaignsData?.campaigns[0], null, 2)}</pre>
        <pre>{JSON.stringify(error ? error : 'No error', null, 2)}</pre>
        <pre>
          {JSON.stringify(
            !campaignsData ? 'Loading...' : 'Not loading',
            null,
            2
          )}
        </pre> */}
        <pre>{JSON.stringify(campaignsData, null, 2)}</pre>
      </div>
      <section className="h-screen w-full">
        <div className="container max-w-7xl mx-auto">
          <div className="space-y-2">
            <Flex className="items-center space-x-2">
              <h1>Admin</h1>
              <button onClick={toggle} className="btn-primary w-auto">
                Create Campaign
              </button>
            </Flex>
            <p>
              <span className="font-semibold">User Name,</span> {user?.email} -{' '}
              <span className="underline">Go to Profile</span>
            </p>
          </div>
          <div>
            <Flex className="items-center mt-16 mb-8">
              <h2>Campaigns</h2>
              {/* {campaignsData?campaigns?.length && <p>({campaignsData?.length})</p>} */}
            </Flex>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* {campaignsData?.campaigns.map((campaign) => (
                <div
                  key={campaign.id}
                  className={campaign.group_alive === false ? 'opacity-40' : ''}
                >
                  <div className="flex justify-end relative">
                    {campaign.group_alive === false ? (
                      <div className="border-none w-auto">
                        <FaLock />
                      </div>
                    ) : (
                      <button
                        onClick={(e) => handleCampaignDelete(e, campaign.id)}
                        className="flex items-center border-none w-auto absolute top-0"
                      >
                        <FiX size={20} />
                      </button>
                    )}
                  </div>
                  <Link href={`/campaigns/${campaign.id}`}>
                    <div className="admin-card" key={campaign.id}>
                      <h5 className="admin-card-title">{campaign.name}</h5>
                      <div className="admin-card-body">
                        <p className="admin-card-text pb-4">{campaign.notes}</p>

                        <Flex className="items-center space-x-4">
                          <Flex className="items-center space-x-2">
                            <Flex className="items-center">
                              <MdGroups3 size={24} className="mr-2" />
                              {campaign.player_count}
                            </Flex>
                          </Flex>
                          <Flex className="items-center space-x-2">
                            <Flex className="items-center">
                              <div className="w-12 bg-gray-400 rounded-full h-2.5 mr-2">
                                <div className="bg-blue-600 h-2.5 rounded-full w-4"></div>
                              </div>
                              {campaign.percentageOfAdventuringDayXpRemaining}
                            </Flex>
                          </Flex>

                          <Flex className="items-center space-x-2">
                            <Flex className="items-center">
                              <GiCampfire size={24} className="mr-2" />
                              1/3
                            </Flex>
                          </Flex>
                        </Flex>
                      </div>
                    </div>
                  </Link>
                </div>
              ))} */}
            </div>
          </div>
        </div>
      </section>
      {/* <ConquestModal isShowing={isShowing} toggle={toggle}>
        <div className="space-y-8">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 p-4 md:p-6">
              <div className="space-y-1">
                <h3>New Campaign</h3>
                <p>Campaigns can be started at level 1 or any custom level.</p>
              </div>
              <div>
                <label htmlFor="name" className="sr-only">
                  Campaign Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Campaign name"
                  className="w-full border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white text-sm px-4 rounded-t rounded-bl-none rounded-br-none"
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
                <label htmlFor="notes" className="sr-only">
                  Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  placeholder="Notes"
                  className="w-full border-t-0 border py-1 border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white text-sm px-4 rounded-bl-none rounded-br-none rounded-t-none"
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit" className="btn-primary" onClick={toggle}>
                Start Campaign
              </button>
            </div>
          </form>
        </div>
      </ConquestModal> */}
    </ConquestLayout>
  );
};

export default withAuth(Admin);
