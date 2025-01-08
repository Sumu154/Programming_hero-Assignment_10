# Crowdcube: A Crowd Funding Application
Crowdcube is a crowdfunding platform that enables users to create, manage, and donate to various campaigns. It allows users to raise money for personal needs, creative ideas, or startups.


Live website link [here](crowd-funding-b838b.web.app)


## Features
1. **Authentication**:
   - Email-password-based login and registration.
   - Google login integration.
   - Conditional rendering of login/logout buttons based on user authentication.

2. **Dynamic Pages**:
   - **Home Page**: Includes a banner/slider, running campaigns, and extra informational sections.
   - **All Campaigns**: Displays all campaigns in a sortable table.
   - **Add Campaign**: Private route for creating new campaigns.
   - **My Campaigns**: Private route displaying user-specific campaigns with update and delete options.
   - **Campaign Details**: Displays campaign details with donation functionality.
   - **My Donations**: Private route showing campaigns the user has donated to.

3. **Core Functionalities**:
   - Add, update, and delete campaigns.
   - Sort campaigns by minimum donation amount.
   - Prevent donations to expired campaigns.

4. **Interactive Design**:
   - Dark/light theme toggle.
   - Loading spinners during data fetch operations.
   - Custom modals and toasts for error and success messages.

5. **Responsiveness**:
   - Fully responsive design for mobile, tablet, and desktop views.

## Technologies Used
- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: Firebase
- **Hosting**: Netlify (client-side), Vercel (server-side)
- **Additional Libraries**: 
  - `React-simple-typewriter` for text effects
  - `React Awesome Reveal` for animations

## Environment Variables
To ensure security, sensitive data such as Firebase config keys and MongoDB credentials are stored in environment variables.



## Challenges
- Implemented dark/light theme toggle.
- Integrated advanced animations with Lottie React and React Awesome Reveal.
- Added custom error and success toasts.

