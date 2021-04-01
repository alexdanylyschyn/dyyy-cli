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

  if (formula.includes('httpd')) {
    cli.log('stopping native apache')
    const stop_service = spawnSync('sudo', ['apachectl', 'stop'])

    if (stop_service.stderr.toString() !== '') {
      cli.warn(stop_service.stderr.toString())
    }

    cli.log('unloading native apache')
    const unload_service = spawnSync('sudo', ['unload', '-w', '/System/Library/LaunchDaemons/org.apache.httpd.plist', '2>/dev/null'])

    if (unload_service.stderr.toString() !== '') {
      cli.warn(unload_service.stderr.toString())
    }
  }

  const brew = install(formula)

  if (brew.stderr.toString() !== '') {
    cli.warn(brew.stderr.toString())
  }

  if (brew.stdout) {
    cli.log(`${formula} installed`)
  }
}
