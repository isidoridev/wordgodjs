// implied word_map<string,WordInfo> and sentence_list[]

const sentence_dataset = ["This is a fish.", "This is a car."]
const mywords = []
mywords.push("This")
mywords.push("is")

function predictNextWord(user_input_words) {
    const count_words = user_input_words.length;
    // Loop through sentence_dataset
    for(const i = 0; i < sentence_dataset.length; i++) {
        const words = sentence_dataset.split(" ");

        for(const j = 0; j < words.length; j++) {

        }
    }
    data.map((sentence) => {
        sentence.split(/ /).map((word,index) => {
            if(sentence[index] === user_input_words[index]) {

            } 
        })
    });
}

if(predictNextWord(mywords) == ["a car", "a fish"]) {
    console.log("Success");
} else {
    console.log("Prediction failed")
}
