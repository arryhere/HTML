const file = document.getElementById('file');
const submit = document.getElementById('submit');

submit.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(file);
  console.log(file.value);
  console.log(file.files);
  console.log(file.files[0]);
  console.log(Array.from(file.files));
});
