
require('dotenv').config();

const { Telegraf } = require('telegraf');

const puppeteer = require('puppeteer');


const GROUP_LIST = require("./constants");

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply(`
Привет ${ctx.message.from.first_name}!
Я буду показывать вам расписание занятий ОГУ.
Для этого введи номер своей группы  на русском языке большими буквами и я покажу что у вас будет на этой неделе.
Если возникли проблемы с написанием своей группы воспользуйся командой /help.

` 
));
bot.help((ctx)=> ctx.reply(`
19ИБ,
18ИБ,
20ИБ-1,
20ИБ-2,
З-19ПД-2,
18ПИ,
19ИВТ(а)САУВТ,
19ИВТ(б)ВМК,
19ИВТ(б)ПОВТ,
19ИВТ(м)ИПО,
19ИСТ(м)ИСНИ,
19ИСТ(б)ОП,
19ИВТ(м)РИВСТ,
19КБ(с)РЗПО,
19МКН(б)АПКМ,
19ММех(а)МЛ,
19ПИнж(б)РПиС,
19ПИнж(м)РИтС,
19ПМИ(б)ОП,
19ФИИТ(б)ОП,
18Л-2 - 18Л(ба)ПП-2(а) ,
19ТББЖД - 19ТБ(ба)БЖД



`));
bot.hears('19ТББЖД', (ctx) => {
  (async () => {
    ctx.reply('Пожалуйста подождите ваше расписание готовится это может занять некоторое время  ');

      const browser = await puppeteer.launch({
        args: [ "--incognito",
        "--no-sandbox",
        "--single-process",
        "--no-zygote"]
      });
      const page = await browser.newPage();
       await page.setViewport({
            width: 1000,
            height: 700,
            deviceScaleFactor: 1,
          });
      await page.goto('http://www.osu.ru/pages/schedule/?request=rasp&filial=1&mode=full&potok=2019&group=13548&who=1&what=1&mode=full&print=1');
      await page.screenshot({ path: 'example.png' });
      ctx.replyWithPhoto({ source: 'example.png' });
    
      await browser.close();
    })();  
});

bot.hears('18Л-2', (ctx) => {
  (async () => {
    ctx.reply('Пожалуйста подождите ваше расписание готовится это может занять некоторое время  ');

      const browser = await puppeteer.launch({
        args: [ "--incognito",
        "--no-sandbox",
        "--single-process",
        "--no-zygote"]
      });
      const page = await browser.newPage();
       await page.setViewport({
            width: 1000,
            height: 700,
            deviceScaleFactor: 1,
          });
      await page.goto('http://www.osu.ru/pages/schedule/?request=rasp&filial=1&mode=full&potok=2018&group=11979&who=1&what=1&mode=full&print=1');
      await page.screenshot({ path: 'example.png' });
      ctx.replyWithPhoto({ source: 'example.png' });
    
      await browser.close();
    })();  
});
/*ФМИТ 2 курск */
bot.hears('19ФИИТ(б)ОП', (ctx) => {
  (async () => {
    ctx.reply('Пожалуйста подождите ваше расписание готовится это может занять некоторое время  ');

      const browser = await puppeteer.launch({
        args: [ "--incognito",
        "--no-sandbox",
        "--single-process",
        "--no-zygote"]
      });
      const page = await browser.newPage();
       await page.setViewport({
            width: 1000,
            height: 700,
            deviceScaleFactor: 1,
          });
      await page.goto('http://www.osu.ru/pages/schedule/?request=rasp&filial=1&mode=full&potok=2019&group=12455&who=1&what=1&mode=full&print=1');
      await page.screenshot({ path: 'example.png' });
      ctx.replyWithPhoto({ source: 'example.png' });
    
      await browser.close();
    })();  
});
bot.hears('19ПМИ(б)ОП', (ctx) => {
  (async () => {
    ctx.reply('Пожалуйста подождите ваше расписание готовится это может занять некоторое время  ');

      const browser = await puppeteer.launch({
        args: [ "--incognito",
        "--no-sandbox",
        "--single-process",
        "--no-zygote"]
      });
      const page = await browser.newPage();
       await page.setViewport({
            width: 1000,
            height: 700,
            deviceScaleFactor: 1,
          });
      await page.goto('http://www.osu.ru/pages/schedule/?request=rasp&filial=1&mode=full&potok=2019&group=12473&who=1&what=1&mode=full&print=1');
      await page.screenshot({ path: 'example.png' });
      ctx.replyWithPhoto({ source: 'example.png' });
    
      await browser.close();
    })();  
});

bot.hears('19ПИнж(м)РИтС', (ctx) => {
  (async () => {
    ctx.reply('Пожалуйста подождите ваше расписание готовится это может занять некоторое время  ');

      const browser = await puppeteer.launch({
        args: [ "--incognito",
        "--no-sandbox",
        "--single-process",
        "--no-zygote"]
      });
      const page = await browser.newPage();
       await page.setViewport({
            width: 1000,
            height: 700,
            deviceScaleFactor: 1,
          });
      await page.goto('http://www.osu.ru/pages/schedule/?request=rasp&filial=1&mode=full&potok=2019&group=12367&who=1&what=1&mode=full&print=1');
      await page.screenshot({ path: 'example.png' });
      ctx.replyWithPhoto({ source: 'example.png' });
    
      await browser.close();
    })();  
});
bot.hears('19ПИнж(б)РПиС', (ctx) => {
  (async () => {
    ctx.reply('Пожалуйста подождите ваше расписание готовится это может занять некоторое время  ');

      const browser = await puppeteer.launch({
        args: [ "--incognito",
        "--no-sandbox",
        "--single-process",
        "--no-zygote"]
      });
      const page = await browser.newPage();
       await page.setViewport({
            width: 1000,
            height: 700,
            deviceScaleFactor: 1,
          });
      await page.goto('http://www.osu.ru/pages/schedule/?request=rasp&filial=1&mode=full&potok=2019&group=12370&who=1&what=1&mode=full&print=1');
      await page.screenshot({ path: 'example.png' });
      ctx.replyWithPhoto({ source: 'example.png' });
    
      await browser.close();
    })();  
});
bot.hears('19ММех(а)МЛ', (ctx) => {
  (async () => {
    ctx.reply('Пожалуйста подождите ваше расписание готовится это может занять некоторое время  ');

      const browser = await puppeteer.launch({
        args: [ "--incognito",
        "--no-sandbox",
        "--single-process",
        "--no-zygote"]
      });
      const page = await browser.newPage();
       await page.setViewport({
            width: 1000,
            height: 700,
            deviceScaleFactor: 1,
          });
      await page.goto('http://www.osu.ru/pages/schedule/?request=rasp&filial=1&mode=full&potok=2019&group=12501&who=1&what=1&mode=full&print=1');
      await page.screenshot({ path: 'example.png' });
      ctx.replyWithPhoto({ source: 'example.png' });
    
      await browser.close();
    })();  
});
bot.hears('19МКН(б)АПКМ', (ctx) => {
  (async () => {
    ctx.reply('Пожалуйста подождите ваше расписание готовится это может занять некоторое время  ');

      const browser = await puppeteer.launch({
        args: [ "--incognito",
        "--no-sandbox",
        "--single-process",
        "--no-zygote"]
      });
      const page = await browser.newPage();
       await page.setViewport({
            width: 1000,
            height: 700,
            deviceScaleFactor: 1,
          });
      await page.goto('http://www.osu.ru/pages/schedule/?request=rasp&filial=1&mode=full&potok=2019&group=12368&who=1&what=1&mode=full&print=1');
      await page.screenshot({ path: 'example.png' });
      ctx.replyWithPhoto({ source: 'example.png' });
    
      await browser.close();
    })();  
});
bot.hears('19КБ(с)РЗПО', (ctx) => {
  (async () => {
    ctx.reply('Пожалуйста подождите ваше расписание готовится это может занять некоторое время  ');

      const browser = await puppeteer.launch({
        args: [ "--incognito",
        "--no-sandbox",
        "--single-process",
        "--no-zygote"]
      });
      const page = await browser.newPage();
       await page.setViewport({
            width: 1000,
            height: 700,
            deviceScaleFactor: 1,
          });
      await page.goto('http://www.osu.ru/pages/schedule/?request=rasp&filial=1&mode=full&potok=2019&group=12339&who=1&what=1&mode=full&print=1');
      await page.screenshot({ path: 'example.png' });
      ctx.replyWithPhoto({ source: 'example.png' });
    
      await browser.close();
    })();  
});
bot.hears('19ИСТ(м)ИСНИ', (ctx) => {
  (async () => {
    ctx.reply('Пожалуйста подождите ваше расписание готовится это может занять некоторое время  ');

      const browser = await puppeteer.launch({
        args: [ "--incognito",
        "--no-sandbox",
        "--single-process",
        "--no-zygote"]
      });
      const page = await browser.newPage();
       await page.setViewport({
            width: 1000,
            height: 700,
            deviceScaleFactor: 1,
          });
      await page.goto('http://www.osu.ru/pages/schedule/?request=rasp&filial=1&mode=full&potok=2019&group=12334&who=1&what=1&mode=full&print=1');
      await page.screenshot({ path: 'example.png' });
      ctx.replyWithPhoto({ source: 'example.png' });
    
      await browser.close();
    })();  
});
bot.hears('19ИСТ(б)ОП', (ctx) => {
  (async () => {
    ctx.reply('Пожалуйста подождите ваше расписание готовится это может занять некоторое время  ');

      const browser = await puppeteer.launch({
        args: [ "--incognito",
        "--no-sandbox",
        "--single-process",
        "--no-zygote"]
      });
      const page = await browser.newPage();
       await page.setViewport({
            width: 1000,
            height: 700,
            deviceScaleFactor: 1,
          });
      await page.goto('http://www.osu.ru/pages/schedule/?request=rasp&filial=1&mode=full&potok=2019&group=12459&who=1&what=1&mode=full&print=1');
      await page.screenshot({ path: 'example.png' });
      ctx.replyWithPhoto({ source: 'example.png' });
    
      await browser.close();
    })();
  
  
});
bot.hears('19ИВТ(м)РИВСТ', (ctx) => {
  (async () => {
    ctx.reply('Пожалуйста подождите ваше расписание готовится это может занять некоторое время  ');

      const browser = await puppeteer.launch({
        args: [ "--incognito",
        "--no-sandbox",
        "--single-process",
        "--no-zygote"]
      });
      const page = await browser.newPage();
       await page.setViewport({
            width: 1000,
            height: 700,
            deviceScaleFactor: 1,
          });
      await page.goto('http://www.osu.ru/pages/schedule/?request=rasp&filial=1&mode=full&potok=2019&group=12387&who=1&what=1&mode=full&print=1');
      await page.screenshot({ path: 'example.png' });
      ctx.replyWithPhoto({ source: 'example.png' });
    
      await browser.close();
    })();
  
  
});
bot.hears('19ИВТ(м)ИПО', (ctx) => {
  (async () => {
    ctx.reply('Пожалуйста подождите ваше расписание готовится это может занять некоторое время  ');

      const browser = await puppeteer.launch({
        args: [ "--incognito",
        "--no-sandbox",
        "--single-process",
        "--no-zygote"]
      });
      const page = await browser.newPage();
       await page.setViewport({
            width: 1000,
            height: 700,
            deviceScaleFactor: 1,
          });
      await page.goto('http://www.osu.ru/pages/schedule/?request=rasp&filial=1&mode=full&potok=2019&group=12472&who=1&what=1&mode=full&print=1');
      await page.screenshot({ path: 'example.png' });
      ctx.replyWithPhoto({ source: 'example.png' });
    
      await browser.close();
    })();
  
  
});

bot.hears('19ИВТ(б)ПОВТ', (ctx) => {
  (async () => {
    ctx.reply('Пожалуйста подождите ваше расписание готовится это может занять некоторое время  ');

      const browser = await puppeteer.launch({
        args: [ "--incognito",
        "--no-sandbox",
        "--single-process",
        "--no-zygote"]
      });
      const page = await browser.newPage();
       await page.setViewport({
            width: 1000,
            height: 700,
            deviceScaleFactor: 1,
          });
      await page.goto('http://www.osu.ru/pages/schedule/?request=rasp&filial=1&mode=full&potok=2019&group=13587&who=1&what=1&mode=full&print=1');
      await page.screenshot({ path: 'example.png' });
      ctx.replyWithPhoto({ source: 'example.png' });
    
      await browser.close();
    })();
  
  
});
bot.hears('19ИВТ(б)ВМК', (ctx) => {
  (async () => {
    ctx.reply('Пожалуйста подождите ваше расписание готовится это может занять некоторое время  ');

      const browser = await puppeteer.launch({
        args: [ "--incognito",
        "--no-sandbox",
        "--single-process",
        "--no-zygote"]
      });
      const page = await browser.newPage();
       await page.setViewport({
            width: 1000,
            height: 700,
            deviceScaleFactor: 1,
          });
      await page.goto('http://www.osu.ru/pages/schedule/?request=rasp&filial=1&mode=full&potok=2019&group=13586&who=1&what=1&mode=full&print=1');
      await page.screenshot({ path: 'example.png' });
      ctx.replyWithPhoto({ source: 'example.png' });
    
      await browser.close();
    })();
  
  
});
bot.hears('19ИВТ(а)САУВТ', (ctx) => {
  (async () => {
    ctx.reply('Пожалуйста подождите ваше расписание готовится это может занять некоторое время  ');

      const browser = await puppeteer.launch({
        args: [ "--incognito",
        "--no-sandbox",
        "--single-process",
        "--no-zygote"]
      });
      const page = await browser.newPage();
       await page.setViewport({
            width: 1000,
            height: 700,
            deviceScaleFactor: 1,
          });
      await page.goto('http://www.osu.ru/pages/schedule/?request=rasp&filial=1&mode=full&potok=2019&group=12351&who=1&what=1&mode=full&print=1');
      await page.screenshot({ path: 'example.png' });
      ctx.replyWithPhoto({ source: 'example.png' });
    
      await browser.close();
    })();
  
  
});

      bot.hears('19ИБ', (ctx) => {
      (async () => {
        ctx.reply('Пожалуйста подождите ваше расписание готовится это может занять некоторое время  ');

          const browser = await puppeteer.launch({
            args: [ "--incognito",
            "--no-sandbox",
            "--single-process",
            "--no-zygote"]
          });
          const page = await browser.newPage();
           await page.setViewport({
                width: 1000,
                height: 700,
                deviceScaleFactor: 1,
              });
          await page.goto('http://www.osu.ru/pages/schedule/?request=rasp&filial=1&mode=full&group=12365&potok=2019&who=1&what=1&mode=full&print=1');
          await page.screenshot({ path: 'example.png' });
          ctx.replyWithPhoto({ source: 'example.png' });
        
          await browser.close();
        })();
      
      
  });
   
   
    bot.hears('18ИБ', (ctx) => {
      (async () => {
        ctx.reply('Пожалуйста подождите ваше расписание готовится это может занять некоторое время  ');
          const browser = await puppeteer.launch({
            args: [ "--incognito",
            "--no-sandbox",
            "--single-process",
            "--no-zygote"]
          });
          const page = await browser.newPage();
          await page.setViewport({
            width: 1000,
            height: 700,
            deviceScaleFactor: 1,
          });
          await page.goto('http://www.osu.ru/pages/schedule/?request=rasp&filial=1&mode=full&group=11850&potok=2018&who=1&what=1&mode=full&print=1');
          await page.screenshot({ path: 'example.png' });
          ctx.replyWithPhoto({ source: 'example.png' });
        
          await browser.close();
        })();
      
      
  });
   
      bot.hears('20ИБ-1', (ctx) => {
        (async () => {
          ctx.reply('Пожалуйста подождите ваше расписание готовится это может занять некоторое время  ');

            const browser = await puppeteer.launch({
              args: [ "--incognito",
              "--no-sandbox",
              "--single-process",
              "--no-zygote"]
            });
            const page = await browser.newPage();
            await page.setViewport({
              width: 1000,
              height: 700,
              deviceScaleFactor: 1,
            });
            await page.goto('http://www.osu.ru/pages/schedule/?request=rasp&filial=1&mode=full&group=13288&potok=2020&who=1&what=1&mode=full&print=1');
            await page.screenshot({ path: 'example.png' });
            ctx.replyWithPhoto({ source: 'example.png' });
          
            await browser.close();
          })();
        
        
    });
    
      bot.hears('20ИБ-2', (ctx) => {
        (async () => {
          ctx.reply('Пожалуйста подождите ваше расписание готовится это может занять некоторое время  ');
          const browser = await puppeteer.launch({
            args: [ "--incognito",
            "--no-sandbox",
            "--single-process",
            "--no-zygote"]
          });
           const page = await browser.newPage();
            await page.setViewport({
                width: 1000,
                height: 700,
                deviceScaleFactor: 1,
              });
            await page.goto('http://www.osu.ru/pages/schedule/?request=rasp&filial=1&mode=full&group=13589&potok=2020&who=1&what=1&mode=full&print=1');
            await page.screenshot({ path: 'example.png' });
            ctx.replyWithPhoto({ source: 'example.png' });
          
            await browser.close();
          })();
          });
    
      
    
          
            bot.hears('З-19ПД-2', (ctx) => {
              (async () => {
                ctx.reply('Пожалуйста подождите ваше расписание готовится это может занять некоторое время  ');
                const browser = await puppeteer.launch({
                  args: [ "--incognito",
                  "--no-sandbox",
                  "--single-process",
                  "--no-zygote"]
                });
      
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
          
         
              
                bot.hears('18ПИ', (ctx) => {
                  (async () => {
                    ctx.reply('Пожалуйста подождите ваше расписание готовится это может занять некоторое время  ');
            
                      const browser = await puppeteer.launch({
                        args: [ "--incognito",
                        "--no-sandbox",
                        "--single-process",
                        "--no-zygote"]
                      });
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
              
             
                  

bot.launch();