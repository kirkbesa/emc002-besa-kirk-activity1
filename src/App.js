import './App.css';
import MealCard from './MealCard.js';
import './MealCard.css';
import Background from './background.png';

var backgroundStyle = {
  width: "100%",
  height: "auto",
  backgroundImage: `url(${Background})`,
  //filter: "blur(2px)"
};

function App() {
  return (
    <div style={backgroundStyle} class="container">
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Orelega+One&family=Varela&family=Varela+Round&display=swap" rel="stylesheet"/>
      
      <div class="item item-1">
        <MealCard 
          imageSource = "Images/Carbonara (Feast Tray).png" 
          altText = "Carbonara (Feast Tray)" 
          mealName = "Carbonara (Feast Tray)" 
          mealDescription = "Classic Carbonara made with Cream, Bacon, and Eggs."
          mealPrice = "₱1,130"
        />
      </div>
      
      <div class="item item-2">
        <MealCard 
          imageSource = "Images/Italian Garlic Sausage in Pomodoro.png" 
          altText = "Italian Garlic Sausage in Pomodoro" 
          mealName = "Italian Garlic Sausage in Pomodoro" 
          mealDescription = "Spicy Italian sausages tossed in garlic and pomodoro." 
          mealPrice = "₱435"
        />
      </div>

      <div class="item item-3">
        <MealCard 
          imageSource = "Images/Lucios Truffle Pasta (Feast Tray).png" 
          altText = "Lucios Truffle Pasta (Feast Tray)" 
          mealName = "Lucios Truffle Pasta (Feast Tray)" 
          mealDescription = "Spaghetti served with creamy truffle sauce."
          mealPrice = "₱830"
        />
      </div>
      
      <div class="item item-4">
        <MealCard 
          imageSource = "Images/Carbonara (Feast Tray).png" 
          altText = "Carbonara (Feast Tray)" 
          mealName = "Carbonara (Feast Tray)" 
          mealDescription = "Classic Carbonara made with Cream, Bacon, and Eggs."
          mealPrice = "₱1,130"
        />
      </div>
    </div>
  )
}

export default App;
