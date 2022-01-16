
const patternDict = [
  
  {
    pattern: '\\b([Ee]nd|[Bb]ye|[Ee]xit|BYE|EXIT|END)\\b',
    intent: 'Exit'
  },
  {
    pattern: '\\b(Explain|Help|help|HELP)\\s?(\\w+)?\\b',
    intent: 'Explanation'
  },
  {
    pattern: '\\b(?P<greeting>Hi|Hello|Hey)\\b',
    intent: 'Hello',
  },

  {
    pattern:'([Ww]hat|[Hh]ow|[Ww]eather).* [Ii]n (?<city>([A-Za-z]+) ?([A-Z]{1}[a-z]+)?) (?<time>today|tomorrow|the day after tomorrow)',

    intent: "Current Weather",
  },

  {
    pattern:'([Ww]hat|[Hh]ow|[Ww]eather).* [Ii]n (?<city>([A-Za-z]+) ?([A-Z]{1}[a-z]+)?)',

    intent: "Current Weather",
  },

  {
    pattern: '(?<cold>warm|hot|cold) in (?<city>([A-Za-z]+) ?([A-Z]{1}[a-z]+)?) (?<time>today|tomorrow|the day after tomorrow)',
    intent: "Is It temperature Weather",
  },

  {
    pattern: '(?<cold>warm|hot|cold) in (?<city>([A-Za-z]+) ?([A-Z]{1}[a-z]+)?)',
    intent: "Is It temperature Weather",
  },

  {
    pattern: "(?<sunny>sunny|rainy) in (?<city>([A-Za-z]+) ?([A-Z]{1}[a-z]+)?) (?<time>today|tomorrow|the day after tomorrow)",
    intent: "Is It Sunny Weather",
  },

  {
    pattern: "(?<sunny>sunny|rainy) in (?<city>([A-Za-z]+) ?([A-Z]{1}[a-z]+)?)",
    intent: "Is It Sunny Weather",
  }

];

module.exports = patternDict;






