let viestilaskuri = 0;
let mainosajastin;

const mainosviestit = [
    "Kaupallinen yhteistyö: LocalghostFI tarjoaa huippuluokan ja kotimaiset pelipalvelimet, jotka mahdollistavat mahtavat pelihetket ystävien kanssa. Käytä alennuskoodia 'mixerboy24' ja saat huikeat -30% ensimmäisestä tilauksestasi! https://lgfi.fi/peliservu",
    "Liity Miksaaja City Discord-yhteisöön: https://miksaaja.city"
  ];
  
// Funktio, joka lähettää satunnaisen mainosviestin kanavalle
function lähetäMainos(client, channel) {
    const randomIndex = Math.floor(Math.random() * mainosviestit.length);
    const mainosviesti = mainosviestit[randomIndex];
    client.say(channel, mainosviesti);
  }
  
function käsitteleViestit(client, channel, userstate, message) {
    if (userstate['message-type'] === 'chat' && !userstate['self']) {
      viestilaskuri++;
      
      if (viestilaskuri >= 5) {
        if (mainosajastin) clearInterval(mainosajastin);
        
        // Lähetetään viesti ja nollaataan viestilaskuri
        lähetäMainos(client, channel);
        viestilaskuri = 0;
        
        // Määritellään 15min päähän seuraava ajo.
        mainosajastin = setInterval(() => {
          lähetäMainos(client, channel);
        }, 15 * 60 * 1000); // 15 minuuttia
      }
    }
  }
  
module.exports = {
    käsitteleViestit: käsitteleViestit,
    lähetäMainos: lähetäMainos
};
