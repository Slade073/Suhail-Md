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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_27_06_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDgsXG4gICAgICAgIDY0LFxuICAgICAgICA4MixcbiAgICAgICAgNDgsXG4gICAgICAgIDU0LFxuICAgICAgICA4MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDQ5LFxuICAgICAgICA5LFxuICAgICAgICAxODQsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDIsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTEsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDk4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwMixcbiAgICAgICAgNDYsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDk1LFxuICAgICAgICAzMixcbiAgICAgICAgNzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDYwLFxuICAgICAgICAyNixcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOCxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjIxLFxuICAgICAgICA0OSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMzEsXG4gICAgICAgIDkwLFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MyxcbiAgICAgICAgODUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4LFxuICAgICAgICA3OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAzLFxuICAgICAgICA1MCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjksXG4gICAgICAgIDIzMixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODAsXG4gICAgICAgIDExMixcbiAgICAgICAgMTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDc2LFxuICAgICAgICA0NSxcbiAgICAgICAgMjUxLFxuICAgICAgICA3NixcbiAgICAgICAgMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDgyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTEwLFxuICAgICAgICA3NixcbiAgICAgICAgNixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDEwNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjksXG4gICAgICAgIDg5LFxuICAgICAgICAxOTksXG4gICAgICAgIDQ1LFxuICAgICAgICAzNCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjMxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDYyLFxuICAgICAgICA1MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTcxLFxuICAgICAgICA5NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxODAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDksXG4gICAgICAgIDU3LFxuICAgICAgICAxMzksXG4gICAgICAgIDY4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjI1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTc5LFxuICAgICAgICA4MSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjksXG4gICAgICAgIDg5LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjQyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDY4LFxuICAgICAgICA0MixcbiAgICAgICAgMTI0LFxuICAgICAgICAxNixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDcsXG4gICAgICAgIDI3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTU4LFxuICAgICAgICA3NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicGRUbVROd2ZkUHAydjRSSkZHWUlKYzJIZmdNTDlWOEQ5Qk9OTWYveXhZcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNzczNjI2Nzc2OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiRDhBNzEwNjY3NEU4MDA3QkIwMjdFQkFDRkI5NURDRDJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE5MjM5Mjc0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkdKemZCeFhSU1pLNFI4N1NHbXpzMlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjhkY2U1ZWMtNTI4Zi00MWMwLWIyZjEtNjE2ZjQ1ODc2Y2EzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNSxcbiAgICAgIDE4MixcbiAgICAgIDE2OCxcbiAgICAgIDE2OCxcbiAgICAgIDE1NCxcbiAgICAgIDE4NixcbiAgICAgIDk4LFxuICAgICAgMzgsXG4gICAgICAxMjksXG4gICAgICAxMDIsXG4gICAgICAxMjEsXG4gICAgICA5NixcbiAgICAgIDUwLFxuICAgICAgMjIzLFxuICAgICAgMTg5LFxuICAgICAgMjcsXG4gICAgICAxODksXG4gICAgICAxNTYsXG4gICAgICA3NixcbiAgICAgIDEyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjcsXG4gICAgICAxMDksXG4gICAgICAxMjQsXG4gICAgICAxMDIsXG4gICAgICAxMixcbiAgICAgIDIyNixcbiAgICAgIDE3MSxcbiAgICAgIDIyNixcbiAgICAgIDE3NyxcbiAgICAgIDE5NixcbiAgICAgIDQzLFxuICAgICAgMjIzLFxuICAgICAgMTg4LFxuICAgICAgNjMsXG4gICAgICAxNzcsXG4gICAgICA3OSxcbiAgICAgIDEwMCxcbiAgICAgIDI0MCxcbiAgICAgIDM0LFxuICAgICAgMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVzZZWkFDUk5cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI3NzM2MjY3NzY4OjQ5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4oCUSGVyIE1hbnpcIixcbiAgICBcImxpZFwiOiBcIjg4ODIzNjE0OTU4MDc6NDlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUENnNWg4UTNvVG1zd1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJReUZYb2ZtMjRDQVRVSStPUGpXTmdQTDdLYWVNcUJ6OTh5WFVwbmFLelE0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlF2TmhOMnlUMUtSdTJCUzZiUW1wVXR4QnpubUtmUjgrQzcvTC9FY1VRdWs4ZDBYbXg2T3pNMC96M29BNWdGRHBQY0xyK3o1ZmZMSVpMeGxZeXBTcURnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImFtTEJHWGlLUDgwb3hXYU9Sd2dYT1RSUmdQemNWc25SUUNGYUV5UWRMeXBaN2pYTzY2NkVkNzBSMzVpOVorSnlBL2lOcEdKeERuaTR6LzNHSnU2V2hBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI3NzM2MjY3NzY4OjQ5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MjM5MjY3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRzlWXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHOVYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJRbEdOZmFLRlExQ3A0V2Vxb1BZZDJmZUVvQWJORTFPNHZLOG9HT282T1Q4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY2Njg3MDg4LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkyMzkyNzAzMTJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "-",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
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
