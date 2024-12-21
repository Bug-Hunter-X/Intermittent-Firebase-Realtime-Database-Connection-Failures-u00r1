The Firebase Realtime Database sometimes throws a `DatabaseError: Connection failed.` error even when the app appears to be online and connected to the internet. This is often intermittent and difficult to reproduce consistently.  It's especially frustrating because standard network connectivity checks (like `navigator.onLine`) may report a connection, yet Firebase still fails.