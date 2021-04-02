FROM gitpod/workspace-full

USER gitpod

RUN bash -c ". .nvm/nvm.sh \
    && nvm install 9 \
    && nvm use 9 \
    && nvm alias default 9"

RUN echo "nvm use default &>/dev/null" >> ~/.bashrc.d/51-nvm-fix