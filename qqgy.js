// 脚本： 琪琪的果园
// 说明：只支持青龙，需要手动抓包，打开小程序后抓包，www.weiju123.com 的任意post请求的url 中Cookie，和请求数据body中的 aot 参数
// export qqck='PHPSESSID=9oeq2l7njitqbvt..........@PHPSESSID=9oeq2l7njitqbvt..........'
//  export qqaot='.......@........'
//❗️❗️❗️❗️ 脚本挂机后不要再小程序重新授权登录，会导致登录失效，就需要更新ck,❗️❗️❗️❗️
// 收益：自动提现，1元提现，首次 0.3  每日大概收益1块钱
const _0x2322bb=_0x3d4d;(function(_0x4746fd,_0x59a992){const _0xcfe838=_0x3d4d,_0x3438d1=_0x4746fd();while(!![]){try{const _0x49b41f=-parseInt(_0xcfe838(0xa4))/0x1*(-parseInt(_0xcfe838(0x92))/0x2)+-parseInt(_0xcfe838(0x139))/0x3+parseInt(_0xcfe838(0xb3))/0x4+parseInt(_0xcfe838(0xe0))/0x5+-parseInt(_0xcfe838(0x10c))/0x6*(parseInt(_0xcfe838(0xa9))/0x7)+parseInt(_0xcfe838(0x12d))/0x8+-parseInt(_0xcfe838(0x125))/0x9;if(_0x49b41f===_0x59a992)break;else _0x3438d1['push'](_0x3438d1['shift']());}catch(_0x10b508){_0x3438d1['push'](_0x3438d1['shift']());}}}(_0x5508,0x37a5c));const $=new Env(_0x2322bb(0x105));let status;status=(status=$[_0x2322bb(0xde)]('fhxzstatus')||'1')>0x1?''+status:'';let ckArr=[],aotArr=[],time=Math[_0x2322bb(0xe7)](Date[_0x2322bb(0xd7)]()/0x3e8),ck=$[_0x2322bb(0xfa)]()?process['env'][_0x2322bb(0xd5)]?process[_0x2322bb(0xee)][_0x2322bb(0xd5)]:'':$[_0x2322bb(0xe1)](_0x2322bb(0xd5))?$[_0x2322bb(0xe1)]('qqck'):'',aot=$[_0x2322bb(0xfa)]()?process[_0x2322bb(0xee)][_0x2322bb(0x12b)]?process['env']['qqaot']:'':$['getdata'](_0x2322bb(0x12b))?$[_0x2322bb(0xe1)]('qqaot'):'',cks='',aots='',uid='',taskId='',sp_list,i,deviceid='',num=rand(0xa,0x63);!(async()=>{const _0x28d5c0=_0x2322bb;if(typeof $request!==_0x28d5c0(0x91))fhxzck();else{if(!$[_0x28d5c0(0xfa)]()){slckArr[_0x28d5c0(0x120)]($[_0x28d5c0(0xe1)](_0x28d5c0(0xcc)));let _0x15cfb2=$[_0x28d5c0(0xde)](_0x28d5c0(0xc5))||'1';for(let _0x4eb31e=0x2;_0x4eb31e<=_0x15cfb2;_0x4eb31e++){slckArr[_0x28d5c0(0x120)]($[_0x28d5c0(0xe1)]('slurl'+_0x4eb31e));}console[_0x28d5c0(0x98)](_0x28d5c0(0x109)+slckArr['length']+_0x28d5c0(0x8c));for(let _0x486a95=0x0;_0x486a95<slckArr['length'];_0x486a95++){slckArr[_0x486a95]&&(slurl=slckArr[_0x486a95],$[_0x28d5c0(0xb9)]=_0x486a95+0x1,console['log'](_0x28d5c0(0xf9)+$[_0x28d5c0(0xb9)]+'】'),uid=slurl[_0x28d5c0(0x130)](/uid=(\S*)&/)[0x1],deviceid=slurl[_0x28d5c0(0x130)](/deviceid=(\S*)&ver/)[0x1],uticket=slurl[_0x28d5c0(0x130)](/uticket=(\S*)/)[0x1],await rw(),$[_0x28d5c0(0x98)]('------------------任务结束------------------'));}}else{process[_0x28d5c0(0xee)][_0x28d5c0(0xd5)]&&process[_0x28d5c0(0xee)]['qqck'][_0x28d5c0(0xfb)]('@')>-0x1?(ckArr=process['env']['qqck'][_0x28d5c0(0x128)]('@'),console[_0x28d5c0(0x98)](_0x28d5c0(0x9a))):cks=[process['env'][_0x28d5c0(0xd5)]];;Object['keys'](cks)[_0x28d5c0(0x11a)](_0x489bce=>{const _0x313849=_0x28d5c0;cks[_0x489bce]&&ckArr[_0x313849(0x120)](cks[_0x489bce]);});process['env'][_0x28d5c0(0x12b)]&&process[_0x28d5c0(0xee)][_0x28d5c0(0x12b)]['indexOf']('@')>-0x1?(aotArr=process[_0x28d5c0(0xee)]['qqaot'][_0x28d5c0(0x128)]('@'),console[_0x28d5c0(0x98)]('您选择的是用\x22@\x22隔开\x0a')):aots=[process[_0x28d5c0(0xee)][_0x28d5c0(0x12b)]];;Object[_0x28d5c0(0x95)](aots)[_0x28d5c0(0x11a)](_0x32095b=>{const _0x5edce1=_0x28d5c0;aots[_0x32095b]&&aotArr[_0x5edce1(0x120)](aots[_0x32095b]);}),console[_0x28d5c0(0x98)]('共'+ckArr['length']+_0x28d5c0(0xb6));for(let _0x30ac57=0x0;_0x30ac57<ckArr[_0x28d5c0(0x10a)];_0x30ac57++){$['message']='',ck=ckArr[_0x30ac57],aot=aotArr[_0x30ac57],$['index']=_0x30ac57+0x1,console[_0x28d5c0(0x98)](_0x28d5c0(0x134)+$[_0x28d5c0(0xb9)]+'】'),console['log']('资产'),await money(),console[_0x28d5c0(0x98)](_0x28d5c0(0xa0));let _0x2f31c0=0x0;do{_0x2f31c0++,await getBuild1CoinMoney();}while(_0x2f31c0<0xa);console[_0x28d5c0(0x98)](_0x28d5c0(0x93)),await video(),console['log'](_0x28d5c0(0x90)),await getRedMoney(),console[_0x28d5c0(0x98)]('资产'),await money(),console[_0x28d5c0(0x98)](_0x28d5c0(0xf6)),await getWxCash(),await cashRecord(),$[_0x28d5c0(0x98)]('------------------任务结束------------------');}}}})()['catch'](_0xde9868=>$['logErr'](_0xde9868))[_0x2322bb(0xc0)](()=>$[_0x2322bb(0x8b)]());function fhxzck(){const _0x138db9=_0x2322bb;if($request[_0x138db9(0x138)][_0x138db9(0xfb)](_0x138db9(0x97))>-0x1&&$request['url'][_0x138db9(0xfb)](_0x138db9(0x94))>-0x1&&$request[_0x138db9(0x138)][_0x138db9(0xfb)](_0x138db9(0x107))>-0x1){const _0x52d17f=$request[_0x138db9(0x138)];if(_0x52d17f)$[_0x138db9(0xe6)](_0x52d17f,_0x138db9(0xcc)+status);$['log'](_0x52d17f),$[_0x138db9(0xb7)]($[_0x138db9(0xed)],'','闪辆'+status+_0x138db9(0xe3));}}async function rw(){return new Promise(_0x85d6bc=>{const _0x578396=_0x3d4d;let _0x2ec4b5={'url':_0x578396(0xbc)+uid+_0x578396(0xbd)+deviceid+_0x578396(0xe2)};$[_0x578396(0xdd)](_0x2ec4b5,async(_0x2dbae2,_0x472fe9,_0xde47e8)=>{const _0x436332=_0x578396;try{result=JSON[_0x436332(0xa6)](_0xde47e8);let _0x25871b=result[_0x436332(0xef)][_0x436332(0xe5)];await daka();for(let _0x1ada08=0x0;_0x1ada08<_0x25871b[_0x436332(0x10a)];_0x1ada08++){console[_0x436332(0x98)](_0x436332(0xfe)+_0x25871b[_0x1ada08][_0x436332(0xf7)]),_0x25871b[_0x1ada08][_0x436332(0x110)]<_0x25871b[_0x1ada08][_0x436332(0x96)]?(console[_0x436332(0x98)](_0x436332(0x86)+_0x25871b[_0x1ada08][_0x436332(0x110)]+'/'+_0x25871b[_0x1ada08][_0x436332(0x96)]),console[_0x436332(0x98)](_0x436332(0x11e)),await kqrw(_0x25871b[_0x1ada08][_0x436332(0x102)],_0x25871b[_0x1ada08][_0x436332(0x96)]-_0x25871b[_0x1ada08][_0x436332(0x110)]),await $['wait'](0x3e8)):console['log'](_0x436332(0x86)+_0x25871b[_0x1ada08][_0x436332(0x110)]+'/'+_0x25871b[_0x1ada08][_0x436332(0x96)]);}}catch(_0x19f594){$[_0x436332(0x12e)](_0x19f594,_0x472fe9);}finally{_0x85d6bc();}},0x0);});}function _0x5508(){const _0x35406d=['\x22,\x22hv\x22:\x221.02\x22}','当前进度：','existsSync','headers','utf-8','{\x20\x22num\x22:3,\x20\x22hv\x22\x20:\x20\x221.02\x22,\x22aot\x22\x20:\x20\x22','done','个账号-------------\x0a',',\x20结束!\x20🕛\x20','object','isNeedRewrite','任务：视频红包','undefined','10pszKMc','任务：转盘','query_list','keys','totalNum','checkin','log','Content-Length','您选择的是用\x22@\x22隔开\x0a','{\x20\x22aot\x22\x20:\x20\x22','readFileSync','getMonth','==============📣系统通知📣==============','setval','任务：住宅','runScript','logs','initGotEnv','56476gvQikn','ckjar','parse','\x22,\x20\x22hv\x22\x20:\x20\x221.02\x22\x20\x20}','setValueForKey','230573WVbGjo','{\x22aot\x22:\x22','http','method','https://www.weiju123.com/wxqqgy/public/index.php/Cash/getWxCash','statusCode','map','loaddata','getMilliseconds','https://www.weiju123.com/wxqqgy/public/index.php/Money/getRedMoney','1403824XBuGcd','isMuteLog','http://','个账号','msg','wait','index','openUrl','assign','https://newvideo.autohome.com.cn/openapi/activity-api/task/query_list?uid=','&deviceid=','{\x20\x22index\x22:1,\x20\x22aot\x22\x20:\x20\x22','Content-Type','finally','concat','opts','abs','POST','slcount','read','startTime','red','open-url','box.dat','then','slurl','lodash_get','valueForKey','isArray','test','https://www.weiju123.com/wxqqgy/public/index.php/Money/getBuild1CoinMoney','isLoon','writeFileSync','rawBody','qqck','isMute','now','cron','CookieJar','code','exec','cookieJar','get','getval','writedata','1260155UbqSKb','getdata','&taskType=0','数据获取成功','isSurge','taskDetailDtoList','setdata','round','money','application/json;charset=UTF-8','redirect','post','floor','name','env','result','getTime','send','media-url','获得红包券','data','\x20提现金额：','去提现','taskName','string','\x0a开始【闪辆账户\x20','isNode','indexOf','call','stack','任务：','@chavy_boxjs_userCfgs.httpapi','addtime','https://www.weiju123.com/wxqqgy/public/index.php/Cash/cashRecord','taskId','dataFile','path','琪琪的果园','toLocaleLowerCase','appid=','status','-------------共','length','random','30swNlTN','getHours','mediaUrl','getScript','completeNum','fetch','replace','body','lodash_set','got','toString','exports','isQuanX','resolve','forEach','decode','getMinutes','stringify','去完成','getDate','push','isShadowrocket','cktough','set-cookie','join','7148205hUntyW','setCookieSync','null','split','.$1','iconv-lite','qqaot','{\x20\x22num\x22\x20:\x205999236900,\x20\x22aot\x22\x20:\x20\x22','3568160TCETxD','logErr','\x22,\x20\x22hv\x22\x20:\x20\x221.02\x22\x20}','match','logSeparator','toStr','write','\x0a开始【琪琪的果园\x20','encoding','toObj','timeout','url','433545OZeJCp',',\x20错误!'];_0x5508=function(){return _0x35406d;};return _0x5508();}function red(){return new Promise(_0x3cd60f=>{const _0x203b3a=_0x3d4d;let _0x361812={'url':'https://www.weiju123.com/wxqqgy/public/index.php/Money/setCoinMoney','body':_0x203b3a(0x12c)+aot+_0x203b3a(0xa7),'headers':{'Cookie':ck,'Content-Type':_0x203b3a(0xe9)}};$[_0x203b3a(0xeb)](_0x361812,async(_0x2b1e39,_0x528bc2,_0x399798)=>{const _0x4e3ea5=_0x203b3a;try{console[_0x4e3ea5(0x98)](_0x399798),result=JSON[_0x4e3ea5(0xa6)](_0x399798),await video();}catch(_0x49b791){$['logErr'](_0x49b791,_0x528bc2);}finally{_0x3cd60f();}},0x0);});}function getRedMoney(){return new Promise(_0x40b14c=>{const _0x77d76b=_0x3d4d;let _0x3b8a3a={'url':_0x77d76b(0xb2),'body':_0x77d76b(0xaa)+aot+_0x77d76b(0x13b),'headers':{'Cookie':ck,'Content-Type':_0x77d76b(0xe9)}};$['post'](_0x3b8a3a,async(_0x254f71,_0x3e1508,_0x51dbea)=>{const _0xe42f26=_0x77d76b;try{console[_0xe42f26(0x98)](_0x51dbea),result=JSON[_0xe42f26(0xa6)](_0x51dbea),result[_0xe42f26(0xda)]==0x0&&(console['log'](_0xe42f26(0xf3)+result[_0xe42f26(0xc8)]),await $[_0xe42f26(0xb8)](0x3e8),await getRedMoney());}catch(_0x10c8b1){$[_0xe42f26(0x12e)](_0x10c8b1,_0x3e1508);}finally{_0x40b14c();}},0x0);});}function _0x3d4d(_0x99ceff,_0x267a0b){const _0x550851=_0x5508();return _0x3d4d=function(_0x3d4d3b,_0xf5ec25){_0x3d4d3b=_0x3d4d3b-0x86;let _0x488016=_0x550851[_0x3d4d3b];return _0x488016;},_0x3d4d(_0x99ceff,_0x267a0b);}function video(){return new Promise(_0x391e1c=>{const _0x90e867=_0x3d4d;let _0x517437={'url':'https://www.weiju123.com/wxqqgy/public/index.php/Turn/TurnIndex','body':'{\x20\x22aot\x22\x20:\x20\x22'+aot+_0x90e867(0x12f),'headers':{'Cookie':ck,'Content-Type':_0x90e867(0xe9)}};$[_0x90e867(0xeb)](_0x517437,async(_0x2d8552,_0x2fede1,_0x141aff)=>{const _0x1f5e88=_0x90e867;try{console[_0x1f5e88(0x98)](_0x141aff),result=JSON[_0x1f5e88(0xa6)](_0x141aff),result[_0x1f5e88(0xda)]==0x0&&(await $[_0x1f5e88(0xb8)](0x3e8),await red());}catch(_0x51315d){$['logErr'](_0x51315d,_0x2fede1);}finally{_0x391e1c();}},0x0);});}function money(){return new Promise(_0x50aab7=>{const _0x561e14=_0x3d4d;let _0x196b22={'url':'https://www.weiju123.com/wxqqgy/public/index.php/Money/updateRedMoney','body':_0x561e14(0x9b)+aot+_0x561e14(0x12f),'headers':{'Cookie':ck}};$[_0x561e14(0xeb)](_0x196b22,async(_0x28d388,_0x483187,_0x11a48f)=>{const _0x25f6ad=_0x561e14;try{result=JSON[_0x25f6ad(0xa6)](_0x11a48f),console[_0x25f6ad(0x98)]('当前可提现金额：'+parseInt(result[_0x25f6ad(0xe8)][_0x25f6ad(0xe8)])/0xf4240);}catch(_0x37314f){$[_0x25f6ad(0x12e)](_0x37314f,_0x483187);}finally{_0x50aab7();}},0x0);});}function getBuild1CoinMoney(){return new Promise(_0x35e765=>{const _0x5b7ea8=_0x3d4d;let _0x266c02={'url':_0x5b7ea8(0xd1),'body':_0x5b7ea8(0x8a)+aot+'\x22}','headers':{'Cookie':ck,'Content-Type':'application/json;charset=UTF-8'}};$[_0x5b7ea8(0xeb)](_0x266c02,async(_0x217a15,_0x86104f,_0x6d1bf1)=>{const _0x56a620=_0x5b7ea8;try{console[_0x56a620(0x98)](_0x6d1bf1),result=JSON['parse'](_0x6d1bf1),result[_0x56a620(0xda)]==0x0&&await $['wait'](0x3e8);}catch(_0x28fb00){$[_0x56a620(0x12e)](_0x28fb00,_0x86104f);}finally{_0x35e765();}},0x0);});}function getWxCash(){return new Promise(_0x1564c4=>{const _0x4bdaa5=_0x3d4d;let _0x10f241={'url':_0x4bdaa5(0xad),'body':_0x4bdaa5(0xbe)+aot+_0x4bdaa5(0x12f),'headers':{'Cookie':ck,'Content-Type':_0x4bdaa5(0xe9)}};$['post'](_0x10f241,async(_0x5a00c2,_0x1e85b4,_0xe84efe)=>{const _0x112db7=_0x4bdaa5;try{console[_0x112db7(0x98)](_0xe84efe),result=JSON[_0x112db7(0xa6)](_0xe84efe);}catch(_0x122ede){$[_0x112db7(0x12e)](_0x122ede,_0x1e85b4);}finally{_0x1564c4();}},0x0);});}function cashRecord(){return new Promise(_0x589d7b=>{const _0x169962=_0x3d4d;let _0x16a31a={'url':_0x169962(0x101),'body':_0x169962(0x9b)+aot+'\x22,\x20\x22hv\x22\x20:\x20\x221.02\x22\x20}','headers':{'Cookie':ck,'Content-Type':_0x169962(0xe9)}};$[_0x169962(0xeb)](_0x16a31a,async(_0x195dd8,_0x7b0ab4,_0x397c78)=>{const _0x3f5bbd=_0x169962;try{result=JSON[_0x3f5bbd(0xa6)](_0x397c78);let _0x4b7572=result[_0x3f5bbd(0xf4)];console[_0x3f5bbd(0x98)]('\x0a提现记录');for(let _0x49a324=0x0;_0x49a324<_0x4b7572['length'];_0x49a324++){var _0x4872f5=new Date(_0x4b7572[_0x49a324][_0x3f5bbd(0x100)]*0x3e8),_0x311a23=_0x4872f5['getFullYear']()+'-'+(_0x4872f5['getMonth']()<0xa?'0'+(_0x4872f5[_0x3f5bbd(0x9d)]()+0x1):_0x4872f5[_0x3f5bbd(0x9d)]()+0x1)+'-'+(_0x4872f5[_0x3f5bbd(0x11f)]()<0xa?'0'+_0x4872f5[_0x3f5bbd(0x11f)]():_0x4872f5[_0x3f5bbd(0x11f)]());console[_0x3f5bbd(0x98)](_0x311a23+_0x3f5bbd(0xf5)+_0x4b7572[_0x49a324][_0x3f5bbd(0xe8)]);}}catch(_0x59cdba){$[_0x3f5bbd(0x12e)](_0x59cdba,_0x7b0ab4);}finally{_0x589d7b();}},0x0);});}function rand(_0x472235,_0x196345){const _0x2e8906=_0x2322bb;return parseInt(Math[_0x2e8906(0x10b)]()*(_0x196345-_0x472235+0x1)+_0x472235,0xa);}function Env(_0x51a6fb,_0x4ad09e){const _0x5233ea=_0x2322bb;class _0x2160af{constructor(_0x28fdcc){const _0x3fe868=_0x3d4d;this[_0x3fe868(0xee)]=_0x28fdcc;}[_0x5233ea(0xf1)](_0x4e4dce,_0x3f30fc='GET'){const _0x4acb15=_0x5233ea;_0x4e4dce=_0x4acb15(0xf8)==typeof _0x4e4dce?{'url':_0x4e4dce}:_0x4e4dce;let _0x4a8fa8=this[_0x4acb15(0xdd)];return _0x4acb15(0xc4)===_0x3f30fc&&(_0x4a8fa8=this[_0x4acb15(0xeb)]),new Promise((_0x285989,_0x59cbe8)=>{const _0x3c7048=_0x4acb15;_0x4a8fa8[_0x3c7048(0xfc)](this,_0x4e4dce,(_0x78820,_0x71685f,_0x234e64)=>{_0x78820?_0x59cbe8(_0x78820):_0x285989(_0x71685f);});});}[_0x5233ea(0xdd)](_0x23f04d){const _0x2653e0=_0x5233ea;return this[_0x2653e0(0xf1)][_0x2653e0(0xfc)](this['env'],_0x23f04d);}[_0x5233ea(0xeb)](_0x191310){const _0x193b94=_0x5233ea;return this[_0x193b94(0xf1)][_0x193b94(0xfc)](this[_0x193b94(0xee)],_0x191310,_0x193b94(0xc4));}}return new class{constructor(_0x13fc9f,_0x1785ee){const _0x3a4e6f=_0x5233ea;this['name']=_0x13fc9f,this[_0x3a4e6f(0xab)]=new _0x2160af(this),this[_0x3a4e6f(0xf4)]=null,this[_0x3a4e6f(0x103)]=_0x3a4e6f(0xca),this['logs']=[],this[_0x3a4e6f(0xd6)]=!0x1,this[_0x3a4e6f(0x8f)]=!0x1,this[_0x3a4e6f(0x131)]='\x0a',this[_0x3a4e6f(0x135)]=_0x3a4e6f(0x89),this[_0x3a4e6f(0xc7)]=new Date()[_0x3a4e6f(0xf0)](),Object[_0x3a4e6f(0xbb)](this,_0x1785ee),this[_0x3a4e6f(0x98)]('','🔔'+this[_0x3a4e6f(0xed)]+',\x20开始!');}[_0x5233ea(0xfa)](){const _0x2eed05=_0x5233ea;return _0x2eed05(0x91)!=typeof module&&!!module[_0x2eed05(0x117)];}[_0x5233ea(0x118)](){return'undefined'!=typeof $task;}[_0x5233ea(0xe4)](){const _0x1a4cdc=_0x5233ea;return'undefined'!=typeof $httpClient&&_0x1a4cdc(0x91)==typeof $loon;}[_0x5233ea(0xd2)](){const _0x44a32d=_0x5233ea;return _0x44a32d(0x91)!=typeof $loon;}[_0x5233ea(0x121)](){const _0x48c234=_0x5233ea;return _0x48c234(0x91)!=typeof $rocket;}[_0x5233ea(0x136)](_0x1e6cd9,_0x5bb148=null){try{return JSON['parse'](_0x1e6cd9);}catch{return _0x5bb148;}}[_0x5233ea(0x132)](_0x5675b7,_0x2fd5a6=null){const _0x4e9687=_0x5233ea;try{return JSON[_0x4e9687(0x11d)](_0x5675b7);}catch{return _0x2fd5a6;}}['getjson'](_0xd87d2e,_0x246b10){const _0x36b568=_0x5233ea;let _0x49795b=_0x246b10;const _0x1fb82d=this['getdata'](_0xd87d2e);if(_0x1fb82d)try{_0x49795b=JSON[_0x36b568(0xa6)](this['getdata'](_0xd87d2e));}catch{}return _0x49795b;}['setjson'](_0xbd2108,_0x38c8af){const _0x3ed828=_0x5233ea;try{return this['setdata'](JSON[_0x3ed828(0x11d)](_0xbd2108),_0x38c8af);}catch{return!0x1;}}[_0x5233ea(0x10f)](_0x39693e){return new Promise(_0x11f5db=>{const _0xe58fdf=_0x3d4d;this[_0xe58fdf(0xdd)]({'url':_0x39693e},(_0x1a2de2,_0x1ef89a,_0x41fb00)=>_0x11f5db(_0x41fb00));});}[_0x5233ea(0xa1)](_0x4468fb,_0x2c8796){return new Promise(_0xbf6924=>{const _0x3e545b=_0x3d4d;let _0x2c6e52=this[_0x3e545b(0xe1)](_0x3e545b(0xff));_0x2c6e52=_0x2c6e52?_0x2c6e52[_0x3e545b(0x112)](/\n/g,'')['trim']():_0x2c6e52;let _0x56310a=this[_0x3e545b(0xe1)]('@chavy_boxjs_userCfgs.httpapi_timeout');_0x56310a=_0x56310a?0x1*_0x56310a:0x14,_0x56310a=_0x2c8796&&_0x2c8796['timeout']?_0x2c8796[_0x3e545b(0x137)]:_0x56310a;const [_0x25f852,_0x51a86a]=_0x2c6e52[_0x3e545b(0x128)]('@'),_0x537051={'url':_0x3e545b(0xb5)+_0x51a86a+'/v1/scripting/evaluate','body':{'script_text':_0x4468fb,'mock_type':_0x3e545b(0xd8),'timeout':_0x56310a},'headers':{'X-Key':_0x25f852,'Accept':'*/*'}};this[_0x3e545b(0xeb)](_0x537051,(_0x3a5c14,_0xeecb09,_0x36135c)=>_0xbf6924(_0x36135c));})['catch'](_0x3e5049=>this['logErr'](_0x3e5049));}[_0x5233ea(0xb0)](){const _0x262ac3=_0x5233ea;if(!this[_0x262ac3(0xfa)]())return{};{this['fs']=this['fs']?this['fs']:require('fs'),this[_0x262ac3(0x104)]=this[_0x262ac3(0x104)]?this[_0x262ac3(0x104)]:require(_0x262ac3(0x104));const _0xd79704=this[_0x262ac3(0x104)][_0x262ac3(0x119)](this['dataFile']),_0x2d3056=this['path']['resolve'](process['cwd'](),this['dataFile']),_0xd918ff=this['fs'][_0x262ac3(0x87)](_0xd79704),_0x2b2c3b=!_0xd918ff&&this['fs'][_0x262ac3(0x87)](_0x2d3056);if(!_0xd918ff&&!_0x2b2c3b)return{};{const _0x67242e=_0xd918ff?_0xd79704:_0x2d3056;try{return JSON[_0x262ac3(0xa6)](this['fs'][_0x262ac3(0x9c)](_0x67242e));}catch(_0x18362a){return{};}}}}['writedata'](){const _0x11ef78=_0x5233ea;if(this[_0x11ef78(0xfa)]()){this['fs']=this['fs']?this['fs']:require('fs'),this[_0x11ef78(0x104)]=this[_0x11ef78(0x104)]?this['path']:require('path');const _0x3957ed=this[_0x11ef78(0x104)][_0x11ef78(0x119)](this[_0x11ef78(0x103)]),_0x798f22=this['path'][_0x11ef78(0x119)](process['cwd'](),this['dataFile']),_0x270622=this['fs'][_0x11ef78(0x87)](_0x3957ed),_0x4e2683=!_0x270622&&this['fs'][_0x11ef78(0x87)](_0x798f22),_0x4ed70a=JSON[_0x11ef78(0x11d)](this[_0x11ef78(0xf4)]);_0x270622?this['fs'][_0x11ef78(0xd3)](_0x3957ed,_0x4ed70a):_0x4e2683?this['fs'][_0x11ef78(0xd3)](_0x798f22,_0x4ed70a):this['fs'][_0x11ef78(0xd3)](_0x3957ed,_0x4ed70a);}}[_0x5233ea(0xcd)](_0x1d0734,_0x3103fd,_0x5a3d8e){const _0xd9f7fa=_0x5233ea,_0x2eae66=_0x3103fd[_0xd9f7fa(0x112)](/\[(\d+)\]/g,_0xd9f7fa(0x129))['split']('.');let _0xafcdeb=_0x1d0734;for(const _0x321df6 of _0x2eae66)if(_0xafcdeb=Object(_0xafcdeb)[_0x321df6],void 0x0===_0xafcdeb)return _0x5a3d8e;return _0xafcdeb;}[_0x5233ea(0x114)](_0x414548,_0x4625d2,_0x4f356f){const _0x3ef6c1=_0x5233ea;return Object(_0x414548)!==_0x414548?_0x414548:(Array[_0x3ef6c1(0xcf)](_0x4625d2)||(_0x4625d2=_0x4625d2[_0x3ef6c1(0x116)]()[_0x3ef6c1(0x130)](/[^.[\]]+/g)||[]),_0x4625d2['slice'](0x0,-0x1)['reduce']((_0x588541,_0x40cf15,_0x4d20ee)=>Object(_0x588541[_0x40cf15])===_0x588541[_0x40cf15]?_0x588541[_0x40cf15]:_0x588541[_0x40cf15]=Math[_0x3ef6c1(0xc3)](_0x4625d2[_0x4d20ee+0x1])>>0x0==+_0x4625d2[_0x4d20ee+0x1]?[]:{},_0x414548)[_0x4625d2[_0x4625d2[_0x3ef6c1(0x10a)]-0x1]]=_0x4f356f,_0x414548);}['getdata'](_0x1f8a7d){const _0x2ce87d=_0x5233ea;let _0x3e6344=this[_0x2ce87d(0xde)](_0x1f8a7d);if(/^@/['test'](_0x1f8a7d)){const [,_0x586ab3,_0x1f3215]=/^@(.*?)\.(.*?)$/[_0x2ce87d(0xdb)](_0x1f8a7d),_0x152ae8=_0x586ab3?this['getval'](_0x586ab3):'';if(_0x152ae8)try{const _0x26bfdf=JSON[_0x2ce87d(0xa6)](_0x152ae8);_0x3e6344=_0x26bfdf?this['lodash_get'](_0x26bfdf,_0x1f3215,''):_0x3e6344;}catch(_0x55bcb3){_0x3e6344='';}}return _0x3e6344;}[_0x5233ea(0xe6)](_0x1f64f8,_0x1e81a5){const _0x4cf6d9=_0x5233ea;let _0xaddb97=!0x1;if(/^@/[_0x4cf6d9(0xd0)](_0x1e81a5)){const [,_0x240cdf,_0x4239f4]=/^@(.*?)\.(.*?)$/['exec'](_0x1e81a5),_0x10e819=this[_0x4cf6d9(0xde)](_0x240cdf),_0x1a7124=_0x240cdf?_0x4cf6d9(0x127)===_0x10e819?null:_0x10e819||'{}':'{}';try{const _0x3ba7cb=JSON['parse'](_0x1a7124);this[_0x4cf6d9(0x114)](_0x3ba7cb,_0x4239f4,_0x1f64f8),_0xaddb97=this['setval'](JSON[_0x4cf6d9(0x11d)](_0x3ba7cb),_0x240cdf);}catch(_0x397cc3){const _0x34d9a0={};this[_0x4cf6d9(0x114)](_0x34d9a0,_0x4239f4,_0x1f64f8),_0xaddb97=this['setval'](JSON['stringify'](_0x34d9a0),_0x240cdf);}}else _0xaddb97=this[_0x4cf6d9(0x9f)](_0x1f64f8,_0x1e81a5);return _0xaddb97;}[_0x5233ea(0xde)](_0x134d7f){const _0x4734a2=_0x5233ea;return this[_0x4734a2(0xe4)]()||this[_0x4734a2(0xd2)]()?$persistentStore[_0x4734a2(0xc6)](_0x134d7f):this['isQuanX']()?$prefs[_0x4734a2(0xce)](_0x134d7f):this[_0x4734a2(0xfa)]()?(this['data']=this[_0x4734a2(0xb0)](),this[_0x4734a2(0xf4)][_0x134d7f]):this[_0x4734a2(0xf4)]&&this['data'][_0x134d7f]||null;}[_0x5233ea(0x9f)](_0x3563b6,_0x3b51b3){const _0x243b63=_0x5233ea;return this[_0x243b63(0xe4)]()||this[_0x243b63(0xd2)]()?$persistentStore[_0x243b63(0x133)](_0x3563b6,_0x3b51b3):this[_0x243b63(0x118)]()?$prefs[_0x243b63(0xa8)](_0x3563b6,_0x3b51b3):this[_0x243b63(0xfa)]()?(this[_0x243b63(0xf4)]=this[_0x243b63(0xb0)](),this['data'][_0x3b51b3]=_0x3563b6,this[_0x243b63(0xdf)](),!0x0):this[_0x243b63(0xf4)]&&this[_0x243b63(0xf4)][_0x3b51b3]||null;}[_0x5233ea(0xa3)](_0x3ada00){const _0x2cc7de=_0x5233ea;this[_0x2cc7de(0x115)]=this[_0x2cc7de(0x115)]?this['got']:require('got'),this[_0x2cc7de(0x122)]=this['cktough']?this[_0x2cc7de(0x122)]:require('tough-cookie'),this[_0x2cc7de(0xa5)]=this[_0x2cc7de(0xa5)]?this[_0x2cc7de(0xa5)]:new this[(_0x2cc7de(0x122))][(_0x2cc7de(0xd9))](),_0x3ada00&&(_0x3ada00[_0x2cc7de(0x88)]=_0x3ada00[_0x2cc7de(0x88)]?_0x3ada00['headers']:{},void 0x0===_0x3ada00['headers']['Cookie']&&void 0x0===_0x3ada00['cookieJar']&&(_0x3ada00[_0x2cc7de(0xdc)]=this['ckjar']));}['get'](_0x38eec9,_0x2e4c4c=()=>{}){const _0x49162d=_0x5233ea;if(_0x38eec9[_0x49162d(0x88)]&&(delete _0x38eec9[_0x49162d(0x88)][_0x49162d(0xbf)],delete _0x38eec9[_0x49162d(0x88)][_0x49162d(0x99)]),this['isSurge']()||this[_0x49162d(0xd2)]())this[_0x49162d(0xe4)]()&&this[_0x49162d(0x8f)]&&(_0x38eec9[_0x49162d(0x88)]=_0x38eec9[_0x49162d(0x88)]||{},Object[_0x49162d(0xbb)](_0x38eec9[_0x49162d(0x88)],{'X-Surge-Skip-Scripting':!0x1})),$httpClient[_0x49162d(0xdd)](_0x38eec9,(_0xf6fd7,_0x5dea6f,_0x1e5ed9)=>{const _0x230518=_0x49162d;!_0xf6fd7&&_0x5dea6f&&(_0x5dea6f[_0x230518(0x113)]=_0x1e5ed9,_0x5dea6f[_0x230518(0xae)]=_0x5dea6f['status']),_0x2e4c4c(_0xf6fd7,_0x5dea6f,_0x1e5ed9);});else{if(this[_0x49162d(0x118)]())this[_0x49162d(0x8f)]&&(_0x38eec9[_0x49162d(0xc2)]=_0x38eec9[_0x49162d(0xc2)]||{},Object['assign'](_0x38eec9[_0x49162d(0xc2)],{'hints':!0x1})),$task[_0x49162d(0x111)](_0x38eec9)[_0x49162d(0xcb)](_0x2c7e89=>{const {statusCode:_0xe083d2,statusCode:_0x1973cd,headers:_0x3e486a,body:_0x1da8d7}=_0x2c7e89;_0x2e4c4c(null,{'status':_0xe083d2,'statusCode':_0x1973cd,'headers':_0x3e486a,'body':_0x1da8d7},_0x1da8d7);},_0x3c39f3=>_0x2e4c4c(_0x3c39f3));else{if(this[_0x49162d(0xfa)]()){let _0x22af62=require(_0x49162d(0x12a));this[_0x49162d(0xa3)](_0x38eec9),this[_0x49162d(0x115)](_0x38eec9)['on'](_0x49162d(0xea),(_0xf0c209,_0x3742b2)=>{const _0x51fb05=_0x49162d;try{if(_0xf0c209[_0x51fb05(0x88)][_0x51fb05(0x123)]){const _0x5db2a3=_0xf0c209[_0x51fb05(0x88)][_0x51fb05(0x123)][_0x51fb05(0xaf)](this[_0x51fb05(0x122)]['Cookie'][_0x51fb05(0xa6)])[_0x51fb05(0x116)]();_0x5db2a3&&this[_0x51fb05(0xa5)][_0x51fb05(0x126)](_0x5db2a3,null),_0x3742b2['cookieJar']=this[_0x51fb05(0xa5)];}}catch(_0x28241a){this[_0x51fb05(0x12e)](_0x28241a);}})[_0x49162d(0xcb)](_0x32cee3=>{const _0x3da7a5=_0x49162d,{statusCode:_0x33ac19,statusCode:_0x428737,headers:_0xf8417,rawBody:_0x297bdc}=_0x32cee3;_0x2e4c4c(null,{'status':_0x33ac19,'statusCode':_0x428737,'headers':_0xf8417,'rawBody':_0x297bdc},_0x22af62[_0x3da7a5(0x11b)](_0x297bdc,this[_0x3da7a5(0x135)]));},_0xf3687f=>{const _0x55f4fc=_0x49162d,{message:_0x57f71f,response:_0x294d86}=_0xf3687f;_0x2e4c4c(_0x57f71f,_0x294d86,_0x294d86&&_0x22af62[_0x55f4fc(0x11b)](_0x294d86[_0x55f4fc(0xd4)],this['encoding']));});}}}}[_0x5233ea(0xeb)](_0x1d2156,_0x167e27=()=>{}){const _0x4d2828=_0x5233ea,_0x5bae8b=_0x1d2156[_0x4d2828(0xac)]?_0x1d2156[_0x4d2828(0xac)][_0x4d2828(0x106)]():_0x4d2828(0xeb);if(_0x1d2156[_0x4d2828(0x113)]&&_0x1d2156[_0x4d2828(0x88)]&&!_0x1d2156[_0x4d2828(0x88)][_0x4d2828(0xbf)]&&(_0x1d2156[_0x4d2828(0x88)][_0x4d2828(0xbf)]='application/x-www-form-urlencoded'),_0x1d2156[_0x4d2828(0x88)]&&delete _0x1d2156[_0x4d2828(0x88)]['Content-Length'],this[_0x4d2828(0xe4)]()||this[_0x4d2828(0xd2)]())this[_0x4d2828(0xe4)]()&&this['isNeedRewrite']&&(_0x1d2156[_0x4d2828(0x88)]=_0x1d2156['headers']||{},Object[_0x4d2828(0xbb)](_0x1d2156[_0x4d2828(0x88)],{'X-Surge-Skip-Scripting':!0x1})),$httpClient[_0x5bae8b](_0x1d2156,(_0xd13c9b,_0x3c1845,_0x3585aa)=>{const _0x2ec4cb=_0x4d2828;!_0xd13c9b&&_0x3c1845&&(_0x3c1845['body']=_0x3585aa,_0x3c1845[_0x2ec4cb(0xae)]=_0x3c1845[_0x2ec4cb(0x108)]),_0x167e27(_0xd13c9b,_0x3c1845,_0x3585aa);});else{if(this[_0x4d2828(0x118)]())_0x1d2156[_0x4d2828(0xac)]=_0x5bae8b,this[_0x4d2828(0x8f)]&&(_0x1d2156['opts']=_0x1d2156[_0x4d2828(0xc2)]||{},Object['assign'](_0x1d2156['opts'],{'hints':!0x1})),$task[_0x4d2828(0x111)](_0x1d2156)[_0x4d2828(0xcb)](_0x5df2a2=>{const {statusCode:_0x39a809,statusCode:_0x423045,headers:_0x274a2a,body:_0x4067cf}=_0x5df2a2;_0x167e27(null,{'status':_0x39a809,'statusCode':_0x423045,'headers':_0x274a2a,'body':_0x4067cf},_0x4067cf);},_0x10bf5c=>_0x167e27(_0x10bf5c));else{if(this[_0x4d2828(0xfa)]()){let _0x422561=require(_0x4d2828(0x12a));this['initGotEnv'](_0x1d2156);const {url:_0x759d8,..._0x1c086b}=_0x1d2156;this[_0x4d2828(0x115)][_0x5bae8b](_0x759d8,_0x1c086b)[_0x4d2828(0xcb)](_0x402f82=>{const _0x23c45c=_0x4d2828,{statusCode:_0x1c1e13,statusCode:_0x586b5d,headers:_0x6e012f,rawBody:_0x144cba}=_0x402f82;_0x167e27(null,{'status':_0x1c1e13,'statusCode':_0x586b5d,'headers':_0x6e012f,'rawBody':_0x144cba},_0x422561[_0x23c45c(0x11b)](_0x144cba,this[_0x23c45c(0x135)]));},_0x2405bf=>{const _0x3c6c99=_0x4d2828,{message:_0x5c1f50,response:_0xa52cd4}=_0x2405bf;_0x167e27(_0x5c1f50,_0xa52cd4,_0xa52cd4&&_0x422561['decode'](_0xa52cd4['rawBody'],this[_0x3c6c99(0x135)]));});}}}}['time'](_0x1dfeef,_0x1ce29f=null){const _0x4dc67a=_0x5233ea,_0x5c9ba2=_0x1ce29f?new Date(_0x1ce29f):new Date();let _0x5652f5={'M+':_0x5c9ba2[_0x4dc67a(0x9d)]()+0x1,'d+':_0x5c9ba2[_0x4dc67a(0x11f)](),'H+':_0x5c9ba2[_0x4dc67a(0x10d)](),'m+':_0x5c9ba2[_0x4dc67a(0x11c)](),'s+':_0x5c9ba2['getSeconds'](),'q+':Math[_0x4dc67a(0xec)]((_0x5c9ba2[_0x4dc67a(0x9d)]()+0x3)/0x3),'S':_0x5c9ba2[_0x4dc67a(0xb1)]()};/(y+)/['test'](_0x1dfeef)&&(_0x1dfeef=_0x1dfeef[_0x4dc67a(0x112)](RegExp['$1'],(_0x5c9ba2['getFullYear']()+'')['substr'](0x4-RegExp['$1'][_0x4dc67a(0x10a)])));for(let _0x1bef35 in _0x5652f5)new RegExp('('+_0x1bef35+')')[_0x4dc67a(0xd0)](_0x1dfeef)&&(_0x1dfeef=_0x1dfeef[_0x4dc67a(0x112)](RegExp['$1'],0x1==RegExp['$1'][_0x4dc67a(0x10a)]?_0x5652f5[_0x1bef35]:('00'+_0x5652f5[_0x1bef35])['substr']((''+_0x5652f5[_0x1bef35])[_0x4dc67a(0x10a)])));return _0x1dfeef;}[_0x5233ea(0xb7)](_0x61871a=_0x51a6fb,_0x47a8f4='',_0x44bfd7='',_0x14f317){const _0x40705f=_0x5233ea,_0x48c431=_0x7420a5=>{const _0x4f8306=_0x3d4d;if(!_0x7420a5)return _0x7420a5;if(_0x4f8306(0xf8)==typeof _0x7420a5)return this[_0x4f8306(0xd2)]()?_0x7420a5:this['isQuanX']()?{'open-url':_0x7420a5}:this[_0x4f8306(0xe4)]()?{'url':_0x7420a5}:void 0x0;if(_0x4f8306(0x8e)==typeof _0x7420a5){if(this[_0x4f8306(0xd2)]()){let _0x416748=_0x7420a5[_0x4f8306(0xba)]||_0x7420a5['url']||_0x7420a5[_0x4f8306(0xc9)],_0x1a29ed=_0x7420a5[_0x4f8306(0x10e)]||_0x7420a5[_0x4f8306(0xf2)];return{'openUrl':_0x416748,'mediaUrl':_0x1a29ed};}if(this[_0x4f8306(0x118)]()){let _0xd65fea=_0x7420a5[_0x4f8306(0xc9)]||_0x7420a5['url']||_0x7420a5[_0x4f8306(0xba)],_0x2f7a0f=_0x7420a5[_0x4f8306(0xf2)]||_0x7420a5[_0x4f8306(0x10e)];return{'open-url':_0xd65fea,'media-url':_0x2f7a0f};}if(this[_0x4f8306(0xe4)]()){let _0x55f09c=_0x7420a5['url']||_0x7420a5[_0x4f8306(0xba)]||_0x7420a5[_0x4f8306(0xc9)];return{'url':_0x55f09c};}}};if(this[_0x40705f(0xd6)]||(this['isSurge']()||this['isLoon']()?$notification[_0x40705f(0xeb)](_0x61871a,_0x47a8f4,_0x44bfd7,_0x48c431(_0x14f317)):this[_0x40705f(0x118)]()&&$notify(_0x61871a,_0x47a8f4,_0x44bfd7,_0x48c431(_0x14f317))),!this[_0x40705f(0xb4)]){let _0x666e4b=['',_0x40705f(0x9e)];_0x666e4b['push'](_0x61871a),_0x47a8f4&&_0x666e4b[_0x40705f(0x120)](_0x47a8f4),_0x44bfd7&&_0x666e4b['push'](_0x44bfd7),console[_0x40705f(0x98)](_0x666e4b[_0x40705f(0x124)]('\x0a')),this[_0x40705f(0xa2)]=this[_0x40705f(0xa2)][_0x40705f(0xc1)](_0x666e4b);}}[_0x5233ea(0x98)](..._0x337a8e){const _0x3e405b=_0x5233ea;_0x337a8e['length']>0x0&&(this[_0x3e405b(0xa2)]=[...this[_0x3e405b(0xa2)],..._0x337a8e]),console['log'](_0x337a8e[_0x3e405b(0x124)](this[_0x3e405b(0x131)]));}[_0x5233ea(0x12e)](_0x746b42,_0x182d7b){const _0x178f51=_0x5233ea,_0xd888ab=!this[_0x178f51(0xe4)]()&&!this[_0x178f51(0x118)]()&&!this[_0x178f51(0xd2)]();_0xd888ab?this[_0x178f51(0x98)]('','❗️'+this[_0x178f51(0xed)]+',\x20错误!',_0x746b42[_0x178f51(0xfd)]):this['log']('','❗️'+this[_0x178f51(0xed)]+_0x178f51(0x13a),_0x746b42);}['wait'](_0xde63d0){return new Promise(_0x2cce4c=>setTimeout(_0x2cce4c,_0xde63d0));}[_0x5233ea(0x8b)](_0x5ace10={}){const _0x2a9cec=_0x5233ea,_0xce1409=new Date()[_0x2a9cec(0xf0)](),_0x29902f=(_0xce1409-this[_0x2a9cec(0xc7)])/0x3e8;this[_0x2a9cec(0x98)]('','🔔'+this[_0x2a9cec(0xed)]+_0x2a9cec(0x8d)+_0x29902f+'\x20秒'),this[_0x2a9cec(0x98)](),(this[_0x2a9cec(0xe4)]()||this[_0x2a9cec(0x118)]()||this[_0x2a9cec(0xd2)]())&&$done(_0x5ace10);}}(_0x51a6fb,_0x4ad09e);}