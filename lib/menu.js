const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textTnC = () => {
    return `
Source code / bot ini merupakan program open-source (gratis) yang ditulis menggunakan Javascript, kamu dapat menggunakan, menyalin, memodifikasi, menggabungkan, menerbitkan, mendistribusikan, mensublisensikan, dan atau menjual salinan dengan tanpa menghapus author utama dari source code / bot ini.

Dengan menggunakan source code / bot ini maka anda setuju dengan Syarat dan Kondisi sebagai berikut:
- Source code / bot tidak menyimpan data anda di server kami.
- Source code / bot tidak bertanggung jawab atas perintah anda kepada bot ini.
- Source code / bot anda bisa lihat di https://github.com/KingIdBot/MRKINGNEW

Instagram: [TIDAK TERSEDIA]

Best regards, MR ᭄KINGツ.`
}

/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textMenu = (pushname) => {
    return `
Hi, ${pushname}! 👋️
Berikut adalah beberapa fitur yang ada pada bot ini!✨

  ╭─────────────────
  ║╭─────────────────
  ║╠➣  *Mℛ ᭄KINGツ
  ║╰───────────────── 
  ║╭───〘 *INFO*  〙─────
  ║╠-❥ *Mℛ ᭄KINGツ* *Versi 9.9*
  ║╠-❥ *Owner : TANPA NAMA*
  ║╠-❥ *Link* : wa.me/+1(831)353-5216
  ║╠--❥ *Prefix : 「#」*
  ║╠-❥ *Total Pengguna : 9999*   
  ║╰────────────────
  ║╭────「 Creator 」────
  ║╠--❥ *${prefix}cooltext*
  ║╠--❥ *${prefix}logopornhub*
  ║╠--❥ *${prefix}sticker*
  ║╠--❥ *${prefix}stickergif*
  ║╠--❥ *${prefix}stickergiphy*
  ║╠--❥ *${prefix}meme*
  ║╠--❥ *${prefix}quotemaker*
  ║╠--❥ *${prefix}nulis*
  ║╰───────────────
  ║
  ║╭────「 Islam 」────:
  ║╠--❥ *${prefix}infosurah*
  ║╠--❥ *${prefix}surah*
  ║╠--❥ *${prefix}tafsir*
  ║╠--❥ *${prefix}ALaudio*
  ║╠--❥ *${prefix}jsolat*
  ║╰───────────────
  ║
  ║╭────「 18 + 」────:
  ║╠---❥ *${prefix}nekopoi*
  ║╰───────────────
  ║
  ║╭─「 Fun Menu (Group)」─
  ║╠---❥ *${prefix}simisimi*
  ║╠---❥ *${prefix}katakasar*
  ║╠---❥ *${prefix}klasmen*
  ║╰───────────────
  ║
  ║╭────「Download」────
  ║╠---❥ *${prefix}ytmp3*
  ║╠---❥ *${prefix}ytmp4*
  ║╠---❥ *${prefix}facebook*
  ║╰───────────────
  ║
  ║╭────「Primbon」────
  ║╠--❥ *${prefix}cekzodiak*
  ║╠--❥ *${prefix}artinama*
  ║╠--❥ *${prefix}cekjodoh*
  ║╰───────────────
  ║╭────「Search Any」────
  ║╠--❥ *${prefix}dewabatch*
  ║╠--❥ *${prefix}images*
  ║╠--❥ *${prefix}sreddit*
  ║╠--❥ *${prefix}resep*
  ║╠--❥ *${prefix}stalkig*
  ║╠--❥ *${prefix}wiki*
  ║╠--❥ *${prefix}cuaca*
  ║╠--❥ *${prefix}chord*
  ║╠--❥ *${prefix}lirik*
  ║╠--❥ *${prefix}ss*
  ║╠--❥ *${prefix}play*
  ║╠--❥ *${prefix}movie*
  ║╠--❥ *${prefix}whatanime*
  ║╰─────────────── 
  ║
  ║╭────「Random Teks」────
  ║╠--❥ *${prefix}motivasi*
  ║╠--❥ *${prefix}howgay*
  ║╠--❥ *${prefix}fakta*
  ║╠--❥ *${prefix}pantun*
  ║╠--❥ *${prefix}katabijak*
  ║╠--❥ *${prefix}quote*
  ║╠--❥ *${prefix}cerpen*
  ║╠--❥ *${prefix}cersex*
  ║╠--❥ *${prefix}puisi*
  ║╰─────────────── 
  ║
  ║╭──「Random Images」──
  ║╠-❥ *${prefix}anime*
  ║╠-❥ *${prefix}kpop*
  ║╠-❥ *${prefix}memes*
  ║╰─────────────── 
  ║
  ║╭────「Lain-lain:」──
  ║╠-❥ *${prefix}tts*
  ║╠-❥ *${prefix}translate*
  ║╠-❥ *${prefix}resi*
  ║╠-❥ *${prefix}covidindo*
  ║╠-❥ *${prefix}ceklokasi*
  ║╠-❥ *${prefix}shortlink*
  ║╠-❥ *${prefix}bapakfont*
  ║╠-❥ *${prefix}hilihfont*
  ║╠-❥ *${prefix}grouplink*
  ║╠-❥ *${prefix}revoke*
  ║╰─────────────── 
  ║
  ║╭────「Tentang Bot:」──
  ║╠-❥ *${prefix}tnc*
  ║╠-❥ *${prefix}donasi*
  ║╠-❥ *${prefix}botstat*
  ║╠-❥ *${prefix}ownerbot*
  ║╠-❥ *${prefix}join*
  ║╰─────────────── 
  ║  
  ║╭────「Owner Bot:」──
  ║╠-❥ *${prefix}ban* - banned
  ║╠-❥ *${prefix}bc* - promosi
  ║╠-❥ *${prefix}leaveall* - keluar semua grup
  ║╠-❥ *${prefix}clearall* - hapus semua chat
  ║╰─────────────── 
  ║  
  ║╭──[ Admin Group Only ]──
  ║╠-❥ *${prefix}add*
  ║╠-❥ *${prefix}kick* @tag
  ║╠-❥ *${prefix}promote* @tag
  ║╠-❥ *${prefix}demote* @tag
  ║╠-❥ *${prefix}mutegrup*
  ║╠-❥ *${prefix}tagall*
  ║╠-❥ *${prefix}setprofile*
  ║╠-❥ *${prefix}del*
  ║╠-❥ *${prefix}welcome*
  ║╰─────────────── 
  ║
  ║╭───[ Owner Group Only ]──
  ║╠-❥ *${prefix}kickall*
  ║╰─────────────── 
  ║
  ║╭─────CONTATO─────
  ║╠➣ Name : *Mℛ ᭄KINGツ*
  ║╠➣Coded using *Nano* on Android \\w
  ║║Termux
  ║╠➣ Request? Wa.me/+1 (831) 353-5216
  ║║  Cara Tambah XP:
  ║╠➣ +1 Exp/pesan biasa
  ║║  +10 Exp/command
  ║╠════
  ║║Advanced:
  ║║> return m
  ║╰─────────────────
  ║
  ┗━┅┅┄┄⟞⟦ *Mℛ ᭄KINGツ* ⟧⟝┄┄┉┉━┛`
}  
/*

Dimohon untuk tidak menghapus link github saya, butuh support dari kalian! makasih.

*/

exports.textDonasi = () => {
    return `
Hai, terimakasih telah menggunakan bot ini

Doakan agar project bot ini bisa terus berkembang
Doakan agar author bot ini dapat ide-ide yang kreatif lagi

Donasi akan digunakan untuk pengembangan dan pengoperasian bot ini.

Terimakasih`
}
