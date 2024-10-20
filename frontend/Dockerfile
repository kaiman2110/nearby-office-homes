FROM node:18-slim

ENV TZ Asia/Tokyo

WORKDIR /frontend

# RUN npm install -g yarn

COPY . /frontend

RUN rm -rf .git/
RUN rm -rf node_modules

RUN yarn install

# RUN npx nuxi upgrade --force

EXPOSE 3000
EXPOSE 24678

CMD ["yarn", "dev"]