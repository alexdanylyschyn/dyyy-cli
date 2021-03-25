dyyy-cli
========

the dyyy.dev development cli

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/dyyy-cli.svg)](https://npmjs.org/package/dyyy-cli)
[![Downloads/week](https://img.shields.io/npm/dw/dyyy-cli.svg)](https://npmjs.org/package/dyyy-cli)
[![License](https://img.shields.io/npm/l/dyyy-cli.svg)](https://github.com/alexdanylyschyn/dyyy-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g dyyy-cli
$ dyyy COMMAND
running command...
$ dyyy (-v|--version|version)
dyyy-cli/0.0.1 darwin-x64 node-v15.0.0
$ dyyy --help [COMMAND]
USAGE
  $ dyyy COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`dyyy hello [FILE]`](#dyyy-hello-file)
* [`dyyy help [COMMAND]`](#dyyy-help-command)

## `dyyy hello [FILE]`

describe the command here

```
USAGE
  $ dyyy hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ dyyy hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/alexdanylyschyn/dyyy-cli/blob/v0.0.1/src/commands/hello.ts)_

## `dyyy help [COMMAND]`

display help for dyyy

```
USAGE
  $ dyyy help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->
