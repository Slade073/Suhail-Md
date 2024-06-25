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
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 

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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_46_06_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDYwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjExLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTEyLFxuICAgICAgICAzNixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTEyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjEyLFxuICAgICAgICA4MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjMxLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAzMCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjIxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTIwLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDI1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTA4LFxuICAgICAgICA4MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTk2LFxuICAgICAgICA3MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAzMixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDcsXG4gICAgICAgIDE3LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDUxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMzcsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTEwLFxuICAgICAgICAzNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTIyLFxuICAgICAgICA5OCxcbiAgICAgICAgNSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzksXG4gICAgICAgIDYzLFxuICAgICAgICAxNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDI5LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTksXG4gICAgICAgIDI2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNixcbiAgICAgICAgMTczLFxuICAgICAgICA0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY4LFxuICAgICAgICA0NixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMjFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDYxLFxuICAgICAgICAxODAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgOSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjMwLFxuICAgICAgICA5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTY3LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk5LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDMwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgOSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDksXG4gICAgICAgIDY4LFxuICAgICAgICA3NixcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNixcbiAgICAgICAgNzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTkwLFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTYzLFxuICAgICAgICA4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJNUFo1Z3REdUJKLzFiRUFncDU0dEx0QnJOcVd0aUU5ZXhCamNGYmpMTjV3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJReEpweU1ENFN0S3c2X0lUMnhHeEZ3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjlmM2UwOGU1LWQ1NjAtNGVlOS1iOTQyLThkNmE3NDUxOTg4YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzgsXG4gICAgICAxNTYsXG4gICAgICAxOSxcbiAgICAgIDEzMCxcbiAgICAgIDEyLFxuICAgICAgMTIyLFxuICAgICAgMjQ1LFxuICAgICAgNzgsXG4gICAgICAxMDQsXG4gICAgICAxNTEsXG4gICAgICAxNDMsXG4gICAgICA4NyxcbiAgICAgIDIwNyxcbiAgICAgIDg0LFxuICAgICAgMTAxLFxuICAgICAgMTIzLFxuICAgICAgMjAsXG4gICAgICAyNDEsXG4gICAgICAxNzksXG4gICAgICAyMzBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTM2LFxuICAgICAgMTgwLFxuICAgICAgMTk3LFxuICAgICAgMjM5LFxuICAgICAgNjEsXG4gICAgICA3NSxcbiAgICAgIDEyOSxcbiAgICAgIDEyNixcbiAgICAgIDg5LFxuICAgICAgMjYsXG4gICAgICAxMCxcbiAgICAgIDE2MyxcbiAgICAgIDYzLFxuICAgICAgMTY0LFxuICAgICAgMzAsXG4gICAgICAyMjgsXG4gICAgICA3MixcbiAgICAgIDE2NCxcbiAgICAgIDgwLFxuICAgICAgNzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWEdMNzVFVzJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI3NzM2MjY3NzY4OjUxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi4oCUSGVyIE1hbnpcIixcbiAgICBcImxpZFwiOiBcIjg4ODIzNjE0OTU4MDc6NTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEtnNWg4UTVvZnFzd1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJReUZYb2ZtMjRDQVRVSStPUGpXTmdQTDdLYWVNcUJ6OTh5WFVwbmFLelE0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm8xTDVHTG42SXdoNVA1M1FncWlKUXhYNG5vbzRQQldJL1RSYnVoOWFlUW1vOXpIMmtNT054MHV0NDMzVmpsN0hWeEUyeHBoWVhnNnE2d3hKV0RYd0RRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIldJcWF1blRNc0lDUTZ4MGJreDFvRU9CZmZWTXBzbE1JWDQwM28wdUJNYTUxdGhBd2FPLzJraDRkMHpHaHd0dTRtd2VUL1laMTBCZERnbm1LVzVsSkNBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI3NzM2MjY3NzY4OjUxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5MzA1MTk0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRzlYXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHOVguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVZWFuWi9lVFJkRnRQc0M4V2FBang5dHlreXlmUzNPL09UU3BrREprZjlFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY2Njg3MDg5LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "-",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
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
