import WordInfo from "./WordInfo.js"
import {parseText} from './parse.js'

// sentence_list: string[], word_map<string,WordInfo>, parseText(string), lineSelector(), handle_user_input

export let sentence_list = []

export const word_map = new Map() // "Word": WordInfo("Word")

// Whenever word occurs, add to information to list.
export function wordAdd(word, indexToAdd) {
  if (!word_map.has(word)) {
    word_map.set(word, new WordInfo(word,indexToAdd));
  } else {
    word_map.get(word).addIndex(indexToAdd);
  }
}

export function lineSelector(user_input) {
  if(!word_map.has(user_input)) {
    console.log("Could not find word...");
  }
  else {
    console.log("\n*** SUCCESS ON LINES:", word_map.get(user_input).occurredInIndex, ",\n");
    word_map.get(user_input).occurredInIndex.forEach((line_n) => console.log(`line:${line_n} "${sentence_list[line_n]}"`))
  }
}

function word_map_print_5_best() {
  return Array.from(word_map.values()).sort((a, b) => b.length - a.length).slice(0, 5);
  //TODO: THE FUNCTION MUST RETURN THE KEYS OF THE 5 LONGEST VALUES. 
}
//word_map_print_5_best()


parseText('This is a test piece to be analyzed. I wonder what is the possible output of this program? Who knows if it even works. I should add the word counter anyway...')

//console.log(word_map_print_5_best())
//word_map => <string, (word,freq,index)> 
const mostFrequent = Array.from(word_map.values()).map(e => console.log(e.word))

function mostFrequentWords(lst) {
  // const size = 3
  const arr = []
  
  //remove_smallest_and_insert_sort(val)
  Array.from(word_map.values()).map(val => {
    if(val.freq > smallest_in_array) {
      
    }
  })
}
