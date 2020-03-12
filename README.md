## TRANSLATION STATION
## www.translationstation.net

![Desktop]

## Problem Solved
Communicate with others with multiple language options with our chatroom or save important phrases to save for later. Leave behind having to translated every phrase spoken to each other and have it done instantly!

## How It Works
-Google Translate API pulls 104 different language options for the user to choose from using Axios. React.js is the JavaScript framework that the entire app is created on. Chakra along with CSS is used for styling.

- The home page lets anyone type a phrase in an language and choose what they want the translation to be, resulting in the tranlsation being printed below. If a user wishes to save the phrase, they must login or create an account with their email. This creates a browser token along with encrypting the user's password. All account required interactions look for a browser token and a username.

- After an account is made they can now save any translations they wish and are kept on a Postico Database that prints on the Phrases tab. They casn delete or add any translations by using Axios to communicate with the server.
-The chatroom is run with express and axios to save past chats. You choose the language you wish to speak to the chat with and any input will be chnaged to the chosen language.

## API Used:
Google Translate: https://cloud.google.com/translate

## New features to be added:
- Have seperate chatrooms for different languages
- Create a base chatroom with original input

## Created By:
Veronica & [Christoper Kemp](https://github.com/cmkemp52
