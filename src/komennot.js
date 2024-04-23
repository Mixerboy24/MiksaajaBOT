function käsitteleKomento(client, channel, userstate, message) {
    const komento = message.trim().toLowerCase();
    
    switch (komento) {
        case '!ping':
          if (userstate.badges && (userstate.badges.moderator === '1' || userstate.badges.broadcaster === '1')) {
            client.say(channel, 'Paikalla!');
          } else {
            client.say(channel, 'Vain moderaattorit voivat käyttää tätä komentoa.');
          }
          break;
      case '!discord':
        client.say(channel, `Miksaaja City: https://link.mb24.fi/dc`);
        break;
      case '!somet':
        client.say(channel, 'Mixerin Linktree: https://mb24.fi');
        break;
      case '!lgfi':
        client.say(channel, 'Kaupallinen yhteistyö: LocalghostFI tarjoaa huippuluokan ja kotimaiset pelipalvelimet, jotka mahdollistavat mahtavat pelihetket ystävien kanssa. Käytä alennuskoodia "mixerboy24" ja saat huikeat -30% ensimmäisestä tilauksestasi! https://lgfi.fi/peliservu');
        break;
      case '!tekija':
        client.say(channel, 'Minut on kasannut Mixerboy24. Asustelen LocalghostFI:n palvelimella Helsingissä. Beep Boop!');
        break;
      case '!eevee':
        client.say(channel, 'Eevee! Eevee!');
        break;
      default:
        break;
    }
  }
  
  module.exports = {
    käsitteleKomento: käsitteleKomento
  };
