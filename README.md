Version: 0.0.5

04.02.2021 - DF
- First commit
- Add index.html file

05.02.2021 - DF
- Add directories (html, script, style) with its files
- Write main.js and Rectangle class

05.02.2021 - DF
- Add comments to each file
- Add gimmicks like opacity of data text (time left etc.)
- Fix small bugs
- Better styling
- Better positionings

06.02.2021 - DF
- Start player movement (A and D buttons)
- Random spawn
- Random facing direction at start
- Start match with "Enter"
- Rectangle (player) moves automatically in one direction
- New methods in Rectangle class (Updating x/y positions) -> Need this for player movement
- Better/sharper quality of the rect and the canvas
- New bug: double click zooms into the canvas (Fix in later version)
- New bug: data-box doesnt increase the opacity when the mouse hovers in (Fix in later version)
- Add version number in this push (README.md)

07.02.2021 - DF
- Fixed bug in player movement
- New Design for index.html site
- Fixed small bugs

07.02.2021 - DF
- New Attribute 'visitedFields' (list) for rectangle
- Created player class

08.02.2021 - DF
- Hide scoreboard

08.02.2021 - JZ
- Playerlist method: showScoreboard
- Implemented into main function

08.02.2021 - JZ
- fixed a bug which occured when displaying the scoreboard

12.02.2021 - JZ
- started to create player class
- implemented calculateRank() in Player.js

16.02.2021 - DF
- Created server.js
- Test script for node

17.02.2021 - JZ
- Created colorpicker in index.html 
- TODO: implement color in Rectangle Class

18.02.2021 - DF
- Player starts at a multiple of 10 on x and y axis
- Code refactoring
- Added comments
- Better debug method for rectangle class

18.02.2021 - JZ
- Code refactoring 
- Comments added 
- Bug Fixing 

27.02.2021 - DF
- First attempt of fillAll method
- It is not working right now

27.02.2021 - DF
- fillAll method is ready but still bugged
- Player won't move anymore when he hits a wall

27.02.2021 --> agreed on gameplay change: game should work like Paper IO 

27.02.2021 - JZ
- implemented "starting field" of the player (field will be generated in drawRect())

27.02.2021 - JZ
- red dot is now visible in the leading rectangle
  --> distinguishable from other rectangles

28.02.2021 - DF
- Refactoring Rectangle class

05.03.2021 - JZ
- Player class: updatePoints() implemented
- points get displayed on screen

05.03.2021 - JZ
- ANNOTATION: figured out the problem with display of scoreboard and "Tab" key
  - browser recognizes "Tab" press event --> event won't be recognized by game
  - 2 options: 
      1) leave it as it is (still works "ok")
      2) choose another Key (then it will work as expected) --> e.g. "KeyQ"

07.03.2021 - JZ
- reimplemented calculateRank() (Player class)
  - we will not user name_points[] anymore --> replaced with 1D Array containing all players
- started to implement populateList() (Playerlist class) TODO: finish implementation 