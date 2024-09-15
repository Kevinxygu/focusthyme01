# :herb: FocusThyme

FocusThyme is a productivity Chrome extension that blocks distracting websites.

## :book: Learnings

The main purpose of this project was to learn. I especially enjoyed learning about:
| Concept | Learnings |
|:---|:---|
| [TypeScript](https://www.typescriptlang.org/) | This was my first project with TypeScript, and let me familiarize myself before I developed larger TypeScript projects. The project was simple and helped me grasp the fundamentals. |
| [Chrome API](https://developer.chrome.com/docs/extensions/reference/api) | Since I developing a Chrome extension, I learned about and used the Chrome API. I especially enjoyed learning about `storage.sync`, allowing users to sync data across browsers. |
| [Content Scripts](https://developer.chrome.com/docs/extensions/develop/concepts/content-scripts)  | These are files/scripts that run in the context of web pages, and allow extensions to interact with webpages by editing content, reading content, etc. For this project, I used them to block websites|
| [Twilio API](https://www.twilio.com/)  | Next step for this project! :)|

## :city_sunrise: Future Features + Considerations
[Summer 2024]: Turning on/off focus mode is still too "easy." To enforce good habit-building, I'm currently exploring the following features and implementing:

1. A time period for focus mode. After being in focus mode for a set period, users can turn off the mode.
2. Users can save others' phone numbers. If the user attempts turning off focus mode before time is up, a password is texted to those phone numbers and the user must ask for the password to turn it off early. This upholds accountability partners and makes exiting focus mode early a tedious, high-friction task.
