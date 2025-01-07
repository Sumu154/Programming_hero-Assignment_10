import React, { createContext, useState } from 'react';



export const CampaignContext = createContext();
const CampaignProvider = ( {children} ) => {
  const [ campaigns, setCampaigns ] = useState([]);

  
  return (
    <div>
      <CampaignContext.Provider value={ {campaigns, setCampaigns} }>
        { children }
      </CampaignContext.Provider>
    </div>
  );
};

export default CampaignProvider;