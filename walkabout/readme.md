# Notes for Walkabout Project

- dumbass lesson for the day - if you intend to mess with the DOM, or access anything, put the script.js call at the bottom of the page. Otherwise, you're calling it before the lements in question exist. D'oh!
- Ok, I _think_ I get the setInterval() logic, though I'm kind of brute forcing it. In theory, if I mapped that to keypress (or whatever the hold-down event is) I could get a smoother moving sheep.
  - a little curious how it compares to the setTimeOut() function. As the name indicates, that seems to be suited to a one shot, rather than an interval.
