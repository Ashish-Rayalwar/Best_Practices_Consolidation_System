const { inputData } = require("../data");
const { BestPractices } = require("../openai/openai");

const getData = async (req, res) => {
  try {
    let consolidatedList = [];

    for (let i = 0; i < inputData.length; i++) {
      const articleContent = inputData[i].content;
      const bestPractices = await BestPractices(articleContent);

      for (const practice of bestPractices) {
        const existingPractice = consolidatedList.find(
          (x) => x.practice === practice
        );

        if (existingPractice) {
          existingPractice.citation.push(i);
        } else {
          consolidatedList.push({
            practice: practice.practice,
            discussion: practice.discussion,
            citation: [i],
          });
        }
      }
    }

    const citations = inputData.map((article) => ({
      title: article.title,
      url: article.url,
    }));

    res.json({ consolidatedList, citations });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getData,
};
