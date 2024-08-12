# :herb: FocusThyme

FocusThyme is a productivity Chrome extension which blocks distracting websites.

## :book: Learnings

The main purpose of this project was to learn. I especially enjoyed learning about:
| Concept | Learnings |
|------------|-------------|
| TypeScript | This was my first project with TypeScript, and let me familiarize myself before I developed larger TypeScript projects. The project was simple and helped me grasp the fundamentals. |
| Chrome API | Since I developing a Chrome extension, I learned about and used the [Chrome API](https://developer.chrome.com/docs/extensions/reference/api). I especially enjoyed learning about `storage.sync`, allowing users to sync data across browsers. |
| Content Scripts    | These are files/scripts that run in the context of web pages, and allow extensions to interact with webpages. Docs are [here](https://developer.chrome.com/docs/extensions/develop/concepts/content-scripts)|

## :city_sunrise: Future Features + Considerations
[Aug 10]: Turning on/off focus mode is still too "easy." To enforce good habit-building, I'm currently exploring the following features and implementing:

1. A time period for focus mode. After being in focus mode for a set period, users can turn off the mode.
2. Users can save others' phone numbers. If the user attempts turning off focus mode before time is up, a password is texted to those phone numbers and the user must ask for the password to turn it off early. This upholds accountability partners and makes exiting focus mode early a tedious, high-friction task.
