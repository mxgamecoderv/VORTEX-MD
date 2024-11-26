FROM quay.io/gurusensei/gurubhay:latest

RUN git clone https://github.com/mxgamecoder/VORTEX-BOT-V1 /root/global

WORKDIR /root/global/

RUN npm install --platform=linuxmusl

EXPOSE 5000

CMD ["npm", "start"]
