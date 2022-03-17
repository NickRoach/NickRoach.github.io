# Thank you for checking out my portfolio page!

The UX of this page is based on GSAP Scrolltrigger, used both to control progress through the wormhole and to display and hide the content cards (cards.js). The wormhole itself is made using three.js (wormhole.js) and was adapted from a codepen by Aaron Sherrill available here: https://codepen.io/motionharvest/pen/WNQYJyM

Media queries are used to change how the skills icon grid is displayed, having either 6, 4 or 3 columns, depending on the screen width. Similarly, media queries are used to either display the screenshots beside their associated blurb or above it.

Several resolutions of the portrait images and screenshots are hosted, and the "srcset" html attribute is used to allow the browser to choose the smallest version of each image that will display at adequate resolution, depending on the viewport size. This is aimed at minimizing load time.

Because it is not obvious to the mobile user that they should scroll to reveal more content, I added a swiping hand animation that appears when the page loads (this does not appear if the viewport exceeds a certain width). The swiping motion is animated using CSS only.
Because the swiping hand occludes the content beneath, I want it to move out of the way as soon as the user scrolls a little bit. I used javascript to amplify the scrolling speed of the swiping hand by linking its "top" value to window.scrollY. This may be found in handSwipe.js. Because it would be confusing to the user to display the swiping hand before the page has fully loaded, and therefore before there is anywhere to scroll to, the hand is set to appear using window.onload.

On the contact card, I wanted to make it easy for the user to copy my email address without having to highlight and right click. I therefore added a tooltip that tells the user that if they click on my email address that it will copy it ("copy to clipboard"), and when they click it changes to "copied". On mobile, if the user taps the email it will just say "copied". I programmed this tooltip to fade and disappear after one second because otherwise it would persist until the user touches elsewhere.
The mechanism of the copying action is that a read-only text box is selected by its ID and then selected and copied using javascript (see clipboardCopy.js).
