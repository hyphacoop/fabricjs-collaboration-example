FROM node:16.13.1-alpine

RUN apk update \
  && apk add --no-cache --virtual .build-deps git

# Allow npm to run postinstall script even though root
# See: https://stackoverflow.com/a/47748545
RUN addgroup --system app \
  && adduser --system --home /app --ingroup app app

USER app
WORKDIR /app
COPY --chown=app:app package.json package-lock.json ./
RUN npm ci
COPY --chown=app:app . ./
RUN npm run build

USER root
RUN apk del .build-deps

EXPOSE 3000

USER app
CMD node app.js
