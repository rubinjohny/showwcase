This project was done as part of a coding challenge for Showwcase.

I have tried to implement the following -
React
Redux (not necessary but i wanted to **showwcase** that i knew it :P)
TypeScript (first time)
Styled system (first time)
Styled Components (first time)
Antd - mainly for form because i am familiar with their components


Features added - 
* Antd Notifications to give feedback to the user
* Form Validations
* Reusable modal component
* Reusable styled components eg - Row, Col, CenteredBox, Text etc
* Emoji's and icons (FontAwesome) to improve the interface
* Redux
   I have only used 1 reducer since i am only saving username and array of education's. Could have used Multiple Reducers and combined them to a single state. Not needed for this project
   Now the project uses hooks for redux state and dispatching actions instead of connect to maintain consistency
* Text Editor
   Used a component that in turn uses Draftjs from facebook to let the user input rich text. (supported styles include but not limited to bold, italics, underline, strikethrough etc.)


## Please Note
* I avoided external api's to populate Field of study, Degree and locations mainly because I couldnt find any apis that doesnt require an authentication. I didnt want to expose my key since this project will be kept public. (Primary reason to avoid google's places api to autocomplete locations). I have instead kept static data in Utils
* I have removed option to close the modal on clicking outside the modal or onEscape key press. This will ensure that the user closes the modal either by clicking close button or submitting a valid education experience. But if Showwcase decides, that this is not enough I can easily retain the saved values of the form.(I can access it from formInstance.getValues())



## use yarn start to run the project
it consists of 2 screens - Home and Dashboard. follows the given mockup


This is my first time using TypeScript, Styled Components and Styled System. Even though this was not mandatory, I wanted to learn and explore this stack.

