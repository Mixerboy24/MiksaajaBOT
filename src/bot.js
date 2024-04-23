const tmi = require('@twurple/auth-tmi');
const { StaticAuthProvider } = require('@twurple/auth');
const authProvider = new StaticAuthProvider('APP TOKEN', 'SECRET');
const client = new tmi.Client({
	options: { debug: true, messagesLogLevel: 'info' },
	connection: {
		reconnect: true,
		secure: true
	},
	authProvider: authProvider,
	channels: ['mixerboy24']
});

// Moduulit
const mainokset = require('./mainokset.js');
const komennot = require('./komennot.js');

// MiksaajaBOT asetukset

  client.on('message', (channel, userstate, message) => {
    // Käsittele komennot
    if (message.startsWith('!')) {
      komennot.käsitteleKomento(client, channel, userstate, message);
    } else if (!userstate['message-type'] === 'chat') {
      // Käsittele mainokset vain, jos viesti ei ole komento tai chat-viesti
      mainokset.käsitteleViestit(client, channel, userstate, message);
    }
});

client.connect();
