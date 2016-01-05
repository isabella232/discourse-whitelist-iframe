(function() {
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/www\.freesound\.org\/embed\/sound\/iframe\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/w\.soundcloud\.com\/player\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/graphics8\.nytimes\.com\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/learn\.looker\.com\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/learnbeta\.looker\.com\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/meta\.looker\.com\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/metanew\.looker\.com\/.+/i);
  Discourse.Markdown.whiteListIframe(/^(https?:)?\/\/looker\.com\/.+/i);
})();

