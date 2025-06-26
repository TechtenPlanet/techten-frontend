# TechTen Frontend

This is the frontend for the TechTen website, built with React.

## Firebase Integration

This project uses Firebase for backend functionality. The integration includes:

### Payment Processing

- Firebase Firestore for storing donation data
- Firebase Cloud Functions for handling Mollie API calls
- Firebase Hosting for deploying the website

### Form Submissions

- Firebase Firestore for storing form submissions (contact forms, volunteer applications, partnership requests, course enrollments)
- Firebase Cloud Functions for sending email notifications when forms are submitted
- Secure form submission handling with Firestore security rules

### Setup

1. Install the Firebase CLI:
   ```
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```
   firebase login
   ```

3. Set up the Mollie API key:
   ```
   firebase functions:config:set mollie.api_key="YOUR_MOLLIE_API_KEY"
   ```

4. Deploy the Firebase project:
   ```
   firebase deploy
   ```

### Local Development

To run the Firebase emulators locally:

```
firebase emulators:start
```

To run the React development server:

```
npm start
```

### Environment Variables

The following environment variables are required for the Firebase integration:

```
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
```

These can be found in the Firebase console under Project Settings > General > Your apps > Firebase SDK snippet.

### Email Notifications

To enable email notifications for form submissions, you need to set up the following Firebase config variables:

```
firebase functions:config:set email.user="your-email@gmail.com"
firebase functions:config:set email.password="your-app-password"
firebase functions:config:set email.notifications="notifications@yourdomain.com"
```

Note: For Gmail, you'll need to use an App Password rather than your regular password. You can generate one at https://myaccount.google.com/apppasswords.

### Mollie Webhook

The Mollie webhook is set up to handle payment status updates. The webhook URL is:

```
https://YOUR_FIREBASE_PROJECT_ID.web.app/mollieWebhook
```

This should be configured in your Mollie dashboard.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time.
