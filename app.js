const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('[data-filter]').forEach(item => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  let count = 0;
  document.querySelectorAll('[data-category]').forEach(row => {
    row.hidden = button.dataset.filter !== 'all' && row.dataset.category !== button.dataset.filter;
    if (!row.hidden) count++;
  });
  document.querySelector('.filter-status').textContent = `${count} projects shown.`;
}));
const projects = {
  soulsync: {label:'PERSONAL SIDE PROJECT · NATIVE ANDROID', title:'SoulSync', description:'A native Android dating app that puts compatibility and profile context at the center of discovery.', details:['Discover nearby people through detailed profiles, interests, languages, and match percentages.','Compatibility questions help people find common ground before the first message.','Real-time chat includes replies, image sharing, typing indicators, read states, and push notifications.','Selfie verification, blocking, reporting, and profile visibility controls support a more considered experience.'], url:'https://api.soulsync.space/', link:'Visit SoulSync ↗'},
  petpals: {label:'PERSONAL SIDE PROJECT · IN DEVELOPMENT', title:'PetPals', description:'My Kotlin Multiplatform side project for pets and their people, with an iOS experience in development and Android & iOS planned for release. The app is not publicly released yet.', details:['Nearby discovery with pet profiles, energy levels, and play preferences.','Communities and meetups for sharing advice and finding new companions.','Chat and playdate planning to turn introductions into real-world connections.','App screenshots feature illustrative demo profiles and activity.'], url:'https://api.petpals.live/', link:'Visit the preview website ↗'},
  gloo: {label:'AJICREATIVE · CLIENT WORK',title:'Gloo Gloo',description:'An Android application connecting partner bars with their customers, developed during my work at Ajicreative.',details:['Kotlin and MVVM architecture for the Android application.','Retrofit for communicating with backend APIs.','Google and Facebook authentication, Google Maps SDK, and Stripe payments.'],url:null},
  clientapps: {label:'AJICREATIVE · CLIENT WORK',title:'Apps for everyday experiences',description:'A selection of Android applications I worked on at AjiCreative.',details:['Illico — a food delivery application helping restaurants simplify online ordering.','Elige — a mobile platform connecting barbers and clients.','Number 10 — a social application for football fans, with an emphasis on engaging UI and animations. Documented as in development during that period.'],url:null},
  tv: {label:'FREELANCE · ANDROID TV',title:'Waiting Room TV',description:'An Android TV application designed for denture clinic waiting rooms.',details:['YouTube video streaming for waiting room screens.','RSS news headlines to keep visitors informed.','Location-based weather using GPS.'],url:null}
};
const dialog = document.querySelector('#project-dialog');
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const project = projects[button.dataset.project];
  document.querySelector('#dialog-label').textContent = project.label;
  document.querySelector('#dialog-title').textContent = project.title;
  document.querySelector('#dialog-description').textContent = project.description;
  const list = document.createElement('ul');
  project.details.forEach(detail => {const item = document.createElement('li');item.textContent = detail;list.append(item);});
  document.querySelector('#dialog-details').replaceChildren(list);
  const link = document.querySelector('#dialog-link');
  link.hidden = !project.url;
  link.style.display = project.url ? 'inline-flex' : 'none';
  if (project.url) {link.href = project.url;link.textContent = project.link;}
  else link.removeAttribute('href');
  dialog.showModal();
  document.body.classList.add('modal-open');
}));
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {if(event.target === dialog) {const r = dialog.getBoundingClientRect();if(event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close();}});
dialog.addEventListener('close', () => document.body.classList.remove('modal-open'));
document.querySelector('.copy-button').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {await navigator.clipboard.writeText('abdallah.idlahcen2@gmail.com'); status.textContent = 'Email copied.';}
  catch {status.textContent = 'Please select and copy the email address above.';}
  setTimeout(() => {status.textContent = '';}, 4000);
});
document.querySelector('#year').textContent = new Date().getFullYear();
