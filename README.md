# Web Development Project 2 - *Labubu Learning*

Submitted by: **Kelly Chan**

This web app: **Labubu Learning lets you test how well you know Labubu through a set of fun, flip-able flashcards. Each card has a question on the front and the answer (sometimes with a photo!) on the back. It's a quick and playful way to learn more about these fun little characters.**

Time spent: **3** hours spent in total

## Required Features

The following **required** functionality is completed:

- [X] **The app displays the title of the card set, a short description, and the total number of cards**
  - [X] Title of card set is displayed 
  - [X] A short description of the card set is displayed 
  - [X] A list of card pairs is created
  - [X] The total number of cards in the set is displayed 
  - [X] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)
- [X] **A single card at a time is displayed**
  - [X] Only one half of the information pair is displayed at a time
- [X] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [X] Clicking on a card flips it over, showing the back with corresponding information 
  - [X] Clicking on a flipped card again flips it back, showing the front
- [X] **Clicking on the next button displays a random new card**

The following **optional** features are implemented:

- [X] Cards contain images in addition to or in place of text
  - [X] Some or all cards have images in place of or in addition to text
- [X] Cards have different visual styles such as color based on their category
   - Difficulty: Easy/medium/hard

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='walkthrough.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with Adobe Express  

## Notes

One challenge I faced was getting the cards to flip smoothly between the question and answer sides. It took a bit of trial and error (and research!) to make sure the flipping worked without glitches. Another thing was adding difficulty categories and changing the card colors based on those levels. I had to update the data and figure out how to apply different styles depending on the difficulty. It wasn’t always easy, but it helped me learn a lot about managing state and styling in React.

## License

    Copyright 2025 Kelly Chan

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.