/* eslint-disable @typescript-eslint/no-non-null-assertion */
import oxfordDictionary from '../database/data/dicts.json';
import { OxfordDictionary } from '../types';

class TrieNode {
  children: Map<string, TrieNode>;
  isWord: boolean;

  constructor() {
    this.children = new Map();
    this.isWord = false;
  }
}

class DictionaryTrie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let node = this.root;
    for (const char of word.toLowerCase()) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char)!;
    }
    node.isWord = true;
  }

  search(word: string): boolean {
    let node = this.root;
    for (const char of word.toLowerCase()) {
      if (!node.children.has(char)) {
        return false;
      }
      node = node.children.get(char)!;
    }
    return node.isWord;
  }
}

// Load the Oxford Dictionary JSON
const dictionary = oxfordDictionary as Array<OxfordDictionary>;

export function validateWord(searchWord: string): boolean {
  // Create a dictionary trie and insert words
  const dictionaryTrie = new DictionaryTrie();

  for (const { word } of dictionary) {
    dictionaryTrie.insert(word);
  }

  return dictionaryTrie.search(searchWord);
}
