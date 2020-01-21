
// const pwd = require('./pwd');
// const ls = require('./ls');

process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {
  const arrCMD = data.toString().trim().split(' ');
  const cmd = arrCMD[0];
  const fileName = arrCMD[1];
  require('./'+cmd);
  process.stdout.write('\nprompt >');
});

// process.stdout.write('prompt > ');

// process.stdin.on('data', (pwd) => {


//   process.stdout.write(process.cwd());

//   process.stdout.write('\nprompt >');
// })



