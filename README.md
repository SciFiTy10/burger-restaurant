<!--
*** To avoid retyping too much info. Do a search and replace for the following:
*** SciFiTy10, burger-restaurant, twitter_handle, email, Big Kahuna Burger, The world famous Big Kahuna Burger restaurant from numerous Quentin Tarantino films.
-->

<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/SciFiTy10/burger-restaurant">
    <img src="media/burger_logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Big Kahuna Burger</h3>

  <p align="center">
    The world famous Big Kahuna Burger restaurant from numerous Quentin Tarantino films.
    <br />
    <a href="https://github.com/SciFiTy10/burger-restaurant"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://big-kahuna-burger.netlify.app">View Demo</a>
    ·
    <a href="https://github.com/SciFiTy10/burger-restaurant/issues">Report Bug</a>
    ·
    <a href="https://github.com/SciFiTy10/burger-restaurant/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#cicd-and-hosting">CI/CD and Hosting</a></li>
        <li><a href="#state-management">State Management</a></li>
        <li><a href="#testing">Testing</a></li>
        <li><a href="#accessibility">Accessibility</a></li>
        <li><a href="#project-folder-structure">Project Folder Structure</a></li>
        <li><a href="#things-i-learned-and-things-i-wouldve-done-differently">Things I Learned and Things I Would've Done Differently</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#running-project">Running Project</a></li>
        <li><a href="#running-tests">Running Tests</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<!--add link to main page -->
<img src="media/main_page.png" alt="main_page" >

Welcome to the online version of the famous Big Kahuna Burger!

This is a project I built to pay tribute to one of my favorite movies, and to have some fun working with React.

---

### Built With

- [React](https://reactjs.org)
- [Material UI](https://material-ui.com)

---

### CI/CD and Hosting

- [Netlify](https://www.netlify.com/?utm_source=google&utm_medium=paid_search&utm_campaign=12755510784&adgroup=118788138897&utm_term=netlify&utm_content=kwd-371509120223&creative=516906172749&device=c&matchtype=e&location=1016396&gclid=Cj0KCQjw4eaJBhDMARIsANhrQADGSLH06Rj9RaCKdY4K8YUEKdA5UGVnk8ge48CXlQzBYgX744jpOgwaAv3sEALw_wcB) - for builds, deployments, and hosting of the project

---

### State Management

Application State is managed using React Hooks ([useState](https://reactjs.org/docs/hooks-state.html) and [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)). State is distributed to child components via the [React Context API](https://reactjs.org/docs/context.html).

- Cart - [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)
  - Cart state is persisted across page reloads using [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) and loaded via the [useEffect](https://reactjs.org/docs/hooks-effect.html) hook
- Menu, Snackbar, Dialogs - [useState](https://reactjs.org/docs/hooks-state.html)

---

### Testing

For unit and small integration tests:

- [Jest](https://jestjs.io/) - for running tests
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - helper library for tests

For larger integration tests:

- [Cypress](https://www.cypress.io/) - for running tests

---

### Accessibility

Accessibility was addressed by leveraging [Material UI's](https://material-ui.com/) component props to use semantic elements where possible.

Aria labelling was applied on:

- Buttons - [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute) attribute
- TextField/Inputs - [label](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label) element wraps input and makes use of the "for" attribute
- Dialogs:
  - [role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role) attribute was set to dialog
  - [aria-modal](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role) prop was set to true
  - [aria-describedby](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/dialog_role) attribute was set to track the dialog description (id was placed on Dialog Content component)
- Snackbar:
  - [role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Alert_Role) attribute was set to alert
  - [aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute) attribute was used

For Accessibility Testing:

- [WAVE](https://wave.webaim.org/extension/) - an extension for testing accessibility
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - for running an audit on accessibility

---

### Project Folder Structure

This project is organized with [collocation](https://kentcdodds.com/blog/colocation) in mind.

Let's begin with the core of the React project, our Components.

- All Material UI components are prefixed with "Mui". This is to differentiate from any custom components and is based on the class names for Mui components.

- Custom Components, Unit/Integration Tests, and Container Components are generally all collocated together
  - Ex: the Cart folder contains all components related to a cart, and a Dialog folder, which holds Cart-related Dialogs. The tests for Cart Dialogs are within the Dialog folder.

This is to reduce cognitive overhead when a new developer is onboarded to the project. It's easier to find a custom component's unit test if it's right next to the component.

- All other components, such as Layout or UI components, are raised up one more level and are a sibling of the Custom components folder

  - Ex: the TextField component is used in the Cart component and the Menu component, so we don't want to duplicate it in both folders.

  - The UI folder contains Material UI (Mui) components which either combine multiple Mui components, or Mui components that are used in multiple locations and rely on additional logic, such as transitions, ref forwarding, or theme styling.

- All other folders, such as cypress, Context, and Theme are raised up one more level and are a sibling of the Components folder
  - Ex: the cypress folder includes larger integration tests which span our entire project, just like the Theme and Context. It makes sense to keep those at the top.

---

### Things I Learned and Things I Would've Done Differently

- Originally, I was way too focused on keeping my project DRY

  **Reason** - I think I had a general concern that leaving any potential chance to componentize would look bad or inconsistent.

  **Outcome** - This had an unintended side effect in the beginning, which was it indirectly influenced how I structured my components and the project itself. When you are trying to aggregate at the beginning of the project, like when you are making containers for where your content will go, it is a slippery slope to componentize everything from the top down.

  **Problems** - This has the potential to lead you to create components you don't even need in the end. I created container components for 2 or 3 components that made up an item just because it occurred in 2 spots. All that did was make my code less readable and more difficult to change when I encountered a responsiveness bug.

  **What would I change** - If I could do it over, I might still begin with a top level organization of sections, and decide where the main content might be. But from then on, all combining of components would start from the bottom up.

A better result would be to solve a problem with the <i>least</i> amount of reusable components, not the most.

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Make sure you have the latest version of npm installed

- npm
  ```sh
  npm install npm@latest -g
  ```

---

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/SciFiTy10/burger-restaurant.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

---

### Running Project

1. Running the project in development mode
   ```sh
   npm start
   ```

### Running Tests

1. Running unit and small integration tests (Jest + React Testing Library)
   ```sh
   npm test
   ```
2. Running larger integration tests (cypress)
   ```sh
   npx cypress open
   ```

<!-- USAGE EXAMPLES -->

## Usage

<!--add items and order -->

Add items to your cart from either the menu, or the cart itself before placing your order.
<img src="media/add_to_cart_and_order.gif" alt="add to cart and order" >

<!--remove items from order -->

Remove items from your cart, or remove them completely from your order.
<img src="media/remove_from_cart_and_order.gif" alt="remove from cart and order" >

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/SciFiTy10/burger-restaurant/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->

## Contact

Tyler Ridings - [LinkedIn](https://www.linkedin.com/in/tyler-ridings-24804585/)

Personal Portfolio - [https://www.tylerridings.dev](https://www.tylerridings.dev)

Project Link - [https://big-kahuna-burger.netlify.app](https://big-kahuna-burger.netlify.app)

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

- [Quentin Tarantino](https://www.imdb.com/name/nm0000233/)
- [Big Kahuna Burger Film Documentation](https://en.wikipedia.org/wiki/Big_Kahuna_Burger)
- [Pulp Fiction Apartment Scene](https://www.youtube.com/watch?v=Y6YBKdmOlM8&t=357s)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/SciFiTy10/burger-restaurant.svg?style=for-the-badge
[contributors-url]: https://github.com/SciFiTy10/burger-restaurant/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/SciFiTy10/burger-restaurant.svg?style=for-the-badge
[forks-url]: https://github.com/SciFiTy10/burger-restaurant/network/members
[stars-shield]: https://img.shields.io/github/stars/SciFiTy10/burger-restaurant.svg?style=for-the-badge
[stars-url]: https://github.com/SciFiTy10/burger-restaurant/stargazers
[issues-shield]: https://img.shields.io/github/issues/SciFiTy10/burger-restaurant.svg?style=for-the-badge
[issues-url]: https://github.com/SciFiTy10/burger-restaurant/issues
[license-shield]: https://img.shields.io/github/license/SciFiTy10/burger-restaurant.svg?style=for-the-badge
[license-url]: https://github.com/SciFiTy10/burger-restaurant/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/tyler-ridings-24804585/
