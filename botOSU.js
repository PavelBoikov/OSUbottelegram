
require('dotenv').config();

const { Telegraf } = require('telegraf');

const puppeteer = require('puppeteer');


const GROUP_LIST = require("./constants");

const cloudinary = require('cloudinary');
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});
//cloudinary.uploader.upload("example.png", function(error, result) {console.log(result, error)});



const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply(`
Привет ${ctx.message.from.first_name}!
Я буду показывать вам расписание занятий ОГУ.
Для этого введи номер своей группы  на английском языке и я покажу что у вас будет на этой неделе.
Если возникли проблемы с написанием своей группы воспользуйся командой /help.

` 
));
bot.help((ctx)=> ctx.reply(`
19IB,
18IB,
20IB-1,
20IB-2,
Z-19PD-2,
18PI


`));


   try{
    bot.hears('19IB', (ctx) => {
      (async () => {
        ctx.reply('Пожалуйста подождите ваше расписание готовится это может занять некоторое время  ');

          const browser = await puppeteer.launch();
          const page = await browser.newPage();
          await page.goto('http://www.osu.ru/pages/schedule/?request=rasp&filial=1&facult=6543&potok=2019&group=12365&mode=2w&print=1');
          await page.screenshot({ path: 'example.png' });
          ctx.replyWithPhoto({ source: 'example.png' });
        
          await browser.close();
        })();
      
      
  });
   }
   catch{
ctx.reply('Неизвестная группа ');
   }
   try{
    bot.hears('18IB', (ctx) => {
      (async () => {
        ctx.reply('Пожалуйста подождите ваше расписание готовится это может занять некоторое время  ');
          const browser = await puppeteer.launch();
          const page = await browser.newPage();
          await page.goto('http://www.osu.ru/pages/schedule/?request=rasp&filial=1&facult=6543&potok=2018&group=11850&mode=2w&print=1');
          await page.screenshot({ path: 'example.png' });
          ctx.replyWithPhoto({ source: 'example.png' });
        
          await browser.close();
        })();
      
      
  });
   }
   catch{
     ctx.reply('Неизвестная ошибка');
   }
    try{
      bot.hears('20IB-1', (ctx) => {
        (async () => {
          ctx.reply('Пожалуйста подождите ваше расписание готовится это может занять некоторое время  ');

            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto('http://www.osu.ru/pages/schedule/?request=rasp&filial=1&facult=6543&potok=2020&group=13288&mode=2w&print=1');
            await page.screenshot({ path: 'example.png' });
            ctx.replyWithPhoto({ source: 'example.png' });
          
            await browser.close();
          })();
        
        
    });
    }
    catch{
      ctx.reply('Неизвестная группа ');
    }
    try{
      bot.hears('20IB-2', (ctx) => {
        (async () => {
          ctx.reply('Пожалуйста подождите ваше расписание готовится это может занять некоторое время  ');

            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.setViewport({
                width: 1000,
                height: 600,
                deviceScaleFactor: 1,
              });
            await page.goto('http://www.osu.ru/pages/schedule/?request=rasp&filial=1&mode=full&potok=2020&group=13589&who=1&what=1&mode=full&print=1');
            await page.screenshot({ path: 'example.png' });
            ctx.replyWithPhoto({ source: 'example.png' });
          
            await browser.close();
          })();
          });
    }
    catch{
      ctx.reply('Неизвестная группа');
    }
    
          try{
            bot.hears('Z-19PD-2', (ctx) => {
              (async () => {
                ctx.reply('Пожалуйста подождите ваше расписание готовится это может занять некоторое время  ');
  
                  const browser = await puppeteer.launch();
                  const page = await browser.newPage();
                  await page.setViewport({
                      width: 1000,
                      height: 600,
                      deviceScaleFactor: 1,
                    });
                  await page.goto('http://www.osu.ru/pages/schedule/?request=rasp&filial=1&mode=full&potok=2019&group=12642&who=1&what=1&mode=full&print=1');
                  await page.screenshot({ path: 'example.png' });
                  ctx.replyWithPhoto({ source: 'example.png' });
                
                  await browser.close();
                })();
                });
          }
          catch{
            ctx.reply('Неизвестная группа ');
          }
         
              try{
                bot.hears('18PI', (ctx) => {
                  (async () => {
                    ctx.reply('Пожалуйста подождите ваше расписание готовится это может занять некоторое время  ');
  
                      const browser = await puppeteer.launch();
                      const page = await browser.newPage();
                      await page.setViewport({
                          width: 1000,
                          height: 600,
                          deviceScaleFactor: 1,
                        });
                      await page.goto('http://www.osu.ru/pages/schedule/?request=rasp&filial=1&mode=full&potok=2018&group=11777&who=1&what=1&mode=full&print=1');
                      await page.screenshot({ path: 'example.png' });
                      ctx.replyWithPhoto({ source: 'example.png' });
                    
                      await browser.close();
                    })();
                    });
              }
             catch{
               ctx.reply('Неизвестная группа ');
             }
                  

bot.launch();