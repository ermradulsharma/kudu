const { app } = require('electron');
app.whenReady().then(() => {
  console.log("Ready");
  app.exit(0);
});
