const primary = {
  title: 'Primary School', description: 'We provide home tuition for all clients with children' +
      ' doing KCPE examinable subjects.'
};

const high = {
  title: 'High School', description: 'We cover tuition for all KCSE examinable subjects.'
};

const international = {
  title: 'International Schools Systems', description: 'Qualified tutors for the following' +
      ' international systems:',
  list: [{key: '1', text: 'IGCSE'}, {key: '2', text: 'American System'}, {key: '3', text: 'IB etc'}]
};

const sports = {
  title: 'Sports and Games', description: 'Below are the sports we can provide tuition for:',
  list: [{key: '1', text: 'Chess'}, {key: '2', text: 'Skating'}, {key: '3', text: 'Swimming etc'}]
};

const foreign = {
  title: 'Foreign Languages', description: 'We provide foreign language tutors for:',
  list: [{key: '1', text: 'German'}, {key: '2', text: 'Chinese'}, {key: '3', text: 'Latin'}, {key: '4', text: 'French etc'}]
};

const hobbies = {
  title: 'Hobbies', description: 'We help develop interests and hobbies by providing tutors for:.',
  list: [{key: '1', text: 'Art'}, {key: '2', text: 'Photography'}, {key: '3', text: 'Music' +
        ' Instruments'}, {key: '4', text: 'DJ etc'}]
};


const descriptions = {
  primary: primary, high: high, international: international, sports: sports, foreign: foreign, hobbies: hobbies
};

export default descriptions;
