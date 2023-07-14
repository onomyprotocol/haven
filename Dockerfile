# Simple usage with a mounted data directory:
# > docker build -t haven .
# > docker run -it -v ~/.haven:/haven/.haven onomy/haven-dev init haven --home /haven/.haven
# Copy genesis.json from dev/config to ~/.haven/config and Dealer and Validator keys are in dev/config
# > docker run -it -v ~/.haven:/haven/.haven onomy/haven-dev keys add dealer --recover --home /haven/.haven
# > docker run -it -v ~/.haven:/haven/.haven onomy/haven-dev keys add validator --recover --home /haven/.haven
# > docker run -it -v ~/.haven:/haven/.haven onomy/haven-dev gentx validator 10000000000000000000stake --chain-id haven --home /haven/.haven
# > docker run -it -v ~/.haven:/haven/.haven onomy/haven-dev collect-gentxs --home /haven/.haven
# > docker run -it -p 26656:26656 -p 26657:26657 -p 1317:1317 -p 9090:9090 -p 9091:9091 -d -v ~/.haven:/haven/.haven onomy/haven-dev start --home /haven/.haven
FROM golang:1.19-alpine AS build-env

# Set up dependencies
ENV PACKAGES curl make git libc-dev bash gcc linux-headers eudev-dev python3

# Set working directory for the build
WORKDIR /go/src/github.com/pendulum-labs/haven

# Add source files
COPY . .
RUN pwd
RUN ls

RUN go version

# Install minimum necessary dependencies, build Cosmos SDK, remove packages
RUN apk add --no-cache $PACKAGES
RUN make install

# Final image
FROM alpine:edge

ENV HAVEN /haven

# Install ca-certificates
RUN apk add --update ca-certificates

WORKDIR $HAVEN

# Copy over binaries from the build-env
COPY --from=build-env /go/bin/havend /usr/bin/havend

EXPOSE 26656
EXPOSE 26657
EXPOSE 1317
EXPOSE 9090
EXPOSE 9091

# Run havend by default, omit entrypoint to ease using container with havencli
ENTRYPOINT ["havend"]