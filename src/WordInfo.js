class WordInfo {
  constructor(word, occurredInIndex) {
    this.word = word;
    this.frequency = 1;
    this.occurredInIndex = [occurredInIndex];
  }
  addIndex(index) {
    this.occurredInIndex.push(index);
    this.frequency++;
  }
}

export default WordInfo