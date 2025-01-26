## Inspiration
We were inspired by the unfortunate reality that many patients waiting in emergency rooms around the world are left for hours without company, comfort, or support while they wait for medical treatment. There is a sense of isolation that comes from feeling alone and hurt. How great would it be if you could connect with other people in the waiting room, anonymously, as a form of group therapy? After all, 'misery loves company'...
_ Psychology has found that knowing that other people are in the same situation can reduce pain levels_

## What it does
1. Gives ER patients a sense of community with other patients by offering them an outlet to discuss their pains, worries, and hopes.
2. Distracts patients to reduce anxiety and boredom by offering a series of activity. The first activity we designed allows users to login with an anonymous username, pinpoint their injury or ailment with an arrow, and start a thread. Then, they are able to navigate through other user's threads, read their stories, and leave comments. 

## How we built it
We started by using Figma to create a cohesive, fleshed-out vision board which guided our development. The project is a web application which is build on the backend with Node.js, and connected to a database which is hosted on MongoDB. The database includes the patients and threads.
The frontend is built using Vite and React and involves a multipage experience which allows users to navigate and place arrows with clicks and buttons.

## Challenges we ran into
Our biggest challenge was that the majority of our team members have never done web development before, so we were learning TailwindCSS, React, Node.js, Vite, and HTML. There was a big learning curve and we spent a lot of time learning these languages and frameworks!
It was also a challenge to reign it what was feasibly possible during a 24-hour Hackathon, and that was a little bit sad.

## Accomplishments that we're proud of
We are very proud of our website. There are multiple navigation features, including text boxes to enter your username and your thread, an information button, clicks to navigate to different parts of the background image (a 'map'), submit buttons, and home buttons. We also created 'components' which allow pop-up boxes, and the ability to place an arrow for your injury location. The users and forum posts are connected to the database.
** We accomplished all three of our goals we defined 24 hours ago: allow users to create a forum post, create a clickable zoom in-n-out from the principal background image, and allow users to drag and drop an arrow to pinpoint their pain location.

## What we learned
We learned a lot about web development and feel like each of us could now make our own websites! We also learned about how to connect the backend database to the frontend UI, and how to collaborate on a project.

## What's next for archER
1. Create a dynamic thread display which is geo-referenced to the body part location (the arrow location), and lists an updates comments as they are added. The thread will be queried when an arrow is clicked.
2. For security, a unique code will be displayed in the hospital waiting room. The user must enter this code to create their account. Further, user authentication (using Auth0) will to allow for repeated sign-in, which would send a text or email to the user's device to confirm they are the owner of the username. As well, account users (including their threads) will be deleted after 4 hours to prevent cluttering of the webpage.
3. Users will be able to accumulate and lose points. A NLP algorithm or GenAI will parse the user's comment to determine if it is 'helpful', 'neutral' or 'hateful', and awarded points based on this. The user will start with 5 points, and their account will be deactivated when they have fewer than 5 points. An additional point will be awarded 'randomly' to every user for every hour they wait :)
4. On separate pages, we would like to introduce further games, such as a 20-questions-style "guess my triage level", a page to display all the current threads, and more.
