import {Command, flags} from '@oclif/command'
import {installer, installed} from '../services/brew'
import cli from 'cli-ux'

export default class Install extends Command {
  static description = 'Installs all dependencies via brew'

  static flags = {
    help: flags.help({char: 'h'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const services = ['httpd', 'shivammathur/php/php@7.3', 'shivammathur/php/php@7.4', 'shivammathur/php/php@8.0', 'dnsmasq', 'openssl']

    cli.log('first we\'re gonna check if all required formulaes are installed')

    cli.action.start('installing services')

    services.forEach(service => {
      const check_service = installed(service)

      if (check_service.stderr.toString().includes('Error: No such keg:')) {
        installer(service)
      } else {
        cli.log(`${service} is already installed`)
      }
    })

    cli.action.stop()
  }
}
