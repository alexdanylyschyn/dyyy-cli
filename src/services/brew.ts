import {spawnSync} from 'child_process'
import cli from 'cli-ux'

export const install = (formula: string) => spawnSync('brew', ['install', formula])
export const installed = (formula: string) => spawnSync('brew', ['list', formula])
export const uninstall = (formula: string) => spawnSync(`brew uninstall --force ${formula}`)
export const tap = (tap: string) => spawnSync('brew', ['tap', tap])

export function installer(formula: string) {
  cli.log(`Installing ${formula} via brew`)

  if (formula.includes('php@')) {
    tap('shivammathur/php')
  }

  const brew = install(formula)

  if (brew.stderr.toString() !== '') {
    cli.warn(brew.stderr.toString())
  }

  if (brew.stdout) {
    cli.log(`${formula} installed`)
  }
}
