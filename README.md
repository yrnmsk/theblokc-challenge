# theblokc-challenge

A challenge I was given as assessment for my internship at TheBLOKC

## Challenge

### Instructions

- Create a NextJS application that renders a button with text "Connect with Metamask"
- The button should open the Metamask browser extension and let the user connect to the app using their Metamask wallet
- Once connected, the application should query the user's balance and display it
- Bonus (Optional): Perform the balance inquiry using a Backend API. You may use NextJS API or any backend programming language

### Additional Notes

- You may use any other technology alongside NextJS, and if NextJS is too challenging then you may also use other alternatives
- No need to use any UI framework, but a design is a plus
- You may deploy to cloud hosting services, but not required

## Solution

### Technology I used

- NextJS, App router
- TailwindCSS

Dev dependency

- @metamask/providers, for types

### Side Notes

- Initially catered for a design, but I scrapped it midway (uncommitted, not on remote) because I realized browser extensions doesn't even work for browsers in mobile devices.
- I could've splitted this into components, but didn't. It feels like overkill. Same case with NextJS routes. I initially planned to, but didn't proceed.
- I also partly solved the bonus optional challenge, but it was unfortunately deleted when I cleared all my uncommitted changes (the ones where I did the routes).
- I didn't utilize server components at all, it might have been beyond my scope of knowledge and skills unfortunately. I just sticked with client components.

### Links

- [TheBLOKC](https://theblokc.com)
- [Live demo](https://theblokc-challenge.vercel.app)
