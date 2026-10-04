const fs = require('fs');
// Load .env first (standard dotenv), then config.env (overrides .env if both exist)
if (fs.existsSync('.env')) require('dotenv').config({ path: './.env' });
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env', override: true });

function toBool(val, defaultOn = true) {
    if (val === undefined || val === null || val === '') return defaultOn;
    return val.toLowerCase() !== 'false';
}

module.exports = {
    SESSION_ID:            process.env.SESSION_ID || "Silva~H4sIAAAAAAAAA5VWW0/bSBT+L/PKUZlz5h6pUpNwKXdKCF1a8WDiSXAJdmo7hLTKf1+dMdBqpe2yeUkytma+893sn6KsiiYexbXo/RSLunjM2sg/2/Uiip4YLKfTWAsQedZmovc1WMCgAUMA1AFIBUBy3RoikJaAmtI3oQEiDR6IPKAC7cFpIENAiICEQCQBZXcbakBjAdGA0UAawQUg7cHjzQbEYnk7LyZ/QIZAAYIHMhKQDJAFD2gCaAteARJ4DyQNoCNAZQCVBGuBUPOBQUNAQI3gAxApQMW3BUBpAT0wUA+EBEh0s2FEWVEX5Wx3cRcfYp3Nj+L6PCvqt/HIgyEDUgFIPo+uJAQDaCWgRUDjO7KMAWMAmSCpQDNtATyCJWDqvQKSCtBasEAaHHV8EoEN6YtQQQhvYlEZCMxJ6LTRKsmrFRBTqnXSUgNDdIZBMDJWEnklQFCAkk/ViWdGioGAJLIPjOIBiZ6HY5ZlR2ZTzMqYH+SxbIt2/WY7eg9KQSBA5jP5KhBYBzIhYoLRJzY9MxVABTDI6+hsJy+7lJ3MqNnd0gE6vq6A2CWWfcS+se5tPlQOlEz7JN+jBZVE0Qh8DS2QkkCKDeASr3y8tsl/UnajUIqXt2xqVoORSAQMyQNe8djo2YzmN/7O65ck3/8fM7LTtQFlU3gILaQgskoGjGT8bHxrGBAqzq4HYm8oDwmE7nj2gNqCA8v3SqCuCJAsoNWJ8vDGMEsLLJDUyWCaG0YBOt1t5jVbj/f2sosPZ1mlWAeZoutkJ58jzok3iXQW1rln7jU4A1YDKQvevrKYtcv6j8llDTlmgXnBJKdJaWEMhqNhHZgAaDuLkzaAHhkqhiQta2cVy64cC5xixo1qPAQHpB0XGVqe2iRrsHe4FUmDdl2LeZ2SpTshUtI4X5pA87CU+OOkEQvEBgdkdblCuPx0oiHFGk3XLMy0Bs8K3cf1QS56uAFRx1nRtHXWFlXJa7yDyPLHUZzUsU1+E4eTunXbp9sX59l4cd1YtzjL1QWtvuxXrrSDC+s/F7GRV9O2ei9ALOpqEpsm5h+Lpq3q9UlsmmwWG9H7egOijE9t52Q+TiGIaVE37bhcLuZVlr/Y/OViNplUy7IdrcvJkH/EWvTkr+XYtkU5a1jRZZnVk7viMQ7vsrYRvWk2b+LrhLGOuei19TK+dvuwytkCx4Pzi5GkPQHiIVmjyEVPBPRW+WC9U7JHH5p3K941WyzelbEVIObpLjSeFFpEKwNK1aMPvL55xcfb5bHNinkjemJ4VFyub08Guydbg+L0en+/vzvrD2d98WueF4t2xD9tfcLrdrJVL+T9ju9/O6mq71s7s+xYuuXg7kJNt/4ajEhFJxPx/9xE9MS4Ksf14uhMn68PTP3t7PtjdHpveDscD9fVZ3O+unoat3uqv1McrydzN6RbeXli5Sjvn1z37SFdT/P2cTS+ONt76t9PzW5xOHQ7q/d8Wh4fi0n8/TCd16vt9cznV1McDJ37dPfDfrzcOh1dFRf17afb8fblYHV+H+5G1ZVc0fD05MvR99X9pTwsV+sv5mp0GCc/nvrH86G7PVh+nz9Zux7wYS/hnT8/QopkJlaK/06LmKqwzFi//1Suw83+khv4bYvnbv2XYjApw9z5/JjzKVaWutIyjtuVcxaIu5zfUZSH9KbkuW3JcrCdT6G0KazYvVp1j1DFZcVPVuJSVQGcvtlsbkAs5lk7reoH0RNZmddVkQsQdbVk0x+U0+pPD08u7PRm5rvQz7Om7f9K02XxEJs2e1iIHrqAMgQZLIiHdX+xGLVZ+xJC0efPvh6Izd9ru+unTwoAAA==",
    // PREFIX supports comma-separated list: ".,!,/,?"
    // Use "any" to accept any leading symbol, or "" / "none" for no prefix
    PREFIX:                process.env.PREFIX || "!",
    BOT_NAME:              process.env.BOT_NAME || "Yumi Bot",
    OWNER_NUMBER:          process.env.OWNER_NUMBER || "918638968730",
    OWNER_NAME:            process.env.OWNER_NAME || "FallËn",
    DESCRIPTION:           process.env.DESCRIPTION || "Yumi is in your service",
    ALIVE_IMG:             process.env.ALIVE_IMG || "https://ibb.co/spGMFVy5",
    LIVE_MSG:              process.env.LIVE_MSG || "Yumi is active",
    MODE:                  process.env.MODE || "both",
    AUTO_STATUS_SEEN:      toBool(process.env.AUTO_STATUS_SEEN,      true),
    AUTO_STATUS_REACT:     toBool(process.env.AUTO_STATUS_REACT,     true),
    AUTO_STATUS_REPLY:     toBool(process.env.AUTO_STATUS_REPLY,     false),
    AUTO_STATUS_MSG:       process.env.AUTO_STATUS_MSG || "Seen by Yumi",
    CUSTOM_REACT_EMOJIS:   process.env.CUSTOM_REACT_EMOJIS || "❤️,🔥,💯,😍,👏,💙,🙌",
    Status_Saver:          process.env.Status_Saver  || process.env.STATUS_SAVER  || 'false',
    STATUS_REPLY:          process.env.STATUS_REPLY  || 'false',
    STATUS_MSG:            process.env.STATUS_MSG    || 'Yumi 💖 SUCCESSFULLY VIEWED YOUR STATUS',
    READ_MESSAGE:          toBool(process.env.READ_MESSAGE,          false),
    AUTO_REACT_NEWSLETTER:   toBool(process.env.AUTO_REACT_NEWSLETTER,   true),
    ANTI_BAD:              toBool(process.env.ANTI_BAD,              false),
    ALWAYS_ONLINE:         toBool(process.env.ALWAYS_ONLINE,         true),
    AUTO_TYPING:           toBool(process.env.AUTO_TYPING,           true),
    AUTO_RECORDING:        toBool(process.env.AUTO_RECORDING,        false),
    DELETE_LINKS:          toBool(process.env.DELETE_LINKS,          false),
    ANTIDELETE_GROUP:      toBool(process.env.ANTIDELETE_GROUP,      true),
    ANTIDELETE_PRIVATE:    toBool(process.env.ANTIDELETE_PRIVATE,    true),
    ANTILINK:              toBool(process.env.ANTILINK,               false),
    ANTICALL:              toBool(process.env.ANTICALL,               true),
    ANTIVV:                toBool(process.env.ANTIVV,                 true),
    DEBUG:                 toBool(process.env.DEBUG,                 false),
    THEME:                 (process.env.THEME || 'silva').toLowerCase().trim(),
    GREETING:              process.env.GREETING || '',
    APP_URL:               process.env.APP_URL || '',
    INSTAGRAM_SESSION:     process.env.INSTAGRAM_SESSION || '',
};
