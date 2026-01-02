## 🎮 Game Flow (Math Quiz Game)

### 1. Initial State
- Show **Start Game** button
- Score = `0`
- Timer = `30s`
- No question visible
- Input disabled

### 2. Start Game
- User clicks **Start**
- Reset score and timer
- Enable input
- Generate first math question
- Start countdown timer

### 3. Question Generation
- Generate two random numbers
- Randomly select an operator (`+`, `-`, `×`)
- Display the question
- Store the correct answer internally

### 4. User Answer Submission
- User types the answer
- Presses **Enter** or **Submit**
- Validate input (number only)

### 5. Answer Validation
- **If correct:**
  - Increase score by `1`
  - Clear input
  - Generate next question immediately
- **If wrong:**
  - Show error feedback (shake / red)
  - Clear input
  - Continue with next question or allow retry

### 6. Timer Countdown
- Timer decreases every second
- Update timer display
- When timer reaches `0` → end game

### 7. Game End
- Stop timer
- Disable input
- Hide question
- Display final score
- Show **Play Again** option

### 8. Reset / Replay
- Reset game state
- Allow user to start a new round

---

## 🧠 Core Logic Summary
- Only **one active question** at a time
- Game runs inside a **timer-driven loop**
- Score updates only on **correct answers**
- Game ends strictly when **time = 0**
