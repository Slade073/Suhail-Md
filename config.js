const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/South Africa";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Powered by Slade" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "27736267768";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,277xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "trye"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,277xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "27736267768,277xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_29_06_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDgsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDc4LFxuICAgICAgICAxMSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTkzLFxuICAgICAgICA5NSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMTA2LFxuICAgICAgICA0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAwLFxuICAgICAgICA5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTY5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNzksXG4gICAgICAgIDQzLFxuICAgICAgICA5NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDgwLFxuICAgICAgICA5MixcbiAgICAgICAgMzIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgNzQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjAsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTg5LFxuICAgICAgICA4NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1LFxuICAgICAgICA2MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAzNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTYsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAzOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE3LFxuICAgICAgICA1NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjU1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODEsXG4gICAgICAgIDQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTksXG4gICAgICAgIDQ3LFxuICAgICAgICAxMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTIyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjI0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAzMCxcbiAgICAgICAgNjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMixcbiAgICAgICAgNzMsXG4gICAgICAgIDksXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDkyLFxuICAgICAgICA2MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTQ5LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDkxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDg0LFxuICAgICAgICA4OCxcbiAgICAgICAgMSxcbiAgICAgICAgNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMyxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDk1LFxuICAgICAgICA0LFxuICAgICAgICAxNDksXG4gICAgICAgIDUxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDYsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDQsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjI0dzBEVWpaQzFBaCtzK2xyVDlmUXhKc0w2TWdEMWFrYUhPRmlGN0RKNW89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImRicWh6eWdhUWQtQkRDbG9MRXR6QWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYThiZTUyMmEtZTRkMi00NTg3LTkyMzEtYjA3MzUxMDdlMGYyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NyxcbiAgICAgIDIzMCxcbiAgICAgIDEwNCxcbiAgICAgIDUwLFxuICAgICAgNjcsXG4gICAgICAxMzQsXG4gICAgICA3MSxcbiAgICAgIDcyLFxuICAgICAgMjM5LFxuICAgICAgMTMwLFxuICAgICAgMzUsXG4gICAgICAyMzUsXG4gICAgICAxNzMsXG4gICAgICAxNzksXG4gICAgICAxNTQsXG4gICAgICAxNCxcbiAgICAgIDIyNCxcbiAgICAgIDQ4LFxuICAgICAgNyxcbiAgICAgIDEyMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4MixcbiAgICAgIDE3MSxcbiAgICAgIDQ1LFxuICAgICAgNCxcbiAgICAgIDIyNixcbiAgICAgIDU4LFxuICAgICAgMjE0LFxuICAgICAgMTEwLFxuICAgICAgMTc0LFxuICAgICAgMjE4LFxuICAgICAgODcsXG4gICAgICAxNDQsXG4gICAgICAyNCxcbiAgICAgIDE0OCxcbiAgICAgIDcwLFxuICAgICAgMTgsXG4gICAgICAyMTgsXG4gICAgICAxNzksXG4gICAgICA0LFxuICAgICAgNDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiS1RCQzdUM0xcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI3NzM2MjY3NzY4OjUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4oCUSGVyIE1hbnpcIixcbiAgICBcImxpZFwiOiBcIjg4ODIzNjE0OTU4MDc6NTBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEdnNWg4UThQL3Bzd1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJReUZYb2ZtMjRDQVRVSStPUGpXTmdQTDdLYWVNcUJ6OTh5WFVwbmFLelE0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIitrQS9SeVRRNlhYSE5JaENsUnZyNTlGb0JKd3lrcStJTFM2LzV5SWNCc3RsemR3cGtIbHNSUzhtclh0S241Ly92QWp6ajFBSHN6eFNGS3o3NjZIUkR3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVTbjlzNlY5V0tFYVBRQUtzOEJ1eHZFdDNDbFhxbmtkdFQwd2NKelpuSWRaNlhsdDg1MnJCUkJ1TGlUZ3ZDeEVua3NieWtJcnVKc0hzZlpBWk1aSmlnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI3NzM2MjY3NzY4OjUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MzA0MTgwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRzlXXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHOVcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJHTE9WS2VCZ0ErYjNQSkExTU8vRGd4Rk9pL2hTVmpjZ0VkTEJpcnNFWjBjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY2Njg3MDg4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzE5MzAzMTMwMDk3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "-",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "Powered by Slade", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Tsepo",
  packname: process.env.PACK_NAME || "Slade is being weird again",
  botname : process.env.BOT_NAME  || "☆Slade☆",
  ownername:process.env.OWNER_NAME|| "Tsepo Mohlomi",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
