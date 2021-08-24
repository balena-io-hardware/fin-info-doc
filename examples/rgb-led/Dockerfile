################################################################################
# Node module builder & CLI fetch
################################################################################
FROM balenalib/fincm3-node:10-buster-build AS nodebuild

RUN install_packages libgirepository1.0-dev

# Defines our working directory in container
WORKDIR /usr/src/app

# Copy the package.json first for better cache on later pushes
COPY ./app/package.json package.json

# Install the building dependencies - we will get rid of them contextually so no additional size will be added to our layer
RUN install_packages python wget
RUN npm install --unsafe-perm --production && npm cache clean --force


################################################################################
# Final image
################################################################################
FROM balenalib/fincm3-node:10-buster

RUN install_packages gir1.2-glib-2.0 curl

WORKDIR /tmp

RUN curl -Ls https://github.com/balena-io/balena-fin-sdk/releases/download/v0.2.0/balena-fin-sdk-v0.2.0.tar.gz | tar -xvz -C .

RUN mv Fin-0.2.typelib /usr/lib/arm-linux-gnueabihf/girepository-1.0/

RUN mv libfin.so /usr/lib/arm-linux-gnueabihf/

WORKDIR /usr/src/app

COPY --from=nodebuild /usr/src/app/node_modules ./node_modules

# Move our scripts in the root to the working directory in the container
COPY ./app/ ./

# Start app
CMD npm start
