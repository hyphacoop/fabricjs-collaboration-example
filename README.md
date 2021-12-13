# Hypha Collab Board

<!-- Changes to badge text in URLs below, require changes to "name" value in .github/workflows/*.yml -->
[![Docker Build](https://github.com/patcon/hyphacoop-collab-board/workflows/Docker%20build/badge.svg)][docker-build]

   [docker-build]: https://github.com/patcon/hyphacoop-collab-board/actions?query=workflow%3A%22Docker+build%22

:link: [`hyphacoop-collab-board.herokuapp.com`][app]

The purpose of this small app is to help us understand our alignment
during meetings, even when we can't see one another's faces or read body
language. It's designed to be easy to use continuously on mobile phone, without
consuming visual attention.

   [app]: https://hyphacoop-collab-board.herokuapp.com/

<p align="center">
  <img src="https://i.imgur.com/1kMhHWi.gif"
    width="500"
    alt="Screencast of usage" />
</p>
<p align="center">
  <sup>
    (Nevermind the "Everything Responsive" text: Was just for testing text placement.)
  </sup>
</p>


## :hammer_and_wrench: Technologies Used

- Websockets (Socket.io)
- Heroku
- Bootstrap
- Javascript
  - Angular
  - FabricJS

## :computer: Local Development

Clone this repository and run the following shell commands afterwards:

```shell
npm install
```

Run the following shell commands:

```shell
node app.js
```

## :copyright: License

[MIT](/LICENSE)
