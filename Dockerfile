FROM alpine:3.7
RUN mkdir -p /microservice-test
WORKDIR /microservice-test
COPY ./ /microservice-test
RUN yarn install

CMD ["yarn", "cucumber-prod"]