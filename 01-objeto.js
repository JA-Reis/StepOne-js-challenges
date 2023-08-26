// 1- Crie um objeto chamado user com as seguintes propriedades:

// - username
// - email
// - age

// E com os seguintes métodos (ações):

// - login: com o console.log("Efetuou o login");
// - logout: com o console.log("Efetuou o logout");

// 2- Mostre uma propriedade! Agora dê um console.log apenas da propriedade age

// 3-  Adicione uma nova propriedade! Adicione uma nova propriedade chamada phone e depois dê um console.log(user); para ver se a propriedade realmente foi adicionada.

// 4- Faça um update de um valor! Troque o valor do username para outro valor e depois dê um console.log(user); para ver se a propriedade realmente foi substituída.

// 5- Remova um valor! Remova o valor age e depois dê um *console.log(user);* para ver se a propriedade realmente foi deletada.
const user = {
  Username: 'José Augusto',
  Email: 'joseagusto.reis@gmail.com',
  Age: 44,

  login: function () {
    console.log('Efetuou o login');
  },

  logout: function () {
    console.log('Efetuou o logout');
  },
};

console.log(user.Age);

user.phone = '16 99718-1088';

console.log(user);

Username = 'Kelin';

console.log(Username);

delete user.Age;

console.log(user);

console.log(Username);
