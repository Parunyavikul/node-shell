function pwd () {
  process.stdout.write('prompt > ');

  process.stdin.on('data', (pwd) => {

    process.stdout.write(process.cwd());

    process.stdout.write('\nprompt >');
  })
}

module.exports = pwd
