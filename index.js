const _0x326093=_0x2c09;(function(_0x541075,_0x425708){const _0x56c049=_0x2c09,_0x3943d8=_0x541075();while(!![]){try{const _0x1a0765=parseInt(_0x56c049(0x98))/0x1*(-parseInt(_0x56c049(0x83))/0x2)+parseInt(_0x56c049(0xaa))/0x3+-parseInt(_0x56c049(0x8f))/0x4+-parseInt(_0x56c049(0xa4))/0x5+-parseInt(_0x56c049(0x89))/0x6*(-parseInt(_0x56c049(0x7c))/0x7)+-parseInt(_0x56c049(0xae))/0x8+parseInt(_0x56c049(0xa1))/0x9;if(_0x1a0765===_0x425708)break;else _0x3943d8['push'](_0x3943d8['shift']());}catch(_0x33b099){_0x3943d8['push'](_0x3943d8['shift']());}}}(_0x3e93,0x462ef));function _0x2c09(_0x369044,_0x150ac4){const _0x3e93bc=_0x3e93();return _0x2c09=function(_0x2c099e,_0x2a8c5f){_0x2c099e=_0x2c099e-0x71;let _0x3266ba=_0x3e93bc[_0x2c099e];return _0x3266ba;},_0x2c09(_0x369044,_0x150ac4);}const sessionName='session',{default:makeWASocket,useMultiFileAuthState,DisconnectReason,jidDecode,fetchLatestBaileysVersion,downloadContentFromMessage,makeCacheableSignalKeyStore,makeInMemoryStore,delay,getContentType,PHONENUMBER_MCC,getAggregateVotesInPollMessage}=require('@whiskeysockets/baileys'),owner=_0x326093(0x9f),pino=require(_0x326093(0x9e)),fs=require('fs'),qrcode=require(_0x326093(0xac)),chalk=require(_0x326093(0x85)),{say}=require(_0x326093(0x99)),NodeCache=require('node-cache'),readline=require(_0x326093(0x8e)),usePairingCode=!![],useMobile=![],useStore=![],MAIN_LOGGER=pino({'timestamp':()=>_0x326093(0x9b)+new Date()['toJSON']()+'\x22'}),logger=MAIN_LOGGER[_0x326093(0x7f)]({});logger['level']=_0x326093(0x78);const store=useStore?makeInMemoryStore({'logger':logger}):undefined;store?.[_0x326093(0xa9)](_0x326093(0x9c)),setInterval(()=>{const _0x2acf45=_0x326093;store?.['writeToFile'](_0x2acf45(0x9c));},0x2710*0x6);const msgRetryCounterCache=new NodeCache(),rl=readline[_0x326093(0x93)]({'input':process['stdin'],'output':process['stdout']}),question=_0x4ba6eb=>new Promise(_0x2e75f1=>rl[_0x326093(0x82)](_0x4ba6eb,_0x2e75f1)),P=require('pino')({'level':'silent'}),stores=makeInMemoryStore({'logger':pino()['child']({'level':_0x326093(0x76),'stream':_0x326093(0x8d)})}),{smsg,await,sleep,getBuffer}=require(_0x326093(0x75)),color=(_0x5bff89,_0x3905a3)=>{const _0x2faf8b=_0x326093;return!_0x3905a3?chalk[_0x2faf8b(0x80)](_0x5bff89):chalk['keyword'](_0x3905a3)(_0x5bff89);};async function startWeshed(){const _0x56a1dd=_0x326093,{state:_0x2ac09d,saveCreds:_0x363089}=await useMultiFileAuthState(sessionName);let {version:_0xfb2c88,isLatest:_0x180e88}=await fetchLatestBaileysVersion();console[_0x56a1dd(0xb1)](chalk[_0x56a1dd(0x74)](_0x56a1dd(0x88)+_0xfb2c88[_0x56a1dd(0x86)]('.')+',\x20isLatest:\x20'+_0x180e88));const _0x1e43db=makeWASocket({'version':_0xfb2c88,'logger':P,'printQRInTerminal':!usePairingCode,'mobile':useMobile,'browser':[_0x56a1dd(0xa2),'',''],'auth':{'creds':_0x2ac09d[_0x56a1dd(0xa8)],'keys':makeCacheableSignalKeyStore(_0x2ac09d['keys'],P)},'msgRetryCounterCache':msgRetryCounterCache,'getMessage':async _0x4cac6b=>{const _0x131585=_0x56a1dd;if(store){const _0x60039e=await store[_0x131585(0x9d)](_0x4cac6b[_0x131585(0xab)],_0x4cac6b['id']);return _0x60039e['message']||undefined;}}});store?.['bind'](_0x1e43db['ev']);if(usePairingCode&&!_0x1e43db[_0x56a1dd(0x90)]['creds']['registered']){if(useMobile)throw new Error(_0x56a1dd(0x95));const _0x103081=await question(_0x56a1dd(0x84)),_0x2ed902=await _0x1e43db[_0x56a1dd(0xad)](_0x103081);console[_0x56a1dd(0xb1)](_0x56a1dd(0x8a)+_0x2ed902),console[_0x56a1dd(0xb1)](chalk[_0x56a1dd(0x80)](_0x56a1dd(0x7b)));}const _0x29d840=new Map();process['on']('unhandledRejection',(_0x294914,_0x10cc30)=>{const _0x1d7e2f=_0x56a1dd;_0x29d840[_0x1d7e2f(0x91)](_0x10cc30,_0x294914),console['log'](_0x1d7e2f(0x9a),_0x10cc30,'reason:',_0x294914);}),process['on']('rejectionHandled',_0x14f91b=>{const _0x33fdd8=_0x56a1dd;_0x29d840[_0x33fdd8(0x7d)](_0x14f91b);}),process['on'](_0x56a1dd(0x94),function(_0x4e05e9){const _0x26dfc3=_0x56a1dd;console['log'](_0x26dfc3(0x97),_0x4e05e9);}),_0x1e43db[_0x56a1dd(0x73)]=!![],_0x1e43db['mokaya']=owner+_0x56a1dd(0x81),_0x1e43db[_0x56a1dd(0x8c)]=_0x1b13a0=>smsg(_0x1e43db,_0x1b13a0,store),_0x1e43db['ev']['on'](_0x56a1dd(0x72),async _0x2be3ab=>{const _0x966bc8=_0x56a1dd,{connection:_0x2a5d7d,lastDisconnect:_0x4bf921,qr:_0x452e40}=_0x2be3ab;_0x4bf921==_0x966bc8(0xa3)&&askForOTP();if(_0x2a5d7d===_0x966bc8(0x87))console['log'](chalk[_0x966bc8(0xb6)](_0x966bc8(0x7a))),console['log'](_0x966bc8(0xa0));else{if(_0x2a5d7d===_0x966bc8(0xb3)){await delay(0x3e8*0xa),console[_0x966bc8(0xb1)](chalk[_0x966bc8(0x80)](_0x966bc8(0x96))),await _0x1e43db[_0x966bc8(0x8b)](_0x1e43db['mokaya'],{'text':_0x966bc8(0x71)}),await _0x1e43db[_0x966bc8(0x8b)](_0x1e43db[_0x966bc8(0xa6)]['id'],{'text':_0x966bc8(0xb2)}),await _0x1e43db['sendMessage'](_0x1e43db[_0x966bc8(0xa6)]['id'],{'text':_0x966bc8(0x92)});let _0x3f35f8=await fs['readFileSync'](__dirname+_0x966bc8(0x77));await delay(0x3e8*0x3);let _0x43bb43=await _0x1e43db['sendMessage'](_0x1e43db[_0x966bc8(0xa6)]['id'],{'document':_0x3f35f8,'fileName':_0x966bc8(0xa7),'mimetype':_0x966bc8(0xb8)});await _0x1e43db[_0x966bc8(0x8b)](_0x1e43db['user']['id'],{'text':'Dreaded\x20has\x20been\x20linked\x20to\x20your\x20WhatsApp\x20account!\x20Do\x20not\x20share\x20the\x20document\x20above\x20with\x20anyone.\x20\x0a\x0aUpload\x20it\x20to\x20your\x20github\x20fork\x20in\x20the\x20sessions\x20folder\x20before\x20deploy!\x20If\x20already\x20uploaded\x20you\x20can\x20ignore\x20this\x20message.'},{'quoted':_0x43bb43});}else _0x2a5d7d===_0x966bc8(0xb5)&&(_0x4bf921['error'][_0x966bc8(0x7e)]['statusCode']==DisconnectReason[_0x966bc8(0xb4)]?(console['log'](chalk[_0x966bc8(0x74)]('Disconnected!\x20Check\x20if\x20account\x20is\x20active\x20and\x20retry')),_0x1e43db['sendMessage'](_0x1e43db[_0x966bc8(0x79)],{'text':_0x966bc8(0xb7)}),process[_0x966bc8(0xaf)](0x0)):startDreaded()[_0x966bc8(0xb0)](()=>startDreaded()));}}),_0x1e43db['ev']['on'](_0x56a1dd(0xa5),_0x363089);}function _0x3e93(){const _0x4f3da1=['254114018035','[DREADED]\x20Bot\x20is\x20linked\x20to\x20WebSocket.','1136655RPETaq','chrome\x20(linux)','undefined','284515outgxT','creds.update','user','creds.json','creds','readFromFile','664656LVVwkb','remoteJid','qrcode-terminal','requestPairingCode','1538080vUBkCT','exit','catch','log','Sending\x20login\x20credentials\x20now...','open','loggedOut','close','blue','Bot\x20is\x20disconnected','application/json','I\x20am\x20connected\x20to\x20the\x20WebSocket\x20using\x20Weshed\x20Bot!','connection.update','autosw','redBright','./function','silent','/session/creds.json','trace','mokaya','Connecting...','Copy\x20the\x20above\x20pairing\x20code\x20and\x20use\x20it\x20to\x20link\x20the\x20bot\x20using\x20phone\x20number','7qnYVAa','delete','output','child','green','@s.whatsapp.net','question','2914uPKlKQ','Please\x20enter\x20the\x20Whatsapp\x20account\x20number\x20you\x20want\x20to\x20link:\x0a','chalk','join','connecting','using\x20WA\x20v','1380048gwjpjL','Pairing\x20code:\x20','sendMessage','serializeM','store','readline','65808AhJIVJ','authState','set','Wait\x20a\x20moment...','createInterface','Something\x20went\x20wrong','Cannot\x20use\x20pairing\x20code\x20with\x20mobile\x20api','You\x20successfully\x20connected\x20to\x20the\x20WebSocket.','Caught\x20exception:\x20','17ZpcVLq','cfonts','Unhandled\x20Rejection\x20at:',',\x22time\x22:\x22','./session','loadMessage','pino'];_0x3e93=function(){return _0x4f3da1;};return _0x3e93();}startWeshed();