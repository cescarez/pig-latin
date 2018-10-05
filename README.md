# _Pig Latin Translator_

_Epicodus Week 10, Oct. 2018_

#### By _**Christabel Escarez**_

## Description

A webpage that will take a user input and translate it to pig latin. Check out the pig latin wikiHow here: https://www.wikihow.com/Speak-Pig-Latin

## Setup/Installation Requirements

* _Clone repository:_ https://github.com/cescarez/pig-latin.git
* _Open index.html_
* _Submit a word or sentence to be translated into pig latin._

## Specifications
| Specification | Example User Input | Expected Output |
| :-------------| :----------------- | :-------------- |
| Program gathers user input | _Input:_ "word" | _Output:_ "word" |
| Program does not allow empty input to be submitted | _Input:_ "" | _Output:_ Input box becomes outlined in red with displayed text "Please enter a word or sentence." |
| Program parses input into series of characters | _Input:_ "word word" | _Output:_ [w, o, r, d, , w, o, r, d]|
| Program checks if each character is a vowel. | _Input:_ "word"] | _Output:_ "false, true, false, false" |
| Program adds 'way' to end of word if first character is a vowel and displays output | _Input:_ "owl" | _**Displayed** Output:_ "owlway" |
| If first character is not a vowel, program moves character(s) to end of word, up until the first vowel | _Input:_ "plural" |  _Output:_ "uralpl" |
| Program takes word with consonants moved to end, adds "ay", and displays output | _Input:_ "plural" |  _**Displayed** Output:_ "uralplay" |

## Known Bugs

_No known bugs, to date._

## Support and contact details

_Contact christabel.escarez@gmail.com with any technical issues._

## Technologies Used

* _HTML_
* _CSS_
  * _Bootstrap 3.3.7_
* _JavaScript_
  * _jQuery 3.3.1_

### License

Copyright (c) 2018 **Christabel Escarez** :dog:

*This software is licensed under the GPL license.*

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
