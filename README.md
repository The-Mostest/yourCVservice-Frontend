## Description
This is a Django Backend and React front end based web app basewd around the concept of 'helping people to track job applications
## Deployment Link
[Frontend Deployment Link](https://yourcvservice.netlify.app)

[Backend Deployment Link](https://yourcvservice-fcca963b3dcd.herokuapp.com/)

## Link to Front / Backend
[ Frontend GitHub Link](https://github.com/The-Mostest/yourCVservice-Frontend)

[ Backend GitHub Link](https://github.com/The-Mostest/yourCVservice-Backend)

## Image of Homepage
![an image of the homepage of the App your CV Service]('/images/homepageImage.png')


## Time Frame / Solo
  - 1 week

## Technologies Used
    - Python
    - Django
    - React
	- dbdiagram.io
	- FIGMA
	- NOTION
	- Netlify
	- Visual Studio Code
	- Google Sheets
	- GitHub
	- Mantine Framework
	- FullCalendar.io
	- Embla

#### Dependencies:

- **fullcalendar**
  - fullcalendar/core
  - fullcalendar/daygrid
  - fullcalendar/list
  - fullcalendar/react
- **google**
  - google/generative-ai
- **mantine**
  - mantine/carousel
  - mantine/core
  - mantine/hooks
  - mantine/nprogress
- **mapbox**
  - mapbox/search-js-react
- **react-pdf**
  - react-pdf/renderer
- axios
- bootstrap
- **embla-carousel**
  - embla-carousel-autoplay
  - embla-carousel-react
- mapbox-gl
- react
- react-bootstrap
- react-dom
- react-icons
- react-images-uploading
- react-pdf
- react-router-dom
- reactjs-popup
- sass



## Brief

The application is built using Django to create a RESTful API, with PostgreSQL serving as the database management system. It employs JWT for token-based authentication, ensuring secure user sessions. Authorization is implemented to restrict guest users from creating, updating, deleting data, or accessing functionalities that enable such actions. In addition to the User model, the app includes at least one other data entity, with at least one entity having a defined relationship with the User model. The application offers complete CRUD functionality and is deployed online, making it accessible to users worldwide.

## Planning
Using Notion to plan my app. I started off listing out the key requirements. Then I did research into components, libraries and themes that I'd like the app to follow.
I also created an ERD, routing table, wireframe (with Figma) and User story. These allowed me to stay on track with the themes and ideas that I had, while also making the logic a little easier to  manage

## Build Process
1. Setup Notion and design the key features and theme of the app
2. Extensive planning of the Wireframe, Routing Tables, ERD and User Stories
3. Back Django Setup
4. Creating the decorators
5. Adding 'users' to backend by creating models, serializers, views and URLs
6. Adding 'job interviews' to backend by creating models, serializers, views and URLs
7. Adding 'job interests' to backend by creating models, serializers, views and URLs
8. Install CORS to allow backend to speak to frontend
9. THEN I created the front end with REACT
10. I first layout the entire app with all the folders and files I think I'll need
11. Created the services and auth to allow sign in/up
12. Added Nav Bar
13. Added the landing page and added the sign up / in via modals with mantine
14. Styled the landing page
15. Created the user homepage
16. Rendered the CV on the CV page
17. Created the Carousel of all the users specific interviews they've created
18. Deployed front and back end
19. Did a big batch of styling to the content
20. Added the Calendar 


## Challenges

  I was bested by spelling As I feel every Software Engineer has been at some point or another.
    I wasn't persisting a sign up or in, upon lots of checking over code and confusion. With some assistence I managed to find out that
    I had spelt the 'access_token' on the back end different to the front end. The same went for signing in and making the formData name 'username',
    instead of what it should have been 'username_or_email'

I was beaten by scss and styling the component imports, such as 'FullCalendar' and 'Embla'. Styling this wasn't as simple as using a 'className'. I did find however, that adding styling into the _global.scss 
did in fact allow me to style a little more liberally, HOWEVER, when I wanted to style a specific component. I was unable to

I had to go back and make sure the user was carrying over the model details from the backend to the front as I tried to get the CV up to render it on a page but I was unable



## Wins
Learning how to import components and use prebuilt ones 
Managing to use flexbox in a way that I has a layout side by side of 1/2x2



## Bugs
Font colour on home page wrong
Calendar layout on Homepage is too short
CV Updating the file and adding it to the model

## Future Improvements / Stretch
MapBox

Calendar Layout
Calendar linking to your personal calendar

General UX improvements

Gemini AI - ATS paragraph

Adding the job interest part
