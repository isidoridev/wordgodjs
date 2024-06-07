import {word_map, wordAdd, sentence_list} from './wordList.js'
// Check each char in input - If Char, EoW or EoL checks on input
export function parseText (text_input) {
  function processWord (word, sentence_index) {
    wordAdd(word.toLowerCase(), sentence_index)
  }

  let prev_sentence = ''
  let prev_word = ''
  let sentence_index = 0

  for (let i = 0; i < text_input.length; i++) {
    const c = text_input.charAt(i)

    if (c === ' ') { // End of word - collect last word and add to line.
      if (prev_word === '') continue

      processWord(prev_word, sentence_index)
      prev_sentence += `${prev_word} `
      prev_word = ''
    }
    else if ((c === '.' || c === '?' || c === '!') && prev_word.length > 1) { // End of sentence - collect last word and sentence.
      processWord(prev_word, sentence_index)

      sentence_list[sentence_index] = `${prev_sentence}${prev_word}${c}`

      //resets state
      prev_sentence = ''
      prev_word = ''
      sentence_index += 1
    }
    else if (/[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ¿¡\-0-9]/.test(c)) {
      prev_word += c
    }
  }
}
