const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value;
    const workoutList = document.querySelector('#workoutList');
    const newWorkout = document.createElement('li');
    newWorkout.textContent = workoutInput;
    workoutList.appendChild(newWorkout);
};

document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);

// ⚠️⚠️⚠️ Creating and Removing Elements ⚠️⚠️⚠️
// Function to add new fitness goals and remove completed ones

const addNewGoal = () => {
    const goalInput = document.querySelector('#goalInput').value;
    const goalList = document.querySelector('#goalList');
    
    // Check for duplicates
    // 'goalList' gets all existing goals from the DOM and stores them in 'existingGoals'
    const existingGoals = goalList.querySelectorAll('li');

    //A Variable to track if the goal is a duplicated
    let isDuplicate = false;

    // Checks if text content of the goal matches any of the input goals.
    existingGoals.forEach((goal) => {
        if (goal.textContent === goalInput) {
            isDuplicate = true;
            return;
        }
    });

    // Displays an alert to the user if a duplicate is found and doesn't add the goal to the list.
    if (isDuplicate) {
        alert("Goal already exists!");
        return;
    }
    
    // ⚠️ Hint 3: Code structure
    // You might want to wrap the duplicate-checking logic in an 'if' statement.
    
    // ⚠️ Hint 4: Event listener
    // The event listener that removes goals when clicked is not related to this issue.
    // Focus on preventing duplicates for now.
    
    const newGoal = document.createElement('li');
    newGoal.textContent = goalInput;
    goalList.appendChild(newGoal);
};

// Add event listener to the goal submit button
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

///
let waterIntake = 0;
const updateWaterIntake = (change) => {
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

updateProgressCharts();

const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

const submitMealPlan = (event) => {
    event.preventDefault(); 
    alert('Meal plan submitted successfully! 🍴');
};

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);
