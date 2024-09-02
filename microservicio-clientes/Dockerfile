FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

RUN groupadd -r nodejs && useradd -r -g nodejs nodejs
USER nodejs

EXPOSE 5000

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
    CMD node healthcheck.js

CMD ["node", "src/app.js"]