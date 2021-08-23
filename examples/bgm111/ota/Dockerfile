FROM balenalib/raspberrypi3-debian

# Defines our working directory in container
WORKDIR /usr/src/app

# install required packages
RUN apt-get update && apt-get install -yq --no-install-recommends \
    ftdi-eeprom \
    git \
    build-essential \
    libtool \
    pkg-config \
    autoconf \
    automake \
    texinfo \
    libusb-1.0 \
    libftdi-dev \
    screen \
    telnet \
    make \
    && git clone --depth 1 https://github.com/balena-io-modules/FT2232H-56Q-openocd && \
      cd FT2232H-56Q-openocd && chmod -R +x ./* && autoreconf -f -i && ./configure && make && \
      make install

# Move app to filesystem
COPY ./app ./

# enable systemd init system in the container
ENV INITSYSTEM on

# Start app
CMD ["bash", "/usr/src/app/start.sh"]
