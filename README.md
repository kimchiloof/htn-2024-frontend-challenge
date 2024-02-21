# Hack The North 2024 Front End Challenge

### 1. Walk us through your development process as you worked on this project. How did you plan out the structure and design of it? How did decide on the tools you've used? Did you encounter any problems? And if so, how did you solve them? Are there any areas of your code that you're particularly proud of or want to point out?

I will be completely honest, this was my first time building a website with modern tools (I previously used PHP and plain HTML/CSS haha). I decided to go with React to build my app as there seems to be lots of resources and tools (including react-bootstrap which I used to help me quickly build my cards, modals, and buttons). I decided to go with the GraphQL endpoint with ApolloGraphQL as I found it easier to understand conceptually than HTTP requests. Being the more flexible system, in the future, should there be lots of events to display, I believe GraphQL would be easier to specify which elements of each event to request, saving on the time required to get a request for the main events page. 

As for the structure of the app, I planned to have the main page give viewers a list of all events, with each event's basic information listed (name, type, speakers, date), making for a clean home page. Viewers can click on each card to view more details in a popup, where they can further go to the events page (private link) or see what happened (public link). Initially, I also wanted to build a more thorough log-in and sorting system, but that was unfortunately scrapped due to a lack of time on my part.

One of the biggest issues I encountered was dealing with the log-in state. Ideally, I would have used cookies like most other websites, but I wasn't able to figure out a simple way to implement it in a timely manner, and went with a global state instead. This allowed for a quick and easy debug "log in" button which is used to show and hide all private events (those with a padlock on the top right of the card).

While I can tell my code is far from best React practices in some places, I'm overall just proud in being able to create such an app in such little time. Glad to have learned it, and hope to continue working on React!

### 2. Given additional time, how would you extend your application to become a fully functional product that thousands of hackers and the general public would use at Hackathon Global Inc.™'s next event? Would you add more features and performance metrics? If so, what would they be? 

First and foremost, a robust log in system. Implement a log-in modal that uses cookies to allow users to log in and for the browser to remember their credentials.

Implementing sorting, which was unfortunately not completed in time, would also be a high priority. I would make the "Sort Date" button be a dropdown, which gives a hacker several options to sort (by start time, duration, and type of event, for example). The list of events could be stored in a state as a constant, and they would be sorted on the fly as the user selects which sorting method they would like. This way the website does not have to store all the sorted event lists, just one.

Similarly, searching would also be useful. Allowing hackers to search for workshop names, specific speakers, and specify a time frame to search for would all be useful. To implement this, it would probably be similar to sorting, where on render, the website iterates through to find and display only matching events. Again, this prevents the need for saving multiple sets of event lists, and also reduces the number of api calls. Persistence of these searches and sort queries could be done via cookies as well.

I also unfortunately did not manage to complete the links to related projects. While I did manage to get the names from the ids, I did not have the time to implement opening the corresponding modal in time. However, since each event card has an id corresponding to the event, any modal should be able to open any other event's modal using that id.

### 3. Any other thoughts you have (not limited to the previous questions).

While I did deploy my app onto vercel, I am a bit unsure as to why it does not load the events on the vercel app. It loads fine when built on my local machine, but from the vercel app it says "No 'Access-Control-Allow-Origin' header is present on the requested resource" in the console.

Find the deployment [here](https://htn-2024-frontend-challenge-git-main-kimchiloofs-projects.vercel.app/). 
# Images

(Because Vercel isn't loading :P)

Main page:
![Main](https://github.com/kimchiloof/htn-2024-frontend-challenge/blob/main/images/eventspage.png)

When logged in, can see private events
![Logged In](https://github.com/kimchiloof/htn-2024-frontend-challenge/blob/main/images/loggedinevents.png)

Public event details
![Modal](https://github.com/kimchiloof/htn-2024-frontend-challenge/blob/main/images/publiceventmodal.png)

Private event details
![Logged In Modal](https://github.com/kimchiloof/htn-2024-frontend-challenge/blob/main/images/privateeventmodal.png)
