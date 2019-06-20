# React Native - RocketBox

[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/osvaldokalvaitir/react-native-rocketbox/blob/master/LICENSE)
![](https://img.shields.io/github/package-json/v/osvaldokalvaitir/react-native-rocketbox.svg)
![](https://img.shields.io/github/last-commit/osvaldokalvaitir/react-native-rocketbox.svg?color=red)
![](https://img.shields.io/github/languages/top/osvaldokalvaitir/react-native-rocketbox.svg?color=yellow)
![](https://img.shields.io/github/languages/count/osvaldokalvaitir/react-native-rocketbox.svg?color=lightgrey)
![](https://img.shields.io/github/languages/code-size/osvaldokalvaitir/react-native-rocketbox.svg)
![](https://img.shields.io/github/repo-size/osvaldokalvaitir/react-native-rocketbox.svg?color=blueviolet)
[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)](https://code.visualstudio.com/)
![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)

Aplicação RocketBox usando React Native, Axios, React Navigation, Socket.io, React Native Vector Icons, react-native-iphone-x-helper, React Native Async Storage, React Native Image Picker, react-native-fs, react-native-file-viewer e date-fns consumindo os recursos da API do [Node - RocketBox](https://github.com/osvaldokalvaitir/node-rocketbox).

## Índice

- [Capturas de Tela](#capturas-de-tela)

  - [Principal](#principal)

  - [Box](#box)

- [Desenvolvimento](#desenvolvimento)

  - [Configurações Iniciais](#configurações-iniciais)

  - [Instalação do Projeto](#instalação-do-projeto)

  - [Execução do Projeto para Desenvolvimento](#execução-do-projeto-para-desenvolvimento)

- [Utilizados no Projeto](#utilizados-no-projeto)

  - [Bibliotecas](#bibliotecas)

  - [APIs](#apis)

## Capturas de Tela

### Principal

![Main](/assets/main.png)
Nesta primeira tela é possível criar um novo box.

### Box

![Box](/assets/box.png)
É a tela onde estão todos os arquivos vindos da API referentes ao box criado, podendo adicionar novos arquivos (somente imagens), clicando no botão inferior direito e localizando a imagem na galeria.

## Desenvolvimento

### Configurações Iniciais

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/README.md) e siga `Configurações Iniciais`.

### Instalação do Projeto

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/nodejs.md) e siga `Instalação de Projeto`.

### Execução do Projeto para Desenvolvimento

Clique [aqui](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-native-cli.md) e siga `Execução de Projeto para Desenvolvimento`.

## Utilizados no Projeto

### Bibliotecas

- [Axios](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/axios.md)

- [date-fns](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/date-fns.md)

- [React Native Async Storage](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/@react-native-community-async-storage.md)

- [React Native Gesture Handler](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-native-gesture-handler.md)

- [React Native Image Picker](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-native-image-picker.md)

- [React Native Vector Icons](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-native-vector-icons.md)

- [React Navigation](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-navigation.md)

- [react-native-cli](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-native-cli.md)

- [react-native-file-viewer](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-native-file-viewer.md)

- [react-native-fs](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-native-fs.md)

- [react-native-iphone-x-helper](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/react-native-iphone-x-helper.md)

- [socket.io-client](https://github.com/osvaldokalvaitir/projects-settings/blob/master/nodejs/libs/socketio-client.md)

### APIs

- **[Node - RocketBox](https://github.com/osvaldokalvaitir/node-rocketbox)**

  - **Rotas**

    - Boxes

      - Adiciona novos boxes
      - Busca todos os dados de um box

    - Arquivos

      - Adiciona novos arquivos para um box
