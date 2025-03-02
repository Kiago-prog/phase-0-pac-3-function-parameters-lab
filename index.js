const name='Aki'

function introduction(name) {
  console.log(`Hi, my name is ${name}.`);
  return `Hi, my name is ${name}.`;
}

function introductionWithLanguage(name, language) {
  console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`);
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

function introductionWithLanguageOptional(name, language) {
  language = language || 'JavaScript';
  console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`);
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}