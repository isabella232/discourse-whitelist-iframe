import {whiteListIframe} from 'pretty-text/sanitizer';

whiteListIframe(/^(https?:)?\/\/www\.freesound\.org\/embed\/sound\/iframe\/.+/i);
whiteListIframe(/^(https?:)?\/\/w\.soundcloud\.com\/player\/.+/i);
whiteListIframe(/^(https?:)?\/\/graphics8\.nytimes\.com\/.+/i);
whiteListIframe(/^(https?:)?\/\/learn\.looker\.com\/.+/i);
whiteListIframe(/^(https?:)?\/\/learnbeta\.looker\.com\/.+/i);
whiteListIframe(/^(https?:)?\/\/docs\.google\.com\/.+/i);
whiteListIframe(/^(https?:)?\/\/meta\.looker\.com\/.+/i);
whiteListIframe(/^(https?:)?\/\/metanew\.looker\.com\/.+/i);
whiteListIframe(/^(https?:)?\/\/looker\.com\/.+/i);
whiteListIframe(/^(https?:)?\/\/.*\.looker\.com\/.+/i);
whiteListIframe(/^(https?:)?\/\/raw\.githubusercontent\.com\/.+/i);

