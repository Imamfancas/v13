//Ubah Image/Thumbnail di folder maslent/pplent/maslent.png (Cari fotomu Ubah namnya ganti jadi maslent.png trus di gantu make pp mu yang baru
const fs = require('fs')
const chalk = require('chalk')
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'
//==============================\
///Gantien dewe sak karepmu..,
global.pulsa = "6285813601701"
global.gopay = "6285813601701"
global.dana = "6285813601701"
global.packname = 'ImamFS'
global.footer = '©Maslent'
global.ovo = "6285813601701"
global.ownerlen = "Imam Fanca Saputra"//Ubah
global.owner = ['6285813601701'] //ubh nomor owner hp
global.ownername = "Imam Fanca Saputra" //ubah
global.ytname = "YT: lenttobs"//ubah
global.socialm = "IG: vlntncptr"//ubah
global.location = "Indonesia, Jawatimur, Lumajang"//ubah
global.ownernomer = "6285813601701"//ubah nomorhp owner
global.premium = ['6285813601701']//ubah nomor hp premium
global.botname = 'BotIm' //ubah
global.linkz = "https://chat.LINK BOKEP/LINKGC WA"//ubah
global.websitex = "yt mu"//ubah
global.botscript = '-'
global.themeemoji = "😿"//ubah
global.packname = "Sticker By BotIm"//ubah
global.author = "Made by BotIm"//ubah
global.wm = "BotIm"//ubah
global.sessionName = 'session'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'Oke', //isien dewe Gantien bahasane Muales pol aku sak karepmu 
    admin: 'This feature could be used by admins only!',
    botAdmin: 'Bot Must Be Admin First!',
    premime: 'Premium Special Features If You Want to Register Type Rent',
    owner: 'This feature could be used by owner only',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature could be used by bot only',
    wait: 'In process...',
    linkm: 'Where is the link?',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
}
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.thum = fs.readFileSync("./Maslent/pplent/maslent.jpg")
global.log0 = fs.readFileSync("./Maslent/pplent/maslent.jpg")
global.err4r = fs.readFileSync("./Maslent/pplent/maslent.jpg")
global.thumb = fs.readFileSync("./Maslent/pplent/maslent.jpg")
    global.limitawal = {
    premium: "Infinity",
    free: 12, // limit awall 
    monayawal: 1000
}
global.limitAwal = {
 prem: 'Unlimited',
 free: 70
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}
global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
