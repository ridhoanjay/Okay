require("./settings");
const {
  default: rxhlConnect,
  makeWASocket,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion,
  generateForwardMessageContent,
  prepareWAMessageMedia,
  generateWAMessageFromContent,
  generateMessageID,
  downloadContentFromMessage,
  makeInMemoryStore,
  jidDecode,
  proto,
  getAggregateVotesInPollMessage
} = global.baileys1;
const pino = require("pino");
const {
  Boom
} = require("@hapi/boom");
const fs = require('fs');
const FileType = require("file-type");
const readline = require("readline");
const path = require("path");
const NodeCache = require("node-cache");
const {
  smsg,
  isUrl,
  generateMessageTag,
  getBuffer,
  getSizeMedia,
  fetchJson,
  await,
  sleep
} = require("./lib/storage");
const {
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid
} = require("./lib/exif");
const _0x42637b = {
  level: "silent",
  stream: "store"
};
const store = makeInMemoryStore({
  'logger': pino().child(_0x42637b)
});
const rxhlimage = fs.readFileSync("./lib/image/rxhl.jpg");
const axios = require("axios");
const question = _0x5e0c23 => {
  const _0x2417f5 = {
    input: process.stdin,
    output: process.stdout
  };
  const _0x5ae375 = readline.createInterface(_0x2417f5);
  return new Promise(_0x3cc46f => {
    _0x5ae375.question(_0x5e0c23, _0x3cc46f);
  });
};
function generateOTP(_0x2ebd77) {
  let _0x3e2bd0 = '';
  for (let _0x2a541f = 0; _0x2a541f < _0x2ebd77; _0x2a541f++) {
    _0x3e2bd0 += Math.floor(Math.random() * 10).toString();
  }
  return _0x3e2bd0;
}
async function connectToWhatsApp() {
  const {
    state: _0x765a1a,
    saveCreds: _0x2e0744
  } = await useMultiFileAuthState("./lib/ddos/ddosaja/");
  const {
    version: _0x1de184,
    isLatest: _0x5b40c1
  } = await fetchLatestBaileysVersion();
  const _0xad5a76 = new NodeCache();
  const _0xe813a5 = makeWASocket({
    'isLatest': _0x5b40c1,
    'keepAliveIntervalMs': 0xc350,
    'printQRInTerminal': false,
    'logger': pino({
      'level': "silent"
    }),
    'auth': _0x765a1a,
    'browser': ["Mac Os", "chrome", "121.0.6167.159"],
    'version': [2, 2413, 1],
    'generateHighQualityLinkPreview': true,
    'resolveMsgBuffer': _0xad5a76
  });
  if (true && !_0xe813a5.authState.creds.registered) {
      console.log("Connecting bots..");
      await sleep(500);
    const _0x2fb852 = await question("Cracked By: NeroUwU. mohon di masukin gan nomor bot lu supaya terhubung dengan Rxhl Bot di awali dengan Kode Negara:\n");
    const _0x2f4b52 = await _0xe813a5.requestPairingCode(_0x2fb852.trim());
    console.log("Pairing code: " + _0x2f4b52);
  }
  store.bind(_0xe813a5.ev);
  _0xe813a5.ev.on("call", async _0x606b5f => {
    console.log("ada anak anjing nelpon lu");
  });
  _0xe813a5.decodeJid = _0x2b6f33 => {
    if (!_0x2b6f33) {
      return _0x2b6f33;
    }
    if (/:\d+@/gi.test(_0x2b6f33)) {
      let _0x3d5c39 = jidDecode(_0x2b6f33) || {};
      return _0x3d5c39.user && _0x3d5c39.server && _0x3d5c39.user + '@' + _0x3d5c39.server || _0x2b6f33;
    } else {
      return _0x2b6f33;
    }
  };
  _0xe813a5.getFile = async (_0x304e61, _0x2fbdff) => {
    let _0x32392e;
    let _0x41ba31 = Buffer.isBuffer(_0x304e61) ? _0x304e61 : /^data:.*?\/.*?;base64,/i.test(_0x304e61) ? Buffer.from(_0x304e61.split`,`[1], "base64") : /^https?:\/\//.test(_0x304e61) ? await (_0x32392e = await getBuffer(_0x304e61)) : fs.existsSync(_0x304e61) ? (filename = _0x304e61, fs.readFileSync(_0x304e61)) : typeof _0x304e61 === "string" ? _0x304e61 : Buffer.alloc(0);
    const _0x5eb08c = {
      mime: "application/octet-stream",
      ext: ".bin"
    };
    let _0xf2b380 = (await FileType.fromBuffer(_0x41ba31)) || _0x5eb08c;
    filename = path.join(__filename, "../" + new Date() * 1 + '.' + _0xf2b380.ext);
    if (_0x41ba31 && _0x2fbdff) {
      fs.promises.writeFile(filename, _0x41ba31);
    }
    return {
      'res': _0x32392e,
      'filename': filename,
      'size': await getSizeMedia(_0x41ba31),
      ..._0xf2b380,
      'data': _0x41ba31
    };
  };
  _0xe813a5.nampil = async (_0x622786, _0x2e777a, _0x5e5d3) => {
    const _0x8c22f0 = {
      mentionedJid: [m.sender],
      externalAdReply: {}
    };
    _0x8c22f0.externalAdReply.showAdAttribution = false;
    _0x8c22f0.externalAdReply.renderLargerThumbnail = false;
    _0x8c22f0.externalAdReply.title = "© RxhlOfc";
    _0x8c22f0.externalAdReply.body = "Halo " + m.pushName + " 👋";
    _0x8c22f0.externalAdReply.previewType = "VIDEO";
    _0x8c22f0.externalAdReply.thumbnail = rxhlimage;
    _0x8c22f0.externalAdReply.sourceUrl = "https://youtube.com/@rxhlofc";
    _0x8c22f0.externalAdReply.mediaUrl = "https://youtube.com/@rxhlofc";
    const _0xe207f2 = {
      text: _0x622786,
      contextInfo: _0x8c22f0,
      text: _0x622786
    };
    const _0x213495 = {
      quoted: _0x5e5d3
    };
    _0xe813a5.sendMessage(_0x2e777a, _0xe207f2, _0x213495);
  };
  _0xe813a5.downloadMediaMessage = async _0x289a2d => {
    let _0x31e5e2 = (_0x289a2d.msg || _0x289a2d).mimetype || '';
    let _0x5e68d6 = _0x289a2d.mtype ? _0x289a2d.mtype.replace(/Message/gi, '') : _0x31e5e2.split('/')[0];
    const _0xbe1cc0 = await downloadContentFromMessage(_0x289a2d, _0x5e68d6);
    let _0x52ae96 = Buffer.from([]);
    for await (const _0x2eb5e2 of _0xbe1cc0) {
      _0x52ae96 = Buffer.concat([_0x52ae96, _0x2eb5e2]);
    }
    return _0x52ae96;
  };
  _0xe813a5.sendText = (_0xbc8bf5, _0x5716ae, _0x5a3781 = '', _0x49c3c8) => _0xe813a5.sendMessage(_0xbc8bf5, {
    'text': _0x5716ae,
    ..._0x49c3c8
  }, {
    'quoted': _0x5a3781
  });
  _0xe813a5.sendImageAsSticker = async (_0x564a94, _0x2cc396, _0x4dca82, _0x2657fa = {}) => {
    let _0xc5b304 = Buffer.isBuffer(_0x2cc396) ? _0x2cc396 : /^data:.*?\/.*?;base64,/i.test(_0x2cc396) ? Buffer.from(_0x2cc396.split`,`[1], "base64") : /^https?:\/\//.test(_0x2cc396) ? await await getBuffer(_0x2cc396) : fs.existsSync(_0x2cc396) ? fs.readFileSync(_0x2cc396) : Buffer.alloc(0);
    let _0x4e7247;
    if (_0x2657fa && (_0x2657fa.packname || _0x2657fa.author)) {
      _0x4e7247 = await writeExifImg(_0xc5b304, _0x2657fa);
    } else {
      _0x4e7247 = await imageToWebp(_0xc5b304);
    }
    const _0x293f43 = {
      url: _0x4e7247
    };
    const _0x4557a4 = {
      'sticker': _0x293f43,
      ..._0x2657fa
    };
    const _0x27b967 = {
      quoted: _0x4dca82
    };
    await _0xe813a5.sendMessage(_0x564a94, _0x4557a4, _0x27b967);
    return _0x4e7247;
  };
  _0xe813a5.sendVideoAsSticker = async (_0x18d923, _0x4d9329, _0x35d4ce, _0x4aa38a = {}) => {
    let _0x15c90c = Buffer.isBuffer(_0x4d9329) ? _0x4d9329 : /^data:.*?\/.*?;base64,/i.test(_0x4d9329) ? Buffer.from(_0x4d9329.split`,`[1], "base64") : /^https?:\/\//.test(_0x4d9329) ? await await getBuffer(_0x4d9329) : fs.existsSync(_0x4d9329) ? fs.readFileSync(_0x4d9329) : Buffer.alloc(0);
    let _0x374b92;
    if (_0x4aa38a && (_0x4aa38a.packname || _0x4aa38a.author)) {
      _0x374b92 = await writeExifVid(_0x15c90c, _0x4aa38a);
    } else {
      _0x374b92 = await videoToWebp(_0x15c90c);
    }
    const _0x5190c0 = {
      url: _0x374b92
    };
    const _0x9b9ba1 = {
      'sticker': _0x5190c0,
      ..._0x4aa38a
    };
    const _0x491285 = {
      quoted: _0x35d4ce
    };
    await _0xe813a5.sendMessage(_0x18d923, _0x9b9ba1, _0x491285);
    return _0x374b92;
  };
  _0xe813a5.downloadAndSaveMediaMessage = async (_0x6d214c, _0x25621e, _0x32186d = true) => {
    let _0x1278c2 = _0x6d214c.msg ? _0x6d214c.msg : _0x6d214c;
    let _0x1f792a = (_0x6d214c.msg || _0x6d214c).mimetype || '';
    let _0x56b097 = _0x6d214c.mtype ? _0x6d214c.mtype.replace(/Message/gi, '') : _0x1f792a.split('/')[0];
    const _0x5616d0 = await downloadContentFromMessage(_0x1278c2, _0x56b097);
    let _0x2861f9 = Buffer.from([]);
    for await (const _0x430b16 of _0x5616d0) {
      _0x2861f9 = Buffer.concat([_0x2861f9, _0x430b16]);
    }
    let _0xf12496 = await FileType.fromBuffer(_0x2861f9);
    trueFileName = _0x32186d ? _0x25621e + '.' + _0xf12496.ext : _0x25621e;
    await fs.writeFileSync(trueFileName, _0x2861f9);
    return trueFileName;
  };
  _0xe813a5.ev.on("messages.upsert", async _0x19bb31 => {
    try {
      mek = _0x19bb31.messages[0];
      if (!mek.message) {
        return;
      }
      mek.message = Object.keys(mek.message)[0] === "ephemeralMessage" ? mek.message.ephemeralMessage.message : mek.message;
      if (mek.key && mek.key.remoteJid === "status@broadcast") {
        return;
      }
      if (!_0xe813a5["public"] && !mek.key.fromMe && _0x19bb31.type === "notify") {
        return;
      }
      if (mek.key.id.startsWith("BAE5") && mek.key.id.length === 16) {
        return;
      }
      m = smsg(_0xe813a5, mek, store);
      require("./comment")(_0xe813a5, m, _0x19bb31, store);
    } catch (_0xdd2873) {
      console.log(_0xdd2873);
    }
  });
  _0xe813a5["public"] = true;
  _0xe813a5.serializeM = _0x4478f5 => smsg(_0xe813a5, _0x4478f5, store);
  _0xe813a5.ev.on("connection.update", async _0x449142 => {
    const {
      connection: _0x13ba50,
      isOnline: _0x13bfc9,
      lastDisconnect: _0x353c4e
    } = _0x449142;
    try {
      if (_0x13ba50 === "close") {
        let _0xd73e12 = new Boom(_0x353c4e?.["error"])?.["output"]["statusCode"];
        if (_0xd73e12 === DisconnectReason.badSession) {
          console.log("Bad Session File, Please Delete Session and Scan Again");
          connectToWhatsApp();
        } else {
          if (_0xd73e12 === DisconnectReason.connectionClosed) {
            console.log("Connection closed, reconnecting....");
            connectToWhatsApp();
          } else {
            if (_0xd73e12 === DisconnectReason.connectionLost) {
              console.log("Connection Lost from Server, reconnecting...");
              connectToWhatsApp();
            } else {
              if (_0xd73e12 === DisconnectReason.connectionReplaced) {
                console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First");
                connectToWhatsApp();
              } else {
                if (_0xd73e12 === DisconnectReason.loggedOut) {
                  console.log("Device Logged Out, Please Delete Session and Scan Again.");
                  connectToWhatsApp();
                } else {
                  if (_0xd73e12 === DisconnectReason.restartRequired) {
                    console.log("Restart Required, Restarting...");
                    connectToWhatsApp();
                  } else {
                    if (_0xd73e12 === DisconnectReason.timedOut) {
                      console.log("Connection TimedOut, Reconnecting...");
                      connectToWhatsApp();
                    } else {
                      _0xe813a5.end("Unknown DisconnectReason: " + _0xd73e12 + '|' + _0x13ba50);
                    }
                  }
                }
              }
            }
          }
        }
      }
      if (_0x449142.connection == "connecting" || _0x449142.receivedPendingNotifications == "false") {
        if (_0x13bfc9 == true) {
          console.log("Status Aktif");
        }
      }
      if (_0x449142.connection == "open" || _0x449142.receivedPendingNotifications == "true") {
        console.log("[ Connected ] connetion update");
        await sleep(5000);
      }
    } catch (_0x17d639) {
      console.log("Error in Connection.update " + _0x17d639);
      connectToWhatsApp();
    }
  });
  _0xe813a5.ev.on("creds.update", _0x2e0744);
}
function _0x16b1() {
  const _0x41e5d6 = ['EmowWO4DWQC', 'eCkEutVdIG', 'o20qW5tdKq', 'hYdcISktW5C', 'lW3cOYm', 'xCosDrNdIq', 'W67dV8kMW6q6', 'W6yaW4/dSeW', 'WRncfmkJWPi', 'W5lcGCoqW6VdHSo9qmoeWPRcTSoQWQK', 'B8oXW7ddL8oK', 'WOxdJmoev3K', 'WOddRLWdW4C', 'WOhdGmovzK8', 'W5asW5ddQcu', 'WOVdR8kxWPxcQa', 'W5TtWPK', 'esfXsCkC', 'FmoNAHZdQG', 'W6u/k8kdeG', 'W4mRfSkUkW', 'W4rxaSkjWPe', 'CmknWPhcMSky', 'WRVdS8kfWRNcLq', 'W7jkWR8xWRK', '8yAvGVcCHOlWT5wf8jgPJmoK', 'jcFcQa8o', 'v8ohWP04WOK', 'W7FcJCkwxbq', 'jHNcRW', 'W5ThW7/cTa8', 'uaOFW49D', 'WR7cO8oNrJ0', 'WQNdP3nzWP8', 'W49cW6dcLsG', 'sSodBGddHG', 'AsRdVHei', 'fmoTW6KsWQa', 'fgpdNSkQW50', 'ymoFW4ddJCoL', 'WQDrb8oKW5e', 'p8oEW7ywW74', 'W6Hjs8oyWQC', 'oX7cOIOX', 'WQOBigK/', 'e8ors37dHq', 'WQ7cNa4yEa', 'WPddVa/dPCoK', 'W6ZcJq3dOZW', 'WR3cKmowtGC', 'o2WEW6dcTa', 'Ad7cHWqi', 'WR8EgCoIW7C', 'WRxdJvFdRdG', 'W5zsWPRdPLG', 'W797fG', 'ubBdHZ4N', 'W4pdK1pcGCkP', 'WONdPNecW7K', 'W4a0WPK', 'lWHbpCkq', 'W70GmSkDka', 'W4JcP1VdSmoXW6y3sGm', 'oHFcOZKF', 'W4zYWP01pq', 'W6LCWPyyWP4', 'WRJcGMtdQYa', 'W6/dMXlcImkr', 'uCoiWP0dWOe', 'W57dSSoUWO5E', 'WQJdUHNdUCo2', 'h0xdHmk3W54', 'W4nrASo/WPq', 'BCozW6ldICoo', 'WQRdTM5SWRK', 'WQBcQXhdU8k1', 'WOtdL8khWRVcIG', 'W4a+WPdcKCom', 'WRpcJbqmAa', '8lMNRpcHHl/XG6Ic8kY3IIm', 'hh7dHCkUW7y', 'gx3dM8oGya', 'W60XnCkxaG', 'W7pdGmkLW7Gk', 'WO3cVtJdU8kP', 'cNCdW6hdQa', 'WPdcQCo6wZK', 'W6DxWOa4', 'W5HgW6hdJ0m', 'hh7dHCkU', 'WPXwWO7dQCks', 'WOTQsWb7', 'jSoGW6yuWQy', 'W7ZdPmojWPjU', 'oSk5W5tcMCoF', 'EezmW4Db', 'WPJdJmkbWQZcKq', 'W5vzumoiWOK', 'EcxcNSkoW4G', 'W6hcJSoyBtq', 'EIRcLSktW4O', 'oSomWRLEW40', 'W6m0WQpdNmkE', 'WP4keSoLW4S', 'pmkBW4lcUSoV', 'WQiLeu02', 'W6zYWP01jq', 'W6Wup8kpeG', 'DqFcHSkEW5G', 'F8kCWO3cT8kf', 'bKi4W5/dUW', 'lCkvW6lcQ8k9', 'WRPREG', 'BsddVZi/', 'p8oWW4ynWPS', 'nqTsFSk7', 'W6v7WPiYWPG', 'W7VdJmkXW7Sf', 'rKznW4jf', 'WO3dPgvFWRu', 'WRldL8oYlsa', 'WPJdNxeAW40', 'zXZcOYnX', 'WPRcQCo9BJe', 'WRtdNu4gW6y', 'rLDVW5vj', 'iHvhEmkS', 'W7/dRSosWPPE', 'W4pcV0xdJ8oY', 'WRpcGCoDChi', 'ySopWOKbWOS', 'W5ZdSSoeWOfs', 'WQxdP3nWWQK', 'W40QmSkxaa', 'gYhdKmkcWPy', 'W6ldG8k7W6q', 'W4lcVmo+WPHY', 'W6mseCkz', 'ka/cVciN', 'WOXlyJjq', 'F8kEWPxcN8ko', 'W6FdRalcLCkH', 'yKxcSmogEG', 'W515f8o1aa', 'BCoeW53dI8oT', 'W77dI2DmW6a', 'W6vvWPBcTeC', 'zCofWO8h', 'WPKhfSoYW5y', 'WObNW4tcKmoy', 'ymo5WOS6WOS', 'WPtdUJJdOCoZ', 'ymokW4xdJG', 'lGjD', 'WOJdNwq7W40', 'WQVcGtRdQSkc', 'j8oAWQPZW6e', 'WPxcUmo9wcS', 'W6Psi8kcWPa', 'W4vjWP3cSMq', 'W61ti1W', 'ASomWQHzW4m', 'WQhcT1b5WQm', 'WRxdLCo4ChS', 'W71cWPuAla', 'W7ZdRSoCWPTr', 'WQj+W53cJ8oy', 'sIhcK8kIWPy', 'kCkCxNxcIq', 'W7qTlmkUea', 'W6hdKrJcKSke', 'W4XxB8o/WOq', 'cL7dNCktW6m', 'WO7cUmoOxc0', 'WPmNcmoAsq', 'WRtdV10EW60', 'WQVdUw15WRm', 'WOzFW6BcJCoL', 'W4i8W57cLCox', 'CfFcR8omDW', 'baZcUJWj', 'f2NdMCkWW5O', 'WQRcQX3dGCk4', 'fmo8W6mzWPG', 'W5O2o8oXsq', 'WQ3dSgv4WPy', 'AIJdIWyh', 'WOtcRCoUysW', 'W6S2l8kyaG', 'WQzwxGzB', 'WRxdTJfOWQq', 'W7JdQCojWP9p', 'W61JW5RcM1a', 'W5DzWQ7dS8kn', 'W4GPWQVcO8oI', 'WO/cKbVdTGa', 'stNdNSoFFW', 'k2brW4ddVW', 'W4KRWPBcK8ov', 'yZ7dMrqf', 'WQpdO8kQWPNcUa', 'dKmsW6BdRW', 'WPtdTrNdHCo8', 'W48Eh04Q', 'W5yjWQBcM8ol', 'W6NdJmk7W7Wo', 'W793WRuVWOu', 'EmopWPjtW4i', 'W4nBCCoyWRu', 'WPxdOsldLmo7', 'CNBcQmorva', 'CSopWPiDWO0', 'EZldLGat', 'yr3dPq', 'kHPHumkS', 'sSkhW7bBW5G', 'yH7dGI0N', 'W7X6fmk/WO4', 'W7W7WQpdOmkf', 'f8k6rvhdRG', 'W5e3WPS8lG', 'fIb9r8k/', 'u37cJG', 'WORdMgOzW5O', 'AZZdT8oFwG', 'W7JdMCk9W6io', 'W45XW7ZcQJG', 'W5T8WR0ona', 'WP3dRxi/W4S', 'W6jsWPxcQgq', 'oe3dR8o2', 'W6xdJmk+W5ep', 'W7f9h8k1', 'WQpdKSo0Bq', 'W7pcHgRcOda', 'WPJdTCkdWQRcMq', 'W594WQGpgG', 'WQFdLmo0Bge', 'W7BdMWxcLq', 'DmkTWQFcMSkM', 'WQVdTrRdMSoK', 'WOddM2i', 'WQ51WOVdG8kc', 'W6FWNRoI', 'n8kjt1ldNq', 'W4xcISotEbq', 'W6RdJ8oeWPL/', 'WR89ewS1', 'W6hdSZ/cO8ke', 'W5SwWOpcPSov', 'W5LgWQuUmq', 'W553WP/cKNK', 'W5b5WOFcN0u', 'CbFcRNXN', 'WOJcJ0pcJ8kJ', 'WQxcKthdOSkQ', 'mcbRt8kS', 'WRddHmoJ', 'W4tdG8kxW5WQ', 'W5O+WPRcPSoD', 'WQ5OW47dHmke', 'WOZcIg/cH8kG', 'sIBdJSo1Ca', 'WOrSW5hcJCog', 'qSohdsJcKCkPcvFcSZG1qa', 'W6pcJmoExbq', 'yCokW5RdH8k9', 'qSocWR8GWP8', 'WRhdHmoI', 'WPpcJaOeDa', 'kb7dVMyD', 'WR5jrb9s', 'pCkaW6tcRmo4', 'h8kytxRdHa', 'WRJcLd3dLCkR', 'ESkyWPJcHq', 'W7tcLxhcOgS', 'W5FdP2BcVmo6du5tW7f1uq', 'W5XgWONcVhW', 'W6Hjs8oqWQ8', 'ASkQW5LjW7y', 'WODHFrXF', 'jaVcTt47', 'w8k4WRtcGmk3', 'WRdcSa0HBG', 'oHRcVJG7', 'WQJdUgq', 'yLfqW5Ph', 'CtNdN8oAwW', 'WRpdMCo4Bge', 'lgddR8kQW7m', 'EmooWPS', 'WOzKaKyJ', 'W5KMcmoqdq', 'WRRdH1tdPYa', 'W7KHhSkdeG', 'zZdcK8kuW5K', 'WP7dKxycW4K', 'w33cJa', '8l26VpcGTjRXGzIZ8kAQTpcGHzG', 'naHDECkk', 'h8kqW4dcI8oU', 'WORcGtFdUCkP', 'W4pdVwDUW7u', 'ir9CCmkC', 'W7HlWP81WPq', 'rCoyya', 'kCkWW6tcNSoZ', 'mtHLrCkB', 'W73cKxS', 'WO3cGs7dPCkb', 'W7ddTb/cM8kX', 'WONdSNbVWRe', 'W6xdVwn+W7G', 'pmk5AuJdKW', 'WPmqgmo0WPC', 'eZWdumkA', 'W6f1h8k1WPq', 'WPJcLbRdPmkC', 'W7H2W7NdKxO', 'wXBcS8kpW7K', 'WP7dGwycW4C', 'mSoIW7JdTmob', 'WPRdJgVdJdO', 'WRtdVM1Z', 'WRX9BaC', 'WQRdVt/dVSoX', 'yGBcS8kwW70', 'WPRdSqBdMG', 'D8ocW4tdH8oV', 'wYJdQsG9', 'WRBdSM5ZWQq', 'vdJdGmke', 'WO7dKev0WPi', 'zZxcP8khW5W', 'WQhdM0CFW6q', 'W5neWOJcTui', 'WP7dI8klWRu', 'W5H0W7NdThO', 'W4ddNXldGCkJ', 'WRlcUGmgBG', 'BthdLCoOFG', 'W702WPdcUmoO', 'FdtcI8knW54', 'W6bXbCkyWPu', 'W4tcKxlcQsq', 'kCkow2/dSW', 'W7j5fa', 'lLrBFSkz', 'WPekoCo0W54', 'WRBdUKCoW7e', 'W7G9WQRcHSo/', 'WPRdPapdMCoZ', 'qcZdMJyV', 'cSo8W74oWRq', '8ksLOFc+IB/XIiMac/cqL78', 'WONdUKGDW6m', 'W799WPuV', 'WQW3oCknea', 'WO4Ufui8', 'zCkyWPpcK8kf', 'W5zeW7q', 'wHtcLmkfW6a', 'W6CkdCkOnG', 'W77dUCozW5Dt', 'W7xdS8oA', 'y8oNDaldOq', 'WP7dKxqdW40', 'txdcM8k/WOK', 'vWxdMSolua', 'DmkpW43dLSkt', 'ESoCW7pdP8oV', 'WPxcOmkPAJC', 'W7HjWOO', 'W711gmk9', 'W6DuW4ZcICof', 'vCkRWRXnW6f5h1PAfvqEqq', 'W7PEW5e', 'W6FdImk8W7CF', 'WRJdHxHTWR8', 'WQ9PW53cQmos', 'wSoszH3dIW', 'W587a8oAsa', 'WQ/dRwihW7K', 'WOxdSSksWRpcMW', 'W6LoW6dcQau', 'AGhdVb0o', 'W5pcT8oJDGO', 'WOFcVdhcOCoI', 'W4hcGeNcObO', 'W5iXdSoasa', 'W6RcOtiQW6C', 'W5nfWOysea', 'W5T5WOm8ka', 'k8onWR8', 'W7ddI2z5W7u', 'xbBdG8ogCa', 'AX/dLtim', 'WQKNomoRW4y', 'EmkoWQpcG8kh', 'WOBdLSkf', 'W57cHJrgWPZcIWCJWO/dMIGjnW', 'l8oAWR/dOa', 'WP/cPZNdU8kP', 'W587a8ohwq', 'tHVdPYm9', 'mCkVWOtcHSkn', 'W6yeoSodsq', 'uKjwW5O', 'W6DjW5NcJ8oe', 'hv/dRmkpW7C', 'W7tcVmorDrq', 'WR5jFcDy', 'WPZcNXpdMmko', 'W6tdS2O8WR0', 's17dO8krW6G', 'rqhdVtq5', 'WOVcOJ7dQSkH', 'sxxcM8osua', 'WRdcMbiqxq', 'hKpdN8k3WPC', 'yCk5W5fb', 'WO7dI2NdSGi', 'cMZdN8oybG', 'W7/cM2W', 'WPHyWPRcQxG', 'WQFdUg1YWRu', 'WQ5OW6dcJ8o9', 'CHNdPmo3zG', 'drRcOcSQ', 'ESodzHVdNq', 'W5fNWOu8mq', 'WQJcHWODEq', 'wSodzH3dNa', 'W51nx8oXWRO', 'B1yuW7ZdRa', 'CSkmW5LyW6q', 'zmoFWQPsW48', 'lmopW43dJCo4', 'kmkAt3FdKa', 'W4WucCkDna', 'WPJdObRdMSoK', 'W4pdGCkIW5GL', 'WO0DmfmT', 'WQ7cVCoTxai', 'WQFdOSoDv18', 'F8kbW4nNFq', 'WOtdMmklWRq', 'W7pcNKtcSX8', 'tbBdNaaZ', 'jXVcPsa5', 'W4DpWPVcTh8', 'gwpdHmk3W54', 'W7rhn8kDWRC', 'Bv3dUt4g', 'bSo3W6LDWOy', 'W6/cLXlcSxRcKJrOWPK2wq', 'W55lbmoJW4S', 'veDEWPrb', 'WO7cQCo7xJ0', 'W7zNaSkWWPW', 'e2ddJ8kqW4i', 'W67dH8kuW6yP', 'C8obWPGGWO0', 'W6/dNbJcGmkz', 'W4ZdT2KzW5S', 'W7bsWQ3cV0K', 'WOqbbmoY', 'zCkvWOFcKCkn', 'W502r19/', 'iaZdRdOS', 'wCoUDYJdKG', 'W4KPWQRcNSon', 'WQBdSmoNtLW', 'W63dUCooWOm', 'W5P1WR/cN3O', 'B2lcHq', 'W5FdT8oVWRfi', 'W6ldOCktWPrZ', 'WQ/dSNO', 'p8kLW5xcOmo1', 'wCoTW4O/WPe', 'W59iWORcTNG', 'dmoXW5WXWQa', 'W4uScCoarq', 'W4LcW7ZcTuW', 'WQxdU29ZWRm', 'W5VcO8oZBIy', 'kgboW63dSG', 'W4tcImoxW6e', 'WRFdPgPZWR4', 'aSolW7KjWOq', 'WO3cOdpdQ8k/', 'W4VdUCooWOn9', 'W4b4WR4TlG', 'DSo2WOKdWQ8', 'W5avpCo4Aq', 'W6SRoa', 'AFcIQ4/WRRAS8kQgSFc8H6C', 'p3iaW5VdIq', 'W4NdR8owWPjg', 'oL9dW6lcQG', 'ESoAuIFdHa', 'wtpdSH8c', 'zSk6WPtcPmka', 'W7FdIHddJmoi', 'jrdcQW', 'W4HEW7dcRWm', 'pSofWOLcW5W', 'W6xdPCkiW5yL', 'W6L1jSoLWO0', 'gtBdG8o9zG', 'W5VcUmoSucW', 'q8kyWPhcMSky', 'ECowW69kWPK', 'W6bFs8okWQe', 'WRxcMW8n', 'WR3dH1VdOd4', 'W6OufSkxW64', 'WOxcIetcNSk3', 'vJVdNa', 'WOiVbvaU', 'W7tdR8oA', 'W6uGjCkk', 'W54FWQFdVmkq', 'WOJdJhmfW6e', 'vmkMW6TKW5S', 'W6NdMW/cKG', 'kaVcKYC6', 'l8oyWQHzW5W', 'pxtcNSkwW7W', 'hgGKW4BdTG', 'Bv7cQXyc', 'W75vW5JdSNO', 'WRxdG1BdQYm', 'WQfZW4FcICoE', 'oSkAWRhcUSo1', 'DCk/WOFcNCkx', 'WO7dQgxdKc4', 'kXBcGIWN', 'iMWCW6VdRG', 'cxJdJSkQW5u', 'CSk4W5TE', 'WOJcHfNcMG', 'WOzSyXbA', 'EmogWPuyWOK', 'WO/dM2SvW4K', 'dmo8W7q', 'xCosDbS', 'W7VcISkzbKG', 'W4rpWPFcQwu', 'WQpdK8o9', 'WQNdPqhdK8oL', 'WOtcMCokWR7cIW', 'WPldJCk2WRFcLW', 'mMRdQ8k2W5O', 'WP1QCW9s', 'WQxcQa4CFW', 'W5CaW5FcJa', 'jsDKACkz', 'WRpdIMxdPZ4', 'W7PzWPRcR2O', 'CsFcJCkCW4a', 'v2dcMCoHEG', 'W5jTFmotoq', 'ydNcJ8ky', 'WRNcQCo/qtS', 'hZBcIaSr', 'zW5FCSkT', 'WPNdH2ae', 'FmofWO8aWOK', 'WRpcImkXzgG', 'cCoNWR5rW70', 'WPZdU3ldUaO', 'WPhdSH3dKSo1', 'hSkWsM8', 'DCkUW5LfW4q', 'WR/dGgqcW50', 'W412WOOqka', 'W659WRxcQeu', 'WRX6B1Gb', 'W5j7aSoxwq', 'W4vwsmoXWO4', 'WRP9ybPx', 'WQldGMCr', 'kqXFxmk6', 'lSk9W4xcH8oY', 'BtdcMG', 'bX9lDCkY', 'W4fzW57dTf8', 'W4zpWRRcOfe', 'y8ocWO4sWQy', 'WQ3dSSkiWQlcPW', 'zSoHW4ddHG', 'FSk5WPNcU8ka', 'W7VdIg94', 'W79VW4NcLIu', 'W43XGjg7', 'WRNcIYhdPSkv', 'gwK0W6FdKG', 'WQPIzGzC', 'WPRcQCo6', 'WQhcIbJdP8kz', 'W6L4jSkYWPa', 'W7/cKgFcQHW', 'W5bXW6VcStG', 'W7pcJgVcTIK', 'mCobWPixW4G', 'W4jbWOWOWRK', 'W6v0W4ZcNSoF', 'vLDwW5To', 'W5P+WPWHkW', 'WPhcO8oU', 'W6z9a8k0WP8', 'W5roWPVcP38', '8lg2I/ggHBNXGQAw8ys0UVcATRO', 'W5OyWPNcPSk/', 'dSkSW5dcH8os', 'jNmdW6ddLq', 'A8oHW5ePWRC', 'W4jAW4xdIxG', 'eSkls2VdMG', 'WRFdPGJdMmop', 'W6TcamkPWPe', 'WONdL2OyW4y', 'WRRcMSoJW5yhW6NdPhPo', 'sGBdM8o7DG', 'W6NdHJhcRCkd', 'WQBdOe7dJIK', 'W7Hiva', 'WQTHBqW', 'EdJcVSkKW6O', 'WRSIeWmK', 'W6dcVSo5ssi', 'W7ZcM2VcQW', 'W6r0WOOJWOi', 'DtrJuCkjDby', 'W63dIWxcPSk+', 'DCkUW51jW54', 'y8ovWP8hWOC', 'W60QmSkAba', 'W5hcLCouxau', 'WRlcK0/cGmoD', 'W5ZcSvFcSWS', 'WP/dLmkmWRxcKa', 'DSkCWPpcL8oB', 'zSodW67dH8o5', 'qSosFG', 'W70SmmkCcW', 'xhxdO8o9CG', 'WRBdR8oyWPL4', 'W5NcLMJcOd4', 'W5hcUftcKYS', 'WPlcOSoStbi', 'W4pcKSolW7pdLW', 'W7NdHcPMW6u', 'i0JdI8k0W5O', 'WQ/cMG4AEa', 'WR7dNcRdQ3y', 'WPVcKSoEtG', '8k+gKFgoLRBWQRMD8k61T/czI4u', 'WOpdL8kf', 'WQDVztrD', 'aJ5FEmkq', 'W59cWO8/WO8', 'W4aUdSk/mq', 'oHRcOIOt', 'phedW6VdUW', 'W515WOP3CG', 'lmogWRvzW5W', 'W75TuConWQG', 'zHpdPWCk', 'dNCsW7ZdLG', 'W71kW77cOr4', 'rmkBW4LVW7m', 'uSokkqZdHW', 'W4z5W40Tna', 'W6vDWOO4nW', 'W443jmkrcq', 'gLtcJmoiua', 'sthdJSoMCa', 'jrBcTISt', 'W67dKre', 'ASkUW41FW5y', 'WORdKWxdKSo4', 'WP/dHgKFW5W', 'ymkjW65IW4m', 'W5joWP/cQKy', 'j8oEWQngW4S', 'W60XnCkwcW', '8jo3PCoj8lsxIpgdLR/WUlsn', 'WRpdMLy', 'W5JdOSkCW50T', 'owpdHmkTW54', 'W7LvA8onWRi', 'W4KSW57cPCoD', 'W6b6W4NcSWq', 'WQ52W6JcHmo+', 'ESo0WO09WOu', 'WOldVM95', 'W7LqWP4/WPe', 'rCkPWONcKmky', 'W6xcM3FcTZ4', 'wSo3zr3dHW', 'W5K3aSoAqW', 'fSkAuxZdNq', 'W6q+WRJdICkh', 'iSoyW4SYWPy', 'rmoCySkwWQW', 'W7y3WP3dM8kEdSkSdb/dVY89zW', 'xfaDWP0i', 'W4z5WPuUWPW', 'c8kBW7/cOmo4', 'mmooWQXUW7O', 'WPCNj8ocW4O', 'Bu5TW7nX', 'W4PEW7hcTWu', 'W67dGmk7W74F', 'W7zSbq', 'WONcQCo6xa', 'CYxcM8oDW6i', 'FmoxWRuXWO0', 'p3C3W7NdMq', 'EsxcJmkoW4W', 'qSojWPasWOa', 'W7ddNbtcR8ks', 'W7TPWPVcOve', 'CHBdImo/CW', 'fCkNthBdIW', '8k+uJpc5HkdWUOAGW7pWR4Ep', '8y2eNFcJTP7WNOsr8ywLOFcTTiC', 'WOxdMMa', 'WQNcU8o5AYW', 'WQpcL2lcQmkq', 'mamtwCk3', 'zd7dGq', 'uuzDW4e', 'WOVdSgC/W6C', 'WOSVtam', 'WPDyWPVcQgW', 'WRZcMSouqK8', 'uJFcPSkQWPq', 'W6xcGgpcTYK', 'WPvVW7hcP8oL', 'WP7cUmoGrZy', 'dMNdKSk3', 'wezmW4Db', 'f8opW548WPi', 'W6DSybS', 'zSotW53dH8o5', 'WPRWL6w88yUMKpgcMAH1', 'WQRcIbrirG', 'WR/dJKFdKtu', 'BmozFHNdPG', 'lgOFW63dUW', 'WOxdICkhWRy', 'WOVdL8ocWORcHG', 'WOlcLc0qW50', 'WQXnzsfC', 'rSosW6tdOCoD', 'EJpcI8kpW5G', 'W4dcPYBdQ8kT', 'W7LRWPi', 'W4i9j8okW6JdGL8', 'ymokW4FcGSok', 'fetdSmkfW7u', 'oHRcOIO7', 'WP7dKxedW5O', 'W60KmSozja', 'zSoyW5RdG8oS', 'bmkHW7tcQCoh', 'A8kCWQJcV8kv', 'ySofWP0bWOS', 'WRTSAZTB', 'WRT6ksDC', 'mmk6W4pcQmoW', 'Er3dTaWW', 'WO3dHhuAW5e', 'WRZdL8ku', 'W7tdUL1TW5S', 'W5zBWPVcR20', 'bSosFWBdJG', 'W4DNWOeWka', 'EgH2W5XW', 'W6FdHGlcHmkc', 'b8oHWPnEW74', 'W77dNCoTWOnE', 'BqRdVW', 'W6zwW5ddO2e', 'WOiVeKOU', 'pmkrWRhcNCo4', 'C14fk8oNetlcTSoWpu/dSa', 'WORcNvNcGa', 'W68cW4RcS28', 'ttBdOqe0', 'zmomWP04WQi', 'W5LJWPqPoq', 'ySk4W41fW5G', 'W6WAu8owWQq', 'W6FdRfnKW5u', 'WQCUtXXv', 'W6P6eG', 'yKDUW7ft', 'vCkcE1/dLa', 'aSoQW74CWRi', 'WP7cPmoOqty', 'W6ddV1XsW5u', 'WORdTr7dV8oZ', 'kxCEW6m', 'iMacW73dUW', 'W57dMmkgW74r', 'jmolWRz3W4O', 'vNlcH8o1qa', 'dJrzBSkq', 'W7RdMmk3W6mF', 'vSkTW7upWPK5Ewq', 'r0zrW4aa', 'yhPLW6f2', 'udRdGCkYya', 'WPbFW4xcICoz', 'CmkKW5TlW4a', 'CsJcUmkyW58', '8lI0MVcDTl7WQOsa8lU2RVcUP4a', 'W6VcICoE', 'W5P5s8oHWQO', 'BqRdOJi', 'W60TpCkqcW', 'B8k7W5fwW74', 'eCkhEfFdMG', 'uqZcQSkfW70', 'WO3cVY/dGSkg', 'ttddL8oM', 'W7FcG2pcQtq', 'WONcPmoOCHm', 'cCkFCX3dNq', 'WP/dO8oHuv4', 'W4LbWQmbWOi', 'W70XpCknaa', 'W7Orf8kTmG', 'W7HXca', 'WPrJWOGRna', 'CspcI8kVW4G', 'mCoTW4ikWPC', 'WQpdTLzTWPK', 'WPLVyaDq', 'lNubW6ldOW', 'WQJdLSkuvG8', 'WO4NeW', 'h3/dMCkIW5W', 'WPddNmkjWQNcHG', 'ESofWOu', 'WRb9oa', 'W5z5WONcLu4', 'ASoyW6VdL8oT', 'brNcIYSx', 'oZpcRtW5', 'W55XW5ZcTIG', 'BLZcGmoYFa', 'W4fZW4ddG3e', 'qcpcHCk6W5q', 'DY/cKCkoW5K', 'W5HjWO3cGuu', 'Fc/cMSk5W7K', 'W65QWOm/W5C', 'W4bYWP4T', 'b8kyAWBdIG', 'W4ZdRJVcTCkv', 'W6lcLSoiwW', 'BmkUW4C', 'WRRcPHtdPCkp', 'D8kyWPm', 'WRNdLmoLB2a', 'c8o2W6O', 'Ab7dGt4U', 'W7pdMunFo8oBW5dcRWRcUv9vW4xdGq', 'WRdcNbmAAa', 'W5q2WONcNSoz', 'W74HWPlcO8ox', 's8ondJxcMq', 'dSk4W7BcOSoZ', 'W6RcU8oVDti', 'WRlXG4wd8jAMNpcrLjFXIjEr', 'CgtcQ8oRyG', 'WRGSW5zVW4pcQuzbW6ZdKSkNqX8', 'W4/dR15gW6m', 'BdtdLHqu', 'W4e+WO3cHCoz', 'qmkqWO/cUmkX', 'W7xdMMDyW6e', 'W74YWQBcU8o3', 'vHtdJXy0', 'xaFdM8oMra', 'WQnPW6FcGCoJ', 'W4JdGSk8W74o', '8yE1N/gfTkRXGRsG8jckSVgaTki', 'W4PrjCkDWOG', 'tNxcKCoq', 'W6eAWOZdQmoF', 'W6LpWQayWQq', 'oSknr3pdHq', 'jb3cOI83', 'W7RcM2u', 'W6tdJbNcJa', 'W6pdJGBcJCkj', 'vdddNmoHDa', 'gHlcMqyY', 'fM0aW7NdIW', 'k8kaW7JcOCoZ', 'bbakW5PnW4C6xeG', 'W58CWP7dTCkE', 'WRpcIXGMBW', 'WOxcRSoHrHm', 'WQDRuZft', 'WQtdH0pdPIa', 'WPldTrm', 'WQ1bFaev', 'W6bGa8k4WPu', 'W4LFW7FcTbK', 'W7pdMxLRW7C', 'ArZcQW0b', 'WOVcKgFcICkr', 'WPNcLfxdJSkV', 'AINdMqST', 'lConWR9e', 'smoAyG', 'W5uNtCoDqW', 'Ec/cMa', 'W6SodCkSfq', 'WQhdR3D5WQi', 'WQBdLmoID1S', 'WRZdKxaDW4W', 'WPTRErLa', 'WRdcRCoQcbC', 'WPSVdLC', 'WQVdV8k3W7me', 'DrRcLt0/', 'W75aW4BdG1W', 'W4yQWPhcPmo2', 'W5rtWOVcQh8', 'W7hdMXFcK8kt', 'W5fLWOW1eq', 'WO3cVtJdVmk4', 'vmoZWQ4FWQa', 'narFEmkW', 'WOVcQIldQSk+', '8lcOVCoE8yY3SFcxL6lWQ5sW', 'WRxdIr4blq', 'WOVcLvZcI8oP', 'wmksWRezWPG', 'W75juCowWQ4', 'oI/cJCkAWOi', 'WO/cOIBdO8k1', 'CmkkWOtcHCko', 'WPJdNmksWRtcNW', 'WOVcIv7cJCkW', 'z8kyWOxcPSke', 'WPxdN2HUWRO', 'W7qcWPZcS8o2', 'ixtdLa4c', 'W5iqgCotxq', 'WPWlea', 'WPZdMqxdN8ok', 'W65hWROUoa', 'W4WHd8oyra', 'aGD9zmkQ', 'W5L6omkGWOm', 'WPJcIbZdJSku', 'WQdcGXTh', 'agJdNmkBW68', 'W7BdHWBcHa', 'wHFdUYOx', 'WORdTqtdKSol', 'kf3dVmkhW5O', 'W7bbW6pdS3K', 'W6Tiv8ou', 'WOVcPqldTSk8', 'WRFdQCohDNe', 'i3JdRCknW4W', 'BSk4W7XzW5e', 'vKXnW4zf', 'WRDeW4xcPSop', 'WOtcIX3dRmkV', 'W7eFWR3dHCkA', 'WRlcMmovs0a', 'WO4PaKOG', 'e8o8W74j', 'ASoeW4FcGSoO', 'W6NdPSoYWO9s', 'iwqDW4/dVG', 'WONdL3eFW4y', 'WOVdI8kHWOJcSW', 'WOW+h0WH', 'DmkaWQ8wWPS', 'W5jsWOBcPhG', 'xqRdRX4r', 'W7xcM2ZcQZG', 'cCoBW4G2WOu', 'W7zcW5FdQL4', 'mXBcLGCP', 'W4PKW7hcMd0', 'BWVcQtyQ', 'lSoUWRDJW4i', 'lCopWQK', 'WOjpAXrm', 'W4r8W5ldRgm', 'icNcUqGu', 'W4zFymo0WPy', 'W77dJ8kNW74m', 'za7cKmk8W48', 'W7L9WOG/WPi', 'k8kpW5mkWOC', 'mmk/W7/cL8oX', 'W5D4WOm3oq', 'jsFcLsCU', 'WQT6WOKVWOq', 'bmoTW6qsWRS', 'raRdRWOt', 'WP/dVaxdMCoV', 'W4dcJmoArry', 'W6nvxmoCW60', 'WQhdIKVdRIK', 'W6SKl8kCrq', 'vHBcJSkiW5q', 'wSkBwNxdJG', 'WONdKbdcVmkH', 'zCovWPDtWOu', 'fCkEw1RdHW', 'W6RdNCkIW7Ws', 'iSotWQLNW7O', 'zSktW4T7W5e', 'WOldSmozwxe', 'WR3dMCowu2y', 'WOZcUhlcMSk2', 'WPPNW7ZcQbG', 'ysODW6FdUa', 'vhhcHCoLuq', 'C8kUW41y', 'W7LFs8on', 'AmkTW50', 'dSo6W6WjWRW', 'WQ5KW5ZcNSod', 'shxcNCorrW', 'WRtdHK0IW6W', 'z8klW7tcGSoO', 'W7S1omkyeq', 'W4DjWPZcQMi', 'WR7dOKizWPS', 'WRtdNLi8W70', 'W5f1WQRcJ2q', 'cMJdM8kMW6S', 'nc1rB8kX', 'W4SNpmoEFW', 'W79FW5hdOxy', 'FCkoW4zIW6m', 'WQZdR8oft1q', 'WR/dJeu', 'W6pcHgpcVdW', 'WOTtW4ZcJCoW', 'zb3dRa', 'WQBdL1hdQGi', 'WOpdM1vkWQy', 'xt7dIXmb', 'WO3dTrNdGG', 'WPHpWORcQxK', 'fMpdJq', 'j8kbW6xcVSoO', 'WO7dOGpdGSo4', 'W6pcV2BcKWG', 'WR3dHgCcW5e', 'BYFdMSo+EW', 'FaZdKrmi', 'u0PCW5vu', 'W5zmWO7cQNi', 'CmkrWO3cMCkc', 'WRTRAbf/', 'W7fFW4i', 'WPNcO8o+rJq', 'W73cL8oEsYO', 'W7pdKN5VW6i', 'W7bFW5JdTwC', 'W6HOtmonWPe', 'pMNdHSkMW48', 'WOPJqZHq', 'Fc/dMruu', 'j1FdPw4', 'er9gCCkW', 'DmodWOGAWOy', 'iSkYxuJdRa', 'WQr6CavC', 'r8o3WPKEWO4', 'W71rW5RdH3C', 'C8kpW61KW5a', 'W4nuWOVcQ2K', 'W6JdMCk9W6jd', 'W6FcISoExq', 'imopWPLNW4S', 'WPpdRmo+B30', 'WQjRCa', 'W5OMaSoz', 'WOVdMbldKSo7', 'nNiRW4VdVG', 'CCooW4JdHSon', 'WRBdVM17WPm', 'WQtcGIxdOSkf', 'W6zgWROGlq', 'WO/cUtVdJSkR', 'WRxcRCoLr3G', 'sMxcI8oixa', 'W6dcLSkBwG4', 'WRhcHGiHya', 'rSkiW6XyW5a', 'WRtdTMb3WR4', 'rdBdGZya', 'gJdcGGmy', 'WPWyevaH', 'W7hcLSovqqu', 'W6VcMmoCzHq', 'WPlcHc8Gyq', 'W4rmWPlcR38', 't2pcJmow', 'wcddM8o6EG', 'W4LJpmk1WRW', 'B8kyW5vcW4m', 'WPxdLY3dPmop', 'WOCLaMe3', 'aSo9WQfDWQC', 'ySkZW5DFW4m', 'uCooW5NdJSoQ', 'pbBcVWaA', 'WR1HwGfl', 'CSoiWO4CWOu', 'AFcIPlBWRRAS8kQgTFc8H6u', 't8osDq', 'BdpdVZiC', 'W5KCW5BcOh4', 'WPeub8oQW4y', 'W4CggSk0eq', 'kSkBW6u', 'WRWjdCoxWQ1HWQHOW6O', 'W5vaW4pcJaq', 'W7FcH3FcRJq', 'WOBcK1hcNSkq', 'qmorW4hdSSob', 'WO3cUJ/dO8kO', 'mwddKSk5W6m', 'W7xdHwrPW7e', 'DmkEWPxcN8kp', 'mb3dLCou', 'b2qDW6hcUG', 'W6BdMg98W7K', 'WQZcLxNcPCkj', 'WQxcJbGD', 't8ofxsJdPq', 'c8o8W6mAWQe', 'FCksWOy', 'WRWoqmolWOX4WPbx', 'W6OjWQRcLmoS', 'W7JdNCk+W7KF', 'W6pdVv1nW4m', 'W4qAWORcP8oT', 'W6BdNSk1', 'r0zEW5K', 'fSoSW6ijWRa', 'W4BdQ0HcW7G', 'CrxcJCkr', 'WPZdQuRdJ8oY', 'W6FdMMXlW4q', 'W5ZdJCoxWPjs', 'WPVcOmobqHm', 'dSkEs34', 'W7NdHhK', 'xxhcVmovFa', 'ir9CCmkt', 'W6S9ka', 'W6xdMMzJW6q', 'nCkPC2NdVq', 'zJRdKqaG', 'WRnagmk8WP4', 'WO/cQCoQtte', 'W54wWOO', 'W79FW5e', 'zXtdQa', 'W6ldNCkGyYi', 'W6hcKmouqua', 'WRZdLSoxrGi', 'W71LhCkseq', 'ASojW5ZdLSoI', 'jSofWR0', 'WOddU2tdMGm', 'kgNdMSkVW4i', 'cINcTt4X', 'W7hdMWtcImkr', 'W5/dT8ooWRzU', 'W7NcNmoc', 'W57cLSoiwW', 'WRCPa0iH', 'wdBdM8o7EG', 'W4NdJmk2WRa4', 'W5z0WQZdTMG', 'xCooDWO', 'nqHECSkQ', 'WOJcHYW5zG', 'W4xdHuXnW7S', 'WOBcMuK', 'W7O/hSo1xW', 'WOxcUmoarJ4', 'W63dNXlcRmkv', 'WP/dV0ObW70', 'WRRdSM4SW48', 'W6TAi8k3WPy', 'ySoCWQ7dTmog', 'i2Ow', 'W4jiWPJdQZm', 'WQVdG8k3W7WB', 'W7OGlSkpba', 'WO5fWQFcNMG', 'W6i0WORcN8oE', 'W4HoW7lcVYO', 'vdlcH8kvW4e', 'wxhcHCoi', 'lZxdLWOp', 'W55ZWRCVWQi', 'WO7dR8o9FhG', 'dWWqW5vq', 'WRS+neKm', 'WOSLau0J', 'W6lcPNlcVZq', 'WOJcQCkNbG', 'W515WP0Ska', 'WRJdG0NcOI0', 'WOqiW47dSJ8BiI7cIKaro8kP', 'AWBdOIKa', 'WPZdSJtdOmk4', 'WQFdO2PYWRC', 'W7jBW5VdH3q', 'W67dICo8WPrz', 'WPZcQmoQssS', 'W6BdMgvNW7K', 'W69vxmoa', 'h8o1W5W0WPG', 'o8k6W7RcH8ou', 'txjOW4jZ', 'W4zIWO4TmW', 'wfby', 'W4/dMWxcKSkr', 'W4m/WPS', 'BLRcQSoEtW', 'u8oHWRLg', 'EXFdQJqn', 'W7xdHwr5W6q', 'WPGqa8o2W4W', 'W5FcIa/dOSkk', 'WPSEhwCh', 'hmkaW5pcPmoE', 'W4tdJ3PMW6K', 'hvJdVSkHW7q', 'W5D2WO4Xoq', 'lGnu', 'gKfqW5Tn', 'WP7dKMqvW40', 'WOhdGsldRmoU', 'rSoeWQ02WPS', 'W7jbWPabWR0', 'W5HAWP0', 'W4mwfSkVnW', 'W78bWPRdRmkT', 'WO7cId8ewa', 'ibhcPtO', 'tcBdLSoMwa', 'WRpdHG7cOJ4', 'FSkzW6WaWPDsseuhsq/cVa', 'W7nYW7NcQci', 'nHHAB8k7', 'WQtcHaOVBa', 'WQtcKq4nFW', 'WOfEW6JcO8oL', 'kamtw8k3', 'qXpdMWGA', 'W7FcRmojqW', 'WP3cTZJdQ8kP', 'De5OW7jK', 'ySotW4ddJCo4', 'WRFdSNfQWRu', 'WPbcW7VcI8o5', 'qmoeW4FdJmoU', 'ySodWPmDWOy', 'CNPkW7fZ', 'WQinl8olW7a', 'W6zGbmkZWP4', 'W54bWQZdJ8kR', 'tmogsWJdPG', 'W7beW5NdTdS', 'W45cW6FcTWK', 'bINcGdWk', 'W7ddSSoA', 'W7H9WOG/WR4', 'WPuLvv4z', 'W67dJSk9W74f', 'WRJdKSoLBwa', 'WOnEEHHW', 'W5TiW7BcV0a', 'W6zgkCkLWRy', 'tJFdKX42', 'WRzSW4tcJCoR', 'WRRdTdpdGCoU', 'gg3dMCkMWO0', 'kH5u', 'W5ddUf5OW4q', 'W6WCjmocva', 'W7nwWRq9WPO', 'WOBdM27dOsa', 'fmoPW6euWQe', 'W7NcGCo8yXm', 'yd/dNq', 'ACkpW4PlW4C', 'W7bFW5JdQhy', 'W69mACoSWPq', 'WOyMe3a2', 'W4hdMadcQCkg', 'WOFcVcBdUSk4', 'WOldSCoivea', '8jo3PSoj8lsFGmoy8k6fPW', 'WQTPW44', 'ySkLW4zoW4q', 'vdZdGSo3', 'wHldJmoqBa', 'WOeRgMiR', 'WOpdRmodEKm', 'WPhdHmomWRVcKq', 'EZtdQXms', 'W6n6WReDWOe', 'WR1RkszC', 'W5foW6O', 'W7ZdQ8oPWO5S', 'W7NdMCkaW7uA', 'oCopWRrsW6m', 'jCkrWRZcVSo1', 'qSoIArBdGG', 'WOr8qcb9', 'CtlcQ8kvW5G', 'ENVdNqKu', 'W4JcKCoIxZm', 'EHZcQZig', 'W70Tm8koja', 'W6xdNMT+W6u', 'WO/dNCooW7JcRG', 'pMRcJfzuW5tcSb0hW47cSaldVG', 'WQZcUxFcGSkQ', 'EJVdTSoCua', 'uxxcMW', 'qLtcQSoOrq', 'WR17qdfw', 'o2VdI8kQW5u', 'W4uwWRtdO8k9', 'WPP0WOi0CW', 'dmoBW6qeWQa', 'WQtdG8kRW63cSa', 'mcxcQqGX', 'W4RcGIOGW4W', 'W5tdPZdcUCk/', 'W7XJt8oWWQm', 'WQxcHSooEJO', 'W57dVCoWWObS', 'WOlcRZSfvq', 'yttcISkFW4G', 'WOPHzXTC', 'W5ZdM39/W4m', 'WO7dUapdMSo4', 'xc3dM8o3zW', 'W7HSWOCPWOm', 'W5yCWO7dQCkB', 'a8ozWO9MW5O', 'WOSLoeGg', 'WOJdLcBdHmoS', 'WRFdO3f1WR4', 'zchdNc42', 'WPrwWOm2ka', 'FHBdUXqH', 'WP7cMv7cISkj', 'DCkUW5ndW4m', 'W6ddNg1SW4O', 'p8odWPmEW4C', 'W4b1WPtcHSoF', 'W5z2WP48AG', 'ySkjWOxcN8kp', 'W5e7bCoBqW', 'aSklDNxdJW', 'W7VdJ3L5W7e', 'nrvBCCkO', 'AqhdPcHu', 'W7bYWPSWpW', 'maZcTr0i', 'WPfzqH9X', 'WRL6qXDY', 'W7jNbCkPWRu', 'isrNvmkX', 'W6KMaq', 'kbVdPwyT', 'W6dcM8ozyqi', 'cgNdI8kNW70', 'WQJcUbRdImkC', 'wSozW4FdGCoO', 'A8oUqJxdNq', 'WOFdNmkmWQW', 'WO3dVZNdGSoV', 'WRxdHmo1', 'DXFdHSkvW7q', 'sYddJmoMEG', 'EYldIai', 'WPtcOSoUbNy', '8ko0G/csP6RWT4wPxpcvQ5W', '8jEfHpcCPPNWT5wW8ykgRVcYUBi', 'lmoyWRvBW6m', 'WOdcJHSbyW', 'W5DjW73dIgC', 'W4JdMItcMmkI', 'WOmLeq', 'ECkuWRVcJ8k5', 'vhpcNConwG', '8jYKUVcYT4lWSkAi8jE3KpcvH7q', 'W6pcJmouwWu', 'W5fDWOq9', 'W6nQB8odWO4', 'W59YWP8', 'WO3dUaZdKCoX', 'Av/cP8oPCW', 'o8ovW57dJmk6', 'kXVcLHWp', 'W70GlSkpaa', 'WRpWMjAE8yMeIFcDTRNWKPE7', 'u8kKWQtcRmku', 'W6nEuCoxWQC', 'xcZcJ8oREG', 'W6ldNCkIyYm', 'bJRdLSo3W4C', 'WP7dKCkxWRxcNa', 'ttddNmoM', 'WOJdRmoSrIW', 'W4ZcQYBcMay', 'WP0ngSoJW4S', 'W4T5kCkxWRK', 'W7/dNmkZW78J', 'WQP8Bbrn', 'W7BdPCo0C3a', 'p8kgW7JcUSo4', 'W6pdK0LIW5u', 'rmkuWOpcPCkp', 'prlcHYSO', 'W4xcOmoxtbm', 'W6jcW5JcSHO', 'Dmk/W59yW5i', 'kG3cPtSw', 'bmoQW5uEWPO', 'W79XemkIWP4', 'arpcVayq', 'DSkAWOtcHa', 'AGFdICofra', 'WPBdLhvzWRi', 'paVcUsW7', 'i8oeWR0', 'chJcISkrW54', 'W58CWOpdSG', 'WPZdSLhdRWu', 'W7WGkmkmfW', 'BxCuW7RdRW', 'W6a0mmk6WO8', 'W656WOyJea', 'WQKHi8okW4W', 'WP/dLGVdV8oZ', 'WQhdJxVdPW4', 'W58iWORcN8oB', 'iMy4W53dUW', 'W5pcSwNcGJq', 'WP7cSYldPW', 'W5j2WPFcOG', 'wfrTW7Ls', 'W516tXr5W5OJkSoMW7BcMSkgz1e', 'W7bMfmk1WOG', 'W6KwgmoRWQu', 'Fu9pW7XU', 'WQFcMXuf', 'WQxdRhWGW7K', 'W4iwWP7dSG', 'WPZdHMaaW4e', 'W65rWOGVWPi', 'W4OvWRZdJ8kY', 'zmkBWOFcK8kt', 'WOVdKxzyW50', 'ySkuW5VdLSoB', 'WQJdMgv/', 'WPhdQuJdUbu', 'oCoEWRTeW5O', 'jbRcVZ0/', 'B8kkW4P9W6i', 'W48KaCoDwq', 'WRpdQeVdPG', 'WP7cO8oNwYW', 'W7FcM0G6W4O', 'W6LDW6ldV0i', 'WOtcMCkfWRNcKa', 'W7JdRmonWPT1', 'W4mmWOldSSkA'];
  _0x16b1 = function () {
    return _0x41e5d6;
  };
  return _0x16b1();
}
connectToWhatsApp();