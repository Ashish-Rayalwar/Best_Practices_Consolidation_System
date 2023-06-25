const { Configuration, OpenAIApi } = require("openai");
const config = new Configuration({
  apiKey: process.env.OPEN_AI_KEY,
});

const openai = new OpenAIApi(config);

const BestPractices = async (articleContent) => {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: articleContent,
    max_tokens: 2048,
    temperature: 1,
  });

  const choices = response.data.choices;
  console.log(choices);
  const bestPractices = [];

  for (const choice of choices) {
    const text = choice.text.trim();
    const lines = text.split("\n");

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.startsWith("Best Practice")) {
        const practice = line;
        let discussion = "";
        for (let j = i + 1; j < lines.length; j++) {
          const nextLine = lines[j];
          if (nextLine.startsWith("Best Practice")) {
            break;
          } else {
            discussion += nextLine + "\n";
          }
        }

        bestPractices.push({
          practice: practice.trim(),
          discussion: discussion.trim(),
        });
      }
    }
  }

  return bestPractices;
};

module.exports = { BestPractices };
