const reviews = "A great product for daily use, Great price. Takes about 10days for delivery Excellent value - will buy again Fine, I always use this, was as expected Good value excellent product, good value good does the job! Thank you Great it's that is easy to use I hated it arrived on time, excellent product, thank you quick service great price. good and refreshing My daughter is road testing this, but so far it's refreshing DO NOT BUY THIS PRODUCT Avoid Did not notice any difference Horrible taste Does its job and shows it works"

const cleanedArray = reviews.replace(/[1234567890\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase().split(" ");


const reviewWordFrequency = {}


for (i = 0; i < cleanedArray.length; i++) {
    var word = cleanedArray[i];
    if (!reviewWordFrequency[word]) {
        reviewWordFrequency[word] = 1;
    } else {
        reviewWordFrequency[word]++;
    }
}

// console.log(wordCounts);

  finalData = Object.keys(reviewWordFrequency).map(function (key) {
    return {
      name: key,
      total: reviewWordFrequency[key]
    };
  });

  console.log("FinalData: ", finalData);
