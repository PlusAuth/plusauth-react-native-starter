<div align="center">
  <a href="https://plusauth.com/">
    <img src="https://docs.plusauth.com/favicon.png" alt="Logo" width="144">
  </a>
</div>

<h1 align="center">PlusAuth Flutter Starter Project</h1>

 <p align="center">
    Simple React Native project demonstrates basic authentication flows with PlusAuth
    <br />
    <br />
    <a href="https://docs.plusauth.com/quickStart/native/react-native" target="_blank"><strong>Explore the PlusAuth React Native docs »</strong></a>
</p>

<details>
  <summary>Table of Contents</summary>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#prerequisites">Prerequisites</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#what-is-plusauth">What is PlusAuth</a></li>
 </ol>
</details>

---

## About The Project

It is a very simple React Native project demonstrating basic authentication flows such as register, login, and logout. To keep things simple, we used [React Native AppAuth](https://github.com/FormidableLabs/react-native-app-auth) for authentication.

## Prerequisites

Before running the project, you must first follow these steps:

1. Create a PlusAuth account and a tenant at [PlusAuth Dashboard](https://dashboard.plusauth.com)
2. Navigate to [Clients](https://dashboard.plusauth.com/~clients) tab and create a client of type `Native Application`
3. Go to the details page of the client that you've just created and set the following fields as:

- Redirect Uris:  `com.plusauth.reactnativeexample:/oauthredirect/login`
- Post Logout Redirect Uris:  `com.plusauth.reactnativeexample:/`

Finally, note your Client Id and domain(e.g., https://example.plusauth.com) for app configuration on the next step.

## Getting Started

First, we need to supply the required configuration values for the application. Rename the `plusauth-env.example.js` file as `plusauth-env.js`.

Then modify the values inside the `plusauth-env.js` file using your Client ID and your PlusAuth tenant name.

Start the application with:

```shell
npm run start
# or with yarn
yarn start
```

Finally, run the application in an Android device with:

```shell
npm run android
# or with yarn
yarn start
```

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.

## What is PlusAuth

PlusAuth helps individuals, teams, and organizations to implement authorization and authentication systems in a secure, flexible and easy way.

<a href="https://plusauth.com/" target="_blank"><strong>Explore the PlusAuth Website »</strong></a>

<a href="https://docs.plusauth.com/" target="_blank"><strong>Explore the PlusAuth Docs »</strong></a>

<a href="https://forum.plusauth.com/" target="_blank"><strong>Explore the PlusAuth Forum »</strong></a>