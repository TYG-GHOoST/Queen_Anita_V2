//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "2347040463391";
global.owner = process.env.OWNER_NUMBER || "2347040463391";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0YxNnB2c05rSWZPYVFMRElsb3NOSGpJR250QmZDOTRnbHdISmg5ZkExWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidmlSa0w3T1d1NEg1bUtSZEYxQVRpbHBYaXczQ1UwbXJFTGx4WEtsMHEzTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHSlNZLzBMKzFsUHA2SDFaMlhlbU9xZGkzcSswUE5lSFREMVRucVFDZDBNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6ZC9GVDkydGIvY0tsRHZTRmFnaDdKTWhVZHVlWS9zdkhxeEl0TDRWWkNvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNGSGN4WCtWbEE3VU45T3p5bVVLMU9BTG4vYjFhb1lDT0x3aldDUEoyMG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpVdmtFTVVzcjhtN0VHVnhWdXk1akI2R2UxSEptUWx0aURldXVFRVl0U0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUZSdHhCcXZycTFLWUJOMWk5Z1BlVWw0TllCZFpNdHBaYjYvUVFMY3lFOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU1sN3dhNDFqbE1BcUszZWowWG1CRTV3VzlPenVtRXVGblFBckpUZk1Wdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhZU2Y2OFdIK1g1YWlnRk8zRVBuT01UQkxQR1pLMzFBOEd0eWY3RXhkM3dJRGZiL0ZUbzBqSEpzVGp6c3llYWVacEdzWlhaUlp1RXNDd1luZ1B1amhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk3LCJhZHZTZWNyZXRLZXkiOiI3SGI3OUs1Q1A4Tm5QZHYxdTVxQmtSQitkenZWa2s3NFdEV2tUR2xqR1VnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6NjEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo2MSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJUUWVselhUMFNNNkViRkd6TVZoNTV3IiwicGhvbmVJZCI6IjRhMzA2YmMwLTg2ZmEtNGQ0YS1iODY4LTFhODM0MjUzMTQyOSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPOWk3RHNGZEI2VG5RTjArbWRVSmRVTU5UTFk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSGdrVndvaHNnTDlBbnRwL0loQmt1VmNPSGVnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik4zMzY5TDJNIiwibWUiOnsiaWQiOiIyMzQ3MDQwNDYzMzkxOjgyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlRZRyDDl82cw5cgR0hPU1Q/wr9ZVPCTg7UifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0tEUm1SMFF1cHVNdWdZWUd5QUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjE1RXlMeGdkUngzZTUzc0hVeDdod01tRE94b2owT2hYaytwVnc1VU5IRG89IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik9RT2lBRkt3LzdoaVRzajh5aVhLY05HdzNreTRiWUpSaXlBTU9WMTllZ003RisyMllkVE1RWW1oZ1VNTjg3djVQckp2aEtxSnYxOENQWnBYR0ppc0NnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJqWnJMeDV0T2ttN0tYQ015UG5ITE1iUlBDVWZoc01SdTQzQ3h3QUxGd2hvOE1jUnN6TU9LUExaay9yNENSS0JOazZKTWZ3cE10TjFjaVRxK293WENqUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwNDA0NjMzOTE6ODJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZGVSTWk4WUhVY2QzdWQ3QjFNZTRjREpnenNhSTlEb1Y1UHFWY09WRFJ3NiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMjQ0NzY5NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFMeE0ifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
