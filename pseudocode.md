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
    - Board is an array of Array(9).fill() will fill the array will blank spaces [0 - 8]
    - Current player = 'X'
    - Turn equals 0
    - Game Over = false;


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
      - Game over OR turn less than 5 or turn greater than 8 or board array full 
        return false 
      - Current player equals board turn 
      - Game over equals win condition OR draw condition
      - IF game not over switch player
        return true

    - Switch player, will provide the conditions on when to switch from player one to player two based on current state
      - if Current player === 'X'
        Then switch to player 'O'

    - Draw conditions, will provide the parameters to determine what constitutes a draw
      - if all of the tiles or cells on the board have player icons with not win conditions then it is a draw.
      - The every method can be used to check if the board array index is filled at every index.

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
    - Update View, 


<br/>

- ### **Tile**:
    //Properties
    - Clicked equals false
    - Locked equals false
    





