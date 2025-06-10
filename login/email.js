
async function fazerLogin() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const msg = document.getElementById("msg");

  const resposta = await fetch('usuarios.json');
  const usuarios = await resposta.json();

  const valido = usuarios.find(u => u.email === email && u.senha === senha);

  if (valido) {
    msg.textContent = "Login feito com sucesso.";
  } else {
    msg.textContent = "E-mail ou senha incorretos.";
  }
}