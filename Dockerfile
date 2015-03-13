# Pull base image.
FROM dockerfile/nodejs

# Install Ghost
RUN \
  cd /tmp && \
  wget https://ghost.org/zip/ghost-latest.zip && \
  unzip ghost-latest.zip -d /ghost && \
  rm -f ghost-latest.zip && \
  wget https://github.com/skyglobal/edge-theme/archive/master.zip && \
  unzip master.zip -d /ghost/content/themes/ && \
  rm -f master.zip && \
  cd /ghost && \
  npm install --production && \
  useradd ghost --home /ghost

# Add files.
ADD config.js /ghost/config.js
ADD start.bash /ghost-start


# Set environment variables.
ENV NODE_ENV production

# Define mountable directories.
VOLUME ["/data", "/ghost-override"]

# Define working directory.
WORKDIR /ghost

# Define default command.
CMD ["bash", "/ghost-start"]

# Expose ports.
EXPOSE 2368