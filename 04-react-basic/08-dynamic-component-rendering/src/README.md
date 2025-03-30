Instructions
Lab instructions
0 of 1 completed

inLabInstructionsPart~OpfigK2rEe-K6RKAHTgFMw
​
Introduction:

In this lab, learners will build a simple React app to understand key concepts like state management, props passing, and conditional rendering. State management in React allows components to track and update dynamic data, such as whether a user is logged in or not. Props passing enables parent components to send data or functions to child components, like passing login and logout functions to buttons. Conditional rendering controls what appears on the screen based on the current state, such as showing a login button when logged out or a home page with a logout button when logged in.

Goal:

To practice using React’s useState hook to manage the logged-in state and conditionally render components based on that state. Learners will learn how to create and manage interactions between different components and how to pass functions as props to handle user actions (such as login and logout).

Objectives:

By the end of this lab, learners will:

Understand how to use useState to manage state in a React application.

Learn how to conditionally render components based on state.

Pass functions as props between components.

Practice component-based architecture and organizing code into multiple files.

Problem Statement

In this lab, learners will be building a simple application where the user can toggle between a logged-in and logged-out state. Based on the state, different components will be displayed. If the user is not logged in, they will see a Login button. Once they click Login , the app will display a home page along with a Logout button. By clicking Logout, the app will return to the logged-out state.

Instructions:

Step 1: Create the React App

1.  Open the Project Folder

Click on the Explorer icon displayed below.

Select Open Folder from the options.

Navigate to and click on your Project Folder.

2.  Opening a new terminal

Click on the Terminal menu.

From the dropdown, select New Terminal.

3.  After opening the new terminal, the terminal panel will appear as shown below, defaulting to the project directory.

4.  Run the following command to create the React app named toggle_app:

1
npx create-react-app toggle_app 5. The installation process may take some time. Once completed, navigate to the project folder using the following command:

1
cd toggle_app
Step 2: Start the React Development Server

1. Use the following command to start the development server and test the app:

1
npm start 2. You can now view the toggle_app in your browser by navigating to localhost:<exposed port> (eg:3000).

3. After successfully installing the React app, the project structure will appear as shown below.

Step 3: Create LoginButton.js and Add Code

Creating LoginButton.js

Right-click on the src folder inside the toggle_app directory.

Select New File from the context menu.

Name the file LoginButton.js and press Enter.

The file is now created, and you can start writing the code.

Objective

This component renders a button labeled "Login".

The button uses a login function (passed as a prop) to update the state in the parent component when clicked.

Steps to Implement

Create a functional component named LoginButton.

Accept props and use the props.login function for the button’s onClick event.

Add a meaningful label for the button (e.g., "Login").

code

10987654321
// LoginButton.jsx
function LoginButton(props) {
return (
<button onClick={props.login}>
Login
</button>
);
}

export default LoginButton;
Explanation:

The LoginButton component is a simple functional component.

It receives a login function as a prop and binds it to the onClick event of the button.

When clicked, it triggers the login function to change the application state.

Step 4: Create LogoutButton.js and Add Code

Creating LogoutButton.js

Right-click on the src folder inside the toggle_app directory.

Select New File from the context menu.

Name the file LogoutButton.js and press Enter.

The file is now created, and you can start writing the code.

Objective

This component renders a button labeled "Logout".

The button uses a logout function (passed as a prop) to update the state in the parent component when clicked.

Steps to Implement

Create a functional component named LogoutButton.

Accept props and use the props.logout function for the button’s onClick event.

Add a meaningful label for the button (e.g., "Logout").

code

34567891021
// LogoutButton.jsx
function LogoutButton(props) {
return (
<button onClick={props.logout}>
Logout
</button>
);
}

export default LogoutButton;
Explanation

Similar to LoginButton, the LogoutButton receives a logout function as a prop.

It binds this function to the onClick event of the button to handle logout logic when clicked.

Step 5: Create HomePage.js and Add Code

Creating HomePage.js

Right-click on the src folder inside the toggle_app directory.

Select New File from the context menu.

Name the file HomePage.js and press Enter.

The file is now created, and you can start writing the code.

Objective

This component renders a welcome message when the user is logged in.

It doesn't need to handle any functionality, as it only displays static content.

Steps to Implement

Create a functional component named HomePage.

Use JSX to render a <h1> element with a welcome message.

code

8
// HomePage.jsx
function HomePage() {
return (

<h1>Welcome to the home page!</h1>
);
}

export default HomePage;
Explanation

The HomePage component is a functional component that renders a single line of text inside an <h1> tag.

It doesn’t require props or state, as it only displays static content.

Step 6: Modify App.js and Add Code

The App.js file is located in the src folder. It already contains some code; delete the existing code.

Objective

The App component manages the main logic and state for the application.

It determines whether the user is logged in and renders either the LoginButton or the HomePage with a LogoutButton.

Steps to Implement

Import the three components created (LoginButton, LogoutButton, HomePage).

Use the useState hook to manage the loggedIn state.

When loggedIn is false, render the LoginButton.

When loggedIn is true, render the HomePage and the LogoutButton.

Define login and logout functions to toggle the state.

code

272829262524232221201918171615141312111098765432
// App.jsx
// App.jsx
import { useState } from 'react';
import './App.css';

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import HomePage from './HomePage';

function App() {
const [loggedIn, setLoggedIn] = useState(false);

    const login = () => setLoggedIn(true);
    const logout = () => setLoggedIn(false);

    return (
        <>
            {loggedIn ? (
                <div>
                    <HomePage />
                    <LogoutButton logout={logout} />
                </div>
            ) : (
                <LoginButton login={login} />
            )}
        </>
    );

}

export default App;

Explanation:

State Management:

The useState hook is used to define and manage the loggedIn state.

loggedIn is a boolean that determines the current login status.

Functions:

The login function sets loggedIn to true, and the logout function sets it to false.

Conditional Rendering:

When loggedIn is false, the LoginButton is displayed.

When loggedIn is true, the HomePage and LogoutButton are displayed.

Props Passing:

The login and logout functions are passed as props to LoginButton and LogoutButton, respectively.

Step 7: view the output

1. To view the output, click on the Browser Preview icon located on the left panel. It is the last icon in the panel.

2. In your browser, enter the following URL format, replacing <exposed port> with the actual port number displayed in the editor when the server was initially started: http://localhost:<exposed port>.

3. After entering the URL correctly, the webpage will load, displaying a preview of the webpage as shown below.

Step 8: Close the server after completing the lab:

Once you’re done with the lab, make sure to close the server to free up the port:

You can stop the server by pressing Ctrl + C in the terminal.

Key Takeaways:

State Management: Using the useState hook in React helps manage dynamic data, like the logged-in state.

Conditional Rendering: Components can be conditionally rendered based on the state, making the UI interactive.

Props: Functions can be passed as props to child components, enabling actions like login and logout to be handled by different components.

Component-Based Design: Dividing the app into separate components (App, HomePage, LoginButton, and LogoutButton) allows for better organization and reusability.

Final Step: Mark as Completed

Click the Mark as Completed button present below to mark the lab as Completed.
