//import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch, rmSync, promises as fs} from "fs"
import path, { join } from 'path'
const { useMultiFileAuthState, DisconnectReason } = await import("@adiwajshing/baileys")
import qrcode from "qrcode"
import fs from "fs"
import P from 'pino';
import * as ws from 'ws';
const { child, spawn, exec } = await import('child_process');
const { CONNECTING } = ws
import { makeWASocket, protoType, serialize } from '../lib/simple.js';
function _0x5b0e(){const _0x512713=['NzZjM2ZmMzU2MTEyMzM3OTczOWU5ZmFmMDZjYzUzO','NjBhZGVmZWI4N2M2','SBpbmZvLWRvbmFyLmpz','14ZjBnzI','smsIniJadi','374814hFHKzm','A7IG1kNXN1b','ZThkMmNkOGVlMDFmZD','8tCvgDn','log','3340912jEzSit','21615583kKKIaQ','IF9hdXRvcmVzcG9uZGVyLmpzIGluZm8tYm90Lmpz','NjNmYmJjYzA1YmFiY2MzZGU4MGRlICBpbmZvLWJvdC5qcwo','UzYTI1MTQgIGluZ','1593387iFXrHJ','438mIkRMD','CkphZGlib3QsIEhlY2hv','5MlgcZP','9121KEWuUH','conns','m8tZG9uYXIuanMK','763346jecDRd','7941630IkXPsf'];_0x5b0e=function(){return _0x512713;};return _0x5b0e();}function _0x4c81(_0x604673,_0x370ac2){const _0x5b0e31=_0x5b0e();return _0x4c81=function(_0x4c81ce,_0x5a5d02){_0x4c81ce=_0x4c81ce-0x1a1;let _0xc7d7b9=_0x5b0e31[_0x4c81ce];return _0xc7d7b9;},_0x4c81(_0x604673,_0x370ac2);}const _0x5191f5=_0x4c81;(function(_0x61451,_0x58b206){const _0x443473=_0x4c81,_0x29012a=_0x61451();while(!![]){try{const _0x581865=-parseInt(_0x443473(0x1b8))/0x1+-parseInt(_0x443473(0x1a5))/0x2*(parseInt(_0x443473(0x1a7))/0x3)+parseInt(_0x443473(0x1ac))/0x4*(parseInt(_0x443473(0x1b4))/0x5)+parseInt(_0x443473(0x1b2))/0x6*(-parseInt(_0x443473(0x1b5))/0x7)+parseInt(_0x443473(0x1aa))/0x8*(parseInt(_0x443473(0x1b1))/0x9)+-parseInt(_0x443473(0x1a1))/0xa+parseInt(_0x443473(0x1ad))/0xb;if(_0x581865===_0x58b206)break;else _0x29012a['push'](_0x29012a['shift']());}catch(_0x18f8a9){_0x29012a['push'](_0x29012a['shift']());}}}(_0x5b0e,0x6de52));let check1=_0x5191f5(0x1a3),check2=_0x5191f5(0x1a9),check3=_0x5191f5(0x1b0),check4=_0x5191f5(0x1b7),check5=_0x5191f5(0x1a2),check6='DcgIF9hdXRvcmVzcG9uZGVyLmpzCjU5Yzc0ZjFjNmEz',check8=_0x5191f5(0x1af),crm1='Y2QgcGx1Z2lucy',crm2=_0x5191f5(0x1a8),crm3=_0x5191f5(0x1a4),crm4=_0x5191f5(0x1ae),drm1=_0x5191f5(0x1b3),drm2='IHBvciBAQWlkZW5fTm90TG9naWM',rtx=''+lenguajeGB[_0x5191f5(0x1a6)]();if(global[_0x5191f5(0x1b6)]instanceof Array)console[_0x5191f5(0x1ab)]();else global[_0x5191f5(0x1b6)]=[];

let handler = async (m, { conn, command, usedPrefix, args, text, isOwner }) => {
const isCommand1 = /^(jadibot|serbot|getcode|rentbot)$/i.test(command)  
const isCommand2 = /^(deletesesion|eliminarsesion|borrarsesion|delsesion|cerrarsesion)$/i.test(command)  
const isCommand3 = /^(berhenti|stopsb|detenersb)$/i.test(command)  
const isCommand4 = /^(listjadibot|bots|subsbots|subbots)$/i.test(command)  

async function reportError(e) {
await m.reply(lenguajeGB['smsMalError3']() + '\n*' + lenguajeGB.smsMensError1() + '*\n*' + usedPrefix + `${lenguajeGB.lenguaje() == 'es' ? 'reporte' : 'report'}` + '* ' + `${lenguajeGB.smsMensError2()} ` + usedPrefix + command)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
}
  
switch (true) {     
case isCommand1:
if (m.chat.type === "private") {
const _0x39dddd=_0x3aa1;(function(_0x742708,_0x39eab4){const _0x2a0edf=_0x3aa1,_0x27f4ce=_0x742708();while(!![]){try{const _0x36996b=parseInt(_0x2a0edf(0x19a))/0x1*(parseInt(_0x2a0edf(0x17c))/0x2)+parseInt(_0x2a0edf(0x197))/0x3*(parseInt(_0x2a0edf(0x16e))/0x4)+-parseInt(_0x2a0edf(0x1aa))/0x5*(-parseInt(_0x2a0edf(0x169))/0x6)+-parseInt(_0x2a0edf(0x194))/0x7+parseInt(_0x2a0edf(0x18a))/0x8*(parseInt(_0x2a0edf(0x16a))/0x9)+-parseInt(_0x2a0edf(0x181))/0xa+-parseInt(_0x2a0edf(0x168))/0xb;if(_0x36996b===_0x39eab4)break;else _0x27f4ce['push'](_0x27f4ce['shift']());}catch(_0x576c65){_0x27f4ce['push'](_0x27f4ce['shift']());}}}(_0x296b,0xf1bc5));function _0x296b(){const _0x40e819=['toBuffer','2117546ufrqTy','log','base64','loggedOut','reply','2708300SpCtUE','splice','utf-8','handler','mkdirSync','readFileSync','catch','from','./GataJadiBot/','2598128Fwqszd','mentionedJid','smsJBInfo1','payload','close','onCall','groups.update','smsJBConexion','jid','connectionClosed','1952461jOIoNb','&text=','smsJBCargando','1442283zwzecq','group-participants.update','removeAllListeners','1FbZOTk','creds.update','bind','sender','silent','off','messages.upsert','split','/creds.json','error','readyState','GataBotLite-MD\x20(SUB\x20BOT)','groupsUpdate','sendMessage','deleteUpdate','open','261485AGlumR','toString','message.delete','connection.update','participantsUpdate','keys','smsJBConexionTrue','conn','call','&type=phone_number&app_absent=0','user','parse','settings','smsJBConexionClose','18292813navxKc','6IbGkfF','18dAKslW','isInit','data','chat','12SKSVuC','credsUpdate','Safari','smsJBInfo2','getRandom','indexOf','9.7.0','connectionUpdate','now','statusCode','jadibotmd','conns','output'];_0x296b=function(){return _0x40e819;};return _0x296b();}function _0x3aa1(_0x4c1bdb,_0x58ff4c){const _0x296ba8=_0x296b();return _0x3aa1=function(_0x3aa18b,_0x5a4f0b){_0x3aa18b=_0x3aa18b-0x162;let _0x3c7f17=_0x296ba8[_0x3aa18b];return _0x3c7f17;},_0x3aa1(_0x4c1bdb,_0x58ff4c);}if(!global['db'][_0x39dddd(0x16c)][_0x39dddd(0x166)][conn[_0x39dddd(0x164)][_0x39dddd(0x192)]][_0x39dddd(0x178)])throw''+lenguajeGB['smsSoloOwnerJB']();let parentw=conn;if(conn[_0x39dddd(0x164)][_0x39dddd(0x192)]!==global[_0x39dddd(0x1b1)]['user']['jid'])return parentw[_0x39dddd(0x180)](m['chat'],lenguajeGB['smsJBPrincipal']()+'https://api.whatsapp.com/send/?phone='+global['conn'][_0x39dddd(0x164)][_0x39dddd(0x192)]['split']`@`[0x0]+_0x39dddd(0x195)+(usedPrefix+command)+_0x39dddd(0x163),m);const comb=Buffer[_0x39dddd(0x188)](crm1+crm2+crm3+crm4,_0x39dddd(0x17e));exec(comb[_0x39dddd(0x1ab)]('utf-8'),async(_0x321018,_0x405d17,_0x3b0ee8)=>{const _0x3b169e=_0x39dddd,_0x17af6b=Buffer[_0x3b169e(0x188)](drm1+drm2,_0x3b169e(0x17e));async function _0x47a90f(){const _0x346cd2=_0x3b169e;let _0xae9f22=m[_0x346cd2(0x18b)]&&m['mentionedJid'][0x0]?m[_0x346cd2(0x18b)][0x0]:m['fromMe']?parentw[_0x346cd2(0x164)][_0x346cd2(0x192)]:m[_0x346cd2(0x19d)],_0x1b5546=''+_0xae9f22[_0x346cd2(0x1a1)]`@`[0x0];!fs['existsSync'](_0x346cd2(0x189)+_0x1b5546)&&fs[_0x346cd2(0x185)](_0x346cd2(0x189)+_0x1b5546,{'recursive':!![]});args[0x0]?fs['writeFileSync'](_0x346cd2(0x189)+_0x1b5546+_0x346cd2(0x1a2),JSON['stringify'](JSON[_0x346cd2(0x165)](Buffer[_0x346cd2(0x188)](args[0x0],_0x346cd2(0x17e))[_0x346cd2(0x1ab)]('utf-8')),null,'\x09')):'';const {state:_0x2a3a3b,saveState:_0x3dc327,saveCreds:_0x47b2b9}=await useMultiFileAuthState(_0x346cd2(0x189)+_0x1b5546),_0x4157e5={'printQRInTerminal':!![],'auth':_0x2a3a3b,'logger':P({'level':_0x346cd2(0x19e)}),'browser':[_0x346cd2(0x1a5),_0x346cd2(0x170),_0x346cd2(0x174)]};let _0x2eba9b=makeWASocket(_0x4157e5);_0x2eba9b['isInit']=![];let _0x2d861f=!![];async function _0x1f790f(_0x3108fb){const _0x322d74=_0x346cd2,{connection:_0x2d9ff1,lastDisconnect:_0x1bf1a3,isNewLogin:_0x28659b,qr:_0x4e7cbd}=_0x3108fb;if(_0x28659b)_0x2eba9b[_0x322d74(0x16b)]=![];if(_0x4e7cbd)parentw[_0x322d74(0x1a7)](m[_0x322d74(0x16d)],{'image':await qrcode[_0x322d74(0x17b)](_0x4e7cbd,{'scale':0x8}),'caption':rtx},{'quoted':m});const _0x5cc2d5=_0x1bf1a3?.['error']?.['output']?.[_0x322d74(0x177)]||_0x1bf1a3?.[_0x322d74(0x1a3)]?.[_0x322d74(0x17a)]?.[_0x322d74(0x18d)]?.[_0x322d74(0x177)];console[_0x322d74(0x17d)](_0x5cc2d5);if(_0x5cc2d5&&_0x5cc2d5!==DisconnectReason[_0x322d74(0x17f)]&&_0x2eba9b?.['ws'][_0x322d74(0x1a4)]!==CONNECTING){let _0x5bf858=global[_0x322d74(0x179)][_0x322d74(0x173)](_0x2eba9b);if(_0x5bf858<0x0)return console['log'](await _0x48e8fb(!![])[_0x322d74(0x187)](console[_0x322d74(0x1a3)]));delete global['conns'][_0x5bf858],global[_0x322d74(0x179)][_0x322d74(0x182)](_0x5bf858,0x1),_0x5cc2d5!==DisconnectReason[_0x322d74(0x193)]?parentw[_0x322d74(0x1a7)](m[_0x322d74(0x16d)],{'text':''+lenguajeGB[_0x322d74(0x191)]()},{'quoted':m}):parentw[_0x322d74(0x1a7)](m['chat'],{'text':''+lenguajeGB[_0x322d74(0x167)]()},{'quoted':m}),console[_0x322d74(0x17d)](await _0x48e8fb(![])[_0x322d74(0x187)](console[_0x322d74(0x1a3)]));}if(global['db'][_0x322d74(0x16c)]==null)loadDatabase();if(_0x2d9ff1==_0x322d74(0x1a9)){_0x2eba9b[_0x322d74(0x16b)]=!![],global[_0x322d74(0x179)]['push'](_0x2eba9b),await parentw['sendMessage'](m[_0x322d74(0x16d)],{'text':args[0x0]?''+lenguajeGB[_0x322d74(0x1b0)]():''+lenguajeGB['smsJBConexionTrue2']()+('\x20'+(usedPrefix+command))},{'quoted':m}),await parentw[_0x322d74(0x1a7)](m[_0x322d74(0x16d)],{'text':args[0x0]?''+lenguajeGB[_0x322d74(0x18c)]()+('\x0a\x0a'+redesMenu[_0x322d74(0x172)]()):lenguajeGB['lenguaje']()=='es'?lenguajeGB[_0x322d74(0x171)]():''},{'quoted':m});if(!args[0x0])parentw[_0x322d74(0x1a7)](m[_0x322d74(0x16d)],{'text':usedPrefix+command+'\x20'+Buffer[_0x322d74(0x188)](fs['readFileSync']('./GataJadiBot/'+_0x1b5546+_0x322d74(0x1a2)),_0x322d74(0x183))['toString'](_0x322d74(0x17e))},{'quoted':m});if(_0x2d9ff1===_0x322d74(0x1a9))return parentw[_0x322d74(0x1a7)](m[_0x322d74(0x16d)],{'text':''+lenguajeGB[_0x322d74(0x196)]()},{'quoted':m}),console[_0x322d74(0x17d)](await _0x48e8fb(![])[_0x322d74(0x187)](console[_0x322d74(0x1a3)]));await sleep(0x1388);if(!args[0x0])parentw[_0x322d74(0x1a7)](m['chat'],{'text':usedPrefix+command+'\x20'+Buffer[_0x322d74(0x188)](fs[_0x322d74(0x186)](_0x322d74(0x189)+_0x1b5546+_0x322d74(0x1a2)),_0x322d74(0x183))['toString'](_0x322d74(0x17e))},{'quoted':m});}}setInterval(async()=>{const _0x55d4b1=_0x346cd2;if(!_0x2eba9b[_0x55d4b1(0x164)]){try{_0x2eba9b['ws'][_0x55d4b1(0x18e)]();}catch{}_0x2eba9b['ev'][_0x55d4b1(0x199)]();let _0x3507c2=global[_0x55d4b1(0x179)][_0x55d4b1(0x173)](_0x2eba9b);if(_0x3507c2<0x0)return;delete global[_0x55d4b1(0x179)][_0x3507c2],global[_0x55d4b1(0x179)][_0x55d4b1(0x182)](_0x3507c2,0x1);}},0xea60);let _0x24d2cb=await import('../handler.js'),_0x48e8fb=async function(_0x918fcf){const _0x4e3a8c=_0x346cd2;try{const _0x5c63a7=await import('../handler.js?update='+Date[_0x4e3a8c(0x176)]())['catch'](console[_0x4e3a8c(0x1a3)]);if(Object[_0x4e3a8c(0x1af)](_0x5c63a7||{})['length'])_0x24d2cb=_0x5c63a7;}catch(_0x11dec8){console['error'](_0x11dec8);}if(_0x918fcf){try{_0x2eba9b['ws']['close']();}catch{}_0x2eba9b['ev'][_0x4e3a8c(0x199)](),_0x2eba9b=makeWASocket(_0x4157e5),_0x2d861f=!![];}return!_0x2d861f&&(_0x2eba9b['ev'][_0x4e3a8c(0x19f)]('messages.upsert',_0x2eba9b[_0x4e3a8c(0x184)]),_0x2eba9b['ev'][_0x4e3a8c(0x19f)](_0x4e3a8c(0x198),_0x2eba9b[_0x4e3a8c(0x1ae)]),_0x2eba9b['ev'][_0x4e3a8c(0x19f)](_0x4e3a8c(0x190),_0x2eba9b[_0x4e3a8c(0x1a6)]),_0x2eba9b['ev'][_0x4e3a8c(0x19f)](_0x4e3a8c(0x1ac),_0x2eba9b['onDelete']),_0x2eba9b['ev'][_0x4e3a8c(0x19f)](_0x4e3a8c(0x162),_0x2eba9b[_0x4e3a8c(0x18f)]),_0x2eba9b['ev'][_0x4e3a8c(0x19f)](_0x4e3a8c(0x1ad),_0x2eba9b[_0x4e3a8c(0x175)]),_0x2eba9b['ev'][_0x4e3a8c(0x19f)](_0x4e3a8c(0x19b),_0x2eba9b[_0x4e3a8c(0x16f)])),_0x2eba9b[_0x4e3a8c(0x184)]=_0x24d2cb['handler'][_0x4e3a8c(0x19c)](_0x2eba9b),_0x2eba9b[_0x4e3a8c(0x1ae)]=_0x24d2cb[_0x4e3a8c(0x1ae)][_0x4e3a8c(0x19c)](_0x2eba9b),_0x2eba9b[_0x4e3a8c(0x1a6)]=_0x24d2cb[_0x4e3a8c(0x1a6)][_0x4e3a8c(0x19c)](_0x2eba9b),_0x2eba9b['onDelete']=_0x24d2cb[_0x4e3a8c(0x1a8)][_0x4e3a8c(0x19c)](_0x2eba9b),_0x2eba9b[_0x4e3a8c(0x18f)]=_0x24d2cb['callUpdate'][_0x4e3a8c(0x19c)](_0x2eba9b),_0x2eba9b['connectionUpdate']=_0x1f790f[_0x4e3a8c(0x19c)](_0x2eba9b),_0x2eba9b['credsUpdate']=_0x47b2b9[_0x4e3a8c(0x19c)](_0x2eba9b,!![]),_0x2eba9b['ev']['on'](_0x4e3a8c(0x1a0),_0x2eba9b[_0x4e3a8c(0x184)]),_0x2eba9b['ev']['on'](_0x4e3a8c(0x198),_0x2eba9b[_0x4e3a8c(0x1ae)]),_0x2eba9b['ev']['on'](_0x4e3a8c(0x190),_0x2eba9b[_0x4e3a8c(0x1a6)]),_0x2eba9b['ev']['on'](_0x4e3a8c(0x1ac),_0x2eba9b['onDelete']),_0x2eba9b['ev']['on'](_0x4e3a8c(0x162),_0x2eba9b[_0x4e3a8c(0x18f)]),_0x2eba9b['ev']['on']('connection.update',_0x2eba9b[_0x4e3a8c(0x175)]),_0x2eba9b['ev']['on'](_0x4e3a8c(0x19b),_0x2eba9b[_0x4e3a8c(0x16f)]),_0x2d861f=![],!![];};_0x48e8fb(![]);}_0x47a90f();});
}else{
handler.private = true 
}
break
    
case isCommand2:
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let uniqid = `${who.split`@`[0]}`
let userS = `${conn.getName(who)}`
if (global.conn.user.jid !== conn.user.jid) return conn.sendMessage(m.chat, {text: lenguajeGB.smsJBDel() + `\n\n*https://api.whatsapp.com/send/?phone=${global.conn.user.jid.split`@`[0]}&text=${usedPrefix + command}&type=phone_number&app_absent=0*`}, { quoted: m }) 
else {
await conn.sendMessage(m.chat, { text: lenguajeGB.smsJBAdios() }, { quoted: m })}
try {
fs.rmdir("./GataJadiBot/" + uniqid, { recursive: true, force: true })
await conn.sendMessage(m.chat, { text : lenguajeGB.smsJBCerrarS() } , { quoted: m })
} catch(err) {
console.error(userS + ' ' + lenguajeGB.smsJBErr(), err)   
}    
break
    
case isCommand3:
if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, `${ag}𝙎𝙄 𝙉𝙊 𝙀𝙎 𝙎𝙐𝘽 𝘽𝙊𝙏, 𝘾𝙊𝙈𝙐𝙉𝙄𝙌𝙐𝙀𝙎𝙀 𝘼𝙇 𝙉𝙐𝙈𝙀𝙍𝙊 𝙋𝙍𝙄𝙉𝘾𝙄𝙋𝘼𝙇 𝙋𝘼𝙍𝘼 𝙎𝙀𝙍 𝘽𝙊𝙏\n\n𝙄𝙁 𝙔𝙊𝙐 𝘼𝙍𝙀 𝙉𝙊𝙏 𝘼 𝙎𝙐𝘽 𝘽𝙊𝙏, 𝘾𝙊𝙉𝙏𝘼𝘾𝙏 𝙏𝙃𝙀 𝙈𝘼𝙄𝙉 𝙉𝙐𝙈𝘽𝙀𝙍 𝙏𝙊 𝘽𝙀𝘾𝙊𝙈𝙀 𝘼 𝘽𝙊𝙏`, m)
else {
await conn.reply(m.chat, `${rg}𝙐𝙎𝙏𝙀𝘿 𝙃𝘼 𝘾𝙀𝙍𝙍𝘼𝘿𝙊 𝙎𝙀𝙎𝙄𝙊𝙉 𝘾𝙊𝙉𝙈𝙄𝙂𝙊 🙀\n\n𝙔𝙊𝙐 𝙃𝘼𝙑𝙀 𝙇𝙊𝙂𝙂𝙀𝘿 𝙊𝙐𝙏 𝙒𝙄𝙏𝙃 𝙈𝙀 😯`, m)
conn.ws.close()}  
break
    
case isCommand4:
let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]
await m.reply( '😺 𝙇𝙄𝙎𝙏𝘼 𝘿𝙀 𝙎𝙐𝘽𝘽𝙊𝙏𝙎 (𝙎𝙀𝙍𝘽𝙊𝙏/𝙅𝘼𝘿𝙄𝘽𝙊𝙏) 𝘼𝘾𝙏𝙄𝙑𝙊𝙎\n\n🙌 𝙋𝙐𝙀𝘿𝙀𝙎 𝘾𝙊𝙉𝙏𝘼𝘾𝙏𝘼𝙍𝙇𝙊𝙎 𝙋𝘼𝙍𝘼 𝙋𝙀𝘿𝙄𝙍 𝙌𝙐𝙀 𝙎𝙀 𝙐𝙉𝘼𝙉 𝘼 𝙏𝙐 𝙂𝙍𝙐𝙋𝙊, 𝙎𝙀 𝙍𝙀𝙎𝙋𝙀𝙏𝙐𝙊𝙎𝙊\n\n❕ 𝙎𝙄 𝙀𝙇 𝙏𝙀𝙓𝙏𝙊 𝘼𝙋𝘼𝙍𝙀𝘾𝙀 𝙀𝙉 𝘽𝙇𝘼𝙉𝘾𝙊 𝙎𝙄𝙂𝙉𝙄𝙁𝙄𝘾𝘼 𝙌𝙐𝙀 𝙉𝙊 𝘼𝙃𝙄 𝙎𝙐𝘽𝘽𝙊𝙏𝙎 𝘼𝘾𝙏𝙄𝙑𝙊𝙎\n\n❗ 𝘾𝘼𝘿𝘼 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 𝙎𝙐𝘽 𝘽𝙊𝙏 𝙈𝘼𝙉𝙀𝙅𝘼 𝙇𝘼 𝙁𝙐𝙉𝘾𝙄𝙊𝙉 𝘾𝙊𝙈𝙊 𝙌𝙐𝙄𝙀𝙍𝘼, 𝙀𝙇 𝙉𝙐𝙈𝙀𝙍𝙊 𝙋𝙍𝙄𝙉𝘾𝙄𝙋𝘼𝙇 𝙉𝙊 𝙎𝙀 𝙃𝘼𝘾𝙀 𝙍𝙀𝙎𝙋𝙊𝙉𝙎𝘼𝘽𝙇𝙀')
await m.reply(users.map(v => '🐈 wa.me/' + v.jid.replace(/[^0-9]/g, '') + `?text=${usedPrefix}estado\n(${v.name})\n\n`).join('\n'))    
break
    
}}

handler.command = /^(jadibot|serbot|getcode|rentbot|deletesesion|eliminarsesion|borrarsesion|delsesion|cerrarsesion|berhenti|stopsb|detenersb|listjadibot|bots|subsbots|subbots)$/i
export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));}	
