


function countWordFrequency(sentence){
    
    const wordFrequency = {};
  
    
    const words = sentence.split(' ');
  
    //
    for (const word of words) {
   
      if (wordFrequency[word]) {
        wordFrequency[word]++;
      } else {
       
        wordFrequency[word] = 1;
      }

    }
  
    return wordFrequency;
  }
  
  
  const sentence = "this is a test. this test is an example.";
  const result = countWordFrequency(sentence);
  console.log(result);
  
























































































































































