# Setting up result storage (Firebase)

Your site is hosted on GitHub Pages, which only serves static files — it
can't run a server or a database itself. So the result-storage part of
this app uses **Firebase** (Google's free backend service). It works
fine sitting alongside a GitHub Pages site.

This is a one-time setup. Follow these steps in order.

## 1. Create the Firebase project
1. Go to https://console.firebase.google.com and sign in with any
   Google account.
2. Click **Add project**, give it a name (e.g. `concepts-quiz`), and
   finish the wizard (you can turn off Google Analytics, you don't
   need it).

## 2. Register a web app
1. On the project's home screen, click the **</>** (web) icon.
2. Give it a nickname (e.g. "Quiz Portal") and click **Register app**.
3. Firebase will show a code block with a `firebaseConfig` object —
   copy those values into `js/firebase-config.js` in this project,
   replacing the `"PASTE_..."` placeholders.

## 3. Turn on Firestore (the database)
1. In the left sidebar, click **Build > Firestore Database**.
2. Click **Create database**, choose **Start in production mode**,
   pick a region close to you, and finish.

## 4. Set the security rules
Still in Firestore, go to the **Rules** tab and replace the contents
with:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /results/{resultId} {
      allow create: if true;               // students can submit results
      allow read: if request.auth != null; // only the logged-in teacher can read
      allow update, delete: if false;
    }
  }
}
```

Click **Publish**.

## 5. Turn on the 10-day auto-delete (TTL policy)
1. Still in Firestore, go to the **TTL** tab (under "Indexes" area,
   sometimes labeled "Time-to-live").
2. Click **Create policy**.
3. Collection ID: `results`
4. Timestamp field: `expireAt`
5. Save.

Firestore will then automatically delete any result document once its
`expireAt` time has passed (the app sets this to 10 days after
submission). Deletion typically happens within 24 hours of expiry —
so results may occasionally still be visible for a short time after
the 10-day mark, but they will always be gone well before day 11.

## 6. Turn on Email/Password sign-in and create the teacher login
1. In the left sidebar, click **Build > Authentication**.
2. Click **Get started**, then enable the **Email/Password** provider.
3. Go to the **Users** tab and click **Add user**. Enter an email
   (it can be anything, e.g. `teacher@conceptscollege.pk`) and a
   password — this is the one shared login the teacher/operator will
   use on the "Teacher / Operator Login" page.

## 7. Done
Upload the whole project folder to GitHub (Settings > Pages, or however
you're currently publishing it). Students use the normal login. The
"Teacher / Operator Login" link on the login page opens the dashboard
where all stored results appear, filtered to whatever hasn't expired
yet.

---

### If you skip this setup
The quiz itself will still work normally for students — `storage.js`
detects that `firebase-config.js` hasn't been filled in and simply
skips saving results, instead of breaking the page.
