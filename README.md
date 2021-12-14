# Polis IRL Simulator

<!-- Changes to badge text in URLs below, require changes to "name" value in .github/workflows/*.yml -->
[![Docker Build](https://github.com/patcon/hyphacoop-collab-board/workflows/Docker%20build/badge.svg)][docker-build]
[![Heroku Deploy](https://github.com/patcon/hyphacoop-collab-board/workflows/Heroku%20deploy/badge.svg)][heroku-deploy]

   [docker-build]: https://github.com/patcon/hyphacoop-collab-board/actions?query=workflow%3A%22Docker+build%22
   [heroku-deploy]: https://github.com/patcon/hyphacoop-collab-board/actions?query=workflow%3A%22Heroku+deploy%22

:link: [`polis-irl.herokuapp.com`][app]

A demo to show how Polis conversations might augment in-person meetings.

**Warning: Work in progress.**

The purpose of this proof-of-concept app will be to demonstrate how Polis might
be used to support an in-person facilitated activity:

- [ ] Participants will be able to identity themselves with a social handle (e.g., GitHub username).
- [ ] An avatar will appear on the board corresponding to participant's avatar on that network.
- [x] Draggable markers on a collaborative canvas will represent moving around a room.
- [ ] Facilitator will be able to select and show statements from a Polis conversation.
- [x] Moving closer to specific zones will signify to others whether you agree/disagree/pass.
- [ ] Facilitator will be able to click a button to have all attendee preferences instantly submitted based on proximity to zones.
- [ ] Polis visualization will be visible on the page.
- [ ] Participants will be able to authenticate with a login provider.
- [ ] Only a participant will be able to move their own avatar.
- [ ] Participants will be able to log in later and continue participating individually.

   [app]: https://polis-irl.herokuapp.com/

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
  - Webpack
- Docker
  - Docker Compose
- GitHub Actions

## :computer: Development

Clone this repository and run the app either:
- locally (directly on your workstation), or
- using Docker (in a virtualized container environment).

After running the commands below, visit: `http://localhost:3000`

### Local Development


```shell
npm install
```

Run the following shell commands:

```shell
node app.js
```

### Docker Development

```shell
docker-compose up --detach
```

## :copyright: License

[MIT](/LICENSE)
