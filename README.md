## Project Name
* DevStack
 
Project Description
DevStack is a technology stack management web application where users
can explore different technologies, view their details, and add their
favorite technologies to their stack

 ## Technologies Used

- React
- TypeScript
- Tailwind CSS
- DaisyUI
- JSON (for technology data)
- React Icons
- Vite (build tool)
- React-Toastify (NPM Package)

##  Features
1. Browse different technologies with their details.
2. Add and remove technologies from the personal stack.
3. View technology information such as category, difficulty, rating, etc.


// answer the question,,,,,,, 
## What is JSX, and why is it used in React?
ans : JSX is like a function and is a syntax, and write html code inside JS.React uses JSX to make UI code easier to write and understand.

## What is the difference between props and state?
ans: props are use to pass data from parent component to a child component.
State are use to store data and manage data inside a component.

## What does the `useState` hook do, and where did you use it in this project?
ans: The useState hook manage and changing to data in a component. I used it to manage the selected technologies in the stack.

## What does the useEffect hook do, and why did you need it to load the JSON data?
ans: `useEffect` runs code when something happens in a component, such as
when the component loads. .When the application starts I used to load the technologys data from the json file.That's use to useState hook.

## Why does every item in a .map() list need a unique key prop?
ans: React uses the `key` to identify each item in a list.
It helps React efficiently update only the items that have changed.

##  What is conditional rendering?
ans: Conditional rendering means showing different UI based on a condition. mulltiple action in your website mustbe you can use conditional rendering. 
## How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
ans: A parent sends data to a child useing props. A child can send data back by calling a function that the parent passes through props.
