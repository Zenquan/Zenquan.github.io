#!/usr/bin/env node

/**
 * Module dependencies.
 */

const program = require('commander'),
  res = require('../utils'),
  resolveComand = res.resolveComand;

program
  .version(require('../package.json').version)
  .usage('<command> [project-name]');

program
  .command('add')
  .description('Add a new template')
  .alias('a')
  .action(() => {
    require(resolveComand('add'))
  })

  program
  .command('list')
  .description('List all the templates')
  .alias('l')
  .action(() => {
    require(resolveComand('list'))
  })

program
  .command('init')
  .description('Generate a new project')
  .alias('i')
  .action(() => {
    require(resolveComand('init'))
  })

program
  .command('delete')
  .description('Delete a template')
  .alias('d')
  .action(() => {
    require(resolveComand('delete'))
  })

program
  .command('map')
  .description('Place files to diffirent position')
  .alias('m')
  .action(() => {
    require(resolveComand('map'))
  })

program.parse(process.argv)

if(!program.args.length){
  program.help()
}

program.on('--help', function () {
  console.log('  Examples:')
  console.log()
  console.log('    # create a new project with an official template')
  console.log('    $ react-ts init my-project')
  console.log()
})
