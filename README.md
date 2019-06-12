# Fed Blog App

1. [Introduction](#introduction)
2. [Requirements](#requirements)
3. [Setup](#setup)
4. [Workflow](#workflow)

## Introduction

This is a React app that relies on [Create React App](https://github.com/facebook/create-react-app) for building and uses [Tailwind CSS](https://tailwindcss.com/) as a utility-first CSS framework.

## Requirements

- Node v10.16.0
- [Yarn](https://yarnpkg.com/lang/en/docs/install/)

## Setup

1. **Clone the repository to your machine**

2. **Install/Define Node Version**

Install Node 10.16.0 using [asdf](https://github.com/asdf-vm/asdf).

```bash
# install Node 10.16.0
# this may take a while so go get a snack
asdf install nodejs 10.16.0

# when the install is complete, set the local Node version
asdf local nodejs 10.16.0
```

3. **Install Create React App dependencies**

```bash
# this may take a while,
# if you already got a snack, ask a fellow Viget about their weekend plans
yarn install
```

## Workflow

Source files are in the `./src` directory and are compiled to `./public`.

**Primary workflow:** To run a clean-and-compile of all assets, launch a local server and start watching for file changes:

```bash
yarn start
```
