# **Tic Tac Toe App**

## **Wireframe**:


<br/><br/>

## **Important Items to Remember**:
- Use MVC design pattern
- User Object Oriented Programming
- Dynamically render HTML from JavaScript
- Reset using state
- Notify player turn

<br/><br/>
<hr>

## **Objects**: 

<br/>

- ### **Game**  (Model)

    // Properties
    - Board is an array of [0 - 8]
    - Player one displays 'X'
    - Player two displays 'O'
    - Turn equals 0


    // Methods
    - Win Condition: if current players has some combination of the below arrays. The some() method can be used to check if the current player has any combination of the current win conditions.
    [
      [0, 1, 2],   
      [3, 4, 5],    
      [6, 7, 8],   
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8]
      [0, 4, 8],
      [2, 4, 6]
    ]
    - Update state:
      - IF Turn > 5 Check for Win Conditions 
      - Else Switch player
    - Switch player, will provide the conditions on when to switch from player one to player two based on current state
    - Draw conditions, will provide the parameters to determine what constitutes a draw
    - 

<br/>

- ### **View**:

    // Properties
    - Update state, board view placement of player pieces

    // Methods
    - Render
      - Create title, board, and reset button
    - Update tile, will draw the player icon when tile clicked by player
    - Winner, will display the winning player when win condition is met
    - Draw, will display a draw message when the draw condition is met

<br/>

- ### **Controller**:

    // Properties
    - Game will be passed in as a property
    - View will be passed in as a property
    - Tile will be passed in as a property

    // Methods
    - Reset game, will clear the tile of all player icons and reset game state without refreshing the page.
    - Player move, will handle current players icon on clicked tile and lock it from being clicked again.


<br/>

- ### **Tile**:
    //Properties
    - Clicked equals false
    - Locked equals false
    
```
START

INIT




