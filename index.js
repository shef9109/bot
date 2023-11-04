const { Client,  GatewayIntentBits } = require("discord.js");
const { token, intents, roles, roles1, roles2, channelId, emojis, emojis1, emojis2 } = require("./config.json");

//const client = new Client({ intents });
const client = new Client({ intents: [ GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent ],
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],  });
//console.log(client.guilds.cache.first());

function getOptions() {
  const roleArr = Object.entries(roles);
  const emojiArr = Object.entries(emojis);
  const optionsArr = new Array();
  for(i = 0; i < roleArr.length; i++) {
    optionsArr.push({"label": roleArr[i][0], "value": roleArr[i][1], "emoji": emojiArr[i][1]});
  }
  return optionsArr;
}

function getOptions1() {
  const roleArr1 = Object.entries(roles1);
  const emojiArr1 = Object.entries(emojis1);
  const optionsArr1 = new Array();
  for(i = 0; i < roleArr1.length; i++) {
    optionsArr1.push({"label": roleArr1[i][0], "value": roleArr1[i][1], "emoji": emojiArr1[i][1]});
  }
  return optionsArr1;
}

function getOptions2() {
  const roleArr2 = Object.entries(roles2);
  const emojiArr2 = Object.entries(emojis2);
  const optionsArr2 = new Array();
  for(i = 0; i < roleArr2.length; i++) {
    optionsArr2.push({"label": roleArr2[i][0], "value": roleArr2[i][1], "emoji": emojiArr2[i][1]});
  }
  return optionsArr2;
}


client.once("ready", async() => {
  console.log("I'm ready!");
  //console.log(client.guilds.cache.first());
/*
  const channel = await client.channels.fetch(channelId);
  channel?.send({ "embeds": [
    {
      "description": "**Игровые роли:** \n\n <:Valorant:1066756843206086707> <@&1066738492526313483> \n <:CSGO:1066756861711351828> <@&1066740471315054684> \n <:LeagueofLegends:1066743519701631027> <@&1066740473928110111> \n <:dota2:1066743320409276506> <@&1066740480370556928> \n <:dbd:1066757239567822879> <@&1066749397607645275> \n <:GenshinImpact:1066757332668792913> <@&1066749419854250044> \n <:TowerofFantasy:1066757701922717716> <@&1066749441425555597> \n <:osu:1066757467595362314> <@&1066749460912287765>",
      "color": 3092790,
      "image": {
        "url": "https://i.imgur.com/Y9w6DCy.png"
      },
    },
  ], "components": [
    {
      "type": 1,
      
      "components": [
        {
          "type": 3,
          "placeholder": "Выбор роли",
          "custom_id": "roles",
          "options": getOptions(),
          "max_values": 8
        }
      ]
    }
  ]});
  */
});

client.on("interactionCreate", async (interaction) => {
  if (interaction.customId === "roles") {
    
    let list = "";
    interaction.values.forEach(val => {
      interaction.member.roles[interaction.member.roles.cache.has(val) ? "remove" : "add"](val);
      list += `\n${interaction.member.roles.cache.has(val) ? "Удалена!" : "Выполнено! Выдана"} роль <@&${val}>`;
    });

    interaction.reply({ "content": list, "ephemeral": true });
    

    //console.log('AAAAAAAAAAAAAAAAAAAAAAAAA')
  }
  
});

client.on("messageCreate", async (interaction) => {
  if(interaction.content === '!roles') {
      const channel = await client.channels.fetch(channelId);
      channel?.send({ "embeds": [
        {
          "description": "```                  Игровые роли                   ``` \n <:Dota2:1170046670235508777> <@&1170049577638969425> \n <:Phasmophobia:1170047988580765756> <@&1170049581170565342> \n <:TheFinals:1170048650542587934> <@&1170049583687139491> \n <:Rainbomsixsiege:1170048844906647552> <@&1170049587210354859> \n <:Valorant:1170048399232467104> <@&1170049590079258745> \n <:Fortnite:1170047760481931374> <@&1170049592864297060> \n <:Cs2:1170046545010376714> <@&1170049595737378837> \n <:SeaofThieves:1170047311037083649> <@&1170049598186864741>",
          "color": 3092790,
          "image": {
            "url": "https://i.imgur.com/cdE2sAJ.gif"
          },
        },
      ], "components": [
        {
          "type": 1,
          
          "components": [
            {
              "type": 3,
              "placeholder": "Выбор роли",
              "custom_id": "roles",
              "options": getOptions(),
              "max_values": 1
            }
          ]
        }
      ]});
    } else if (interaction.content === '!roles1') {
      const channel = await client.channels.fetch(channelId);
      channel?.send({ "embeds": [
        {
          "description": "```                  Звания Dota 2                   ``` \n <:Herald:1170054614318583808> - Herald (Рекрут) \n <:Guardian:1170054628818309232> - Guardian (Страж) \n <:Crusader:1170054641019518976> - Crusader (Рыцарь) \n <:Archon:1170054663492616363> - Archon (Герой) \n <:Ledeng:1170054677031829637> - Legend (Легенда) \n <:Ancient:1170054707453108374> - Ancient (Властелин) \n <:Divine:1170054719385903164> - Divine (Божество) \n <:Immortal:1170054730341425152> - Immortal (Титан)",
          "color": 3092790,
          "image": {
            "url": "https://i.imgur.com/cdE2sAJ.gif"
          },
        },
      ], "components": [
        {
          "type": 1,
          
          "components": [
            {
              "type": 3,
              "placeholder": "Выбор роли",
              "custom_id": "roles",
              "options": getOptions1(),
              "max_values": 1
            }
          ]
        }
      ]});
    } else if (interaction.content === '!roles2') {
    const channel = await client.channels.fetch(channelId);
    channel?.send({ "embeds": [
      {
        "description": "```                  Звания Faceit                   ``` \n <:1lvl:1170054901582270494> - 1-800 elo \n <:2lvl:1170054914655928482> - 801-950 elo \n <:3lvl:1170054927561801748> - 951-1100 elo \n <:4lvl:1170054938911584317> - 1101-1250 elo \n <:5lvl:1170054949841936504> - 1251-1400 elo \n <:6lvl:1170054960742940692> - 1401-1550 elo \n <:7lvl:1170054970230440096> - 1551-1700 elo \n <:8lvl:1170054979579559986> - 1701-1850 elo \n <:9lvl:1170054990337945680> - 1851-2000 elo \n <:10lvl:1170055000618172568> - от 2001 elo",
        "color": 3092790,
        "image": {
          "url": "https://i.imgur.com/cdE2sAJ.gif"
        },
      },
    ], "components": [
      {
        "type": 1,
        
        "components": [
          {
            "type": 3,
            "placeholder": "Выбор роли",
            "custom_id": "roles",
            "options": getOptions1(),
            "max_values": 1
          }
        ]
      }
    ]});
  }
  });
  
  
  
client.login(token);
