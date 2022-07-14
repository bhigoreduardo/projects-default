<h1 align="center">
📄<br>Padrões de projetos
</h1>

Documentação de como aprendi e relacionei os métodos de criação de projetos front-end e back-end.

Abaixo alguns comandos básicos e essenciais de Git.

## 🦄 Tipos e Descrição

- Ativar usuário:
<table>
<thead>
<tr>
    <th>Comando</th>
    <th>Resultado/Explicação</th>
</tr>
</thead>

<tbody>
<tr>
    <td><code>ssh-keygen -t rsa -b 4096 -C "EMAIL"</code></td>
    <td>Vínculo da conta</td>
</tr>
<tr>
    <td><code>eval $(ssh-agent -s)</code></td>
    <td>Vínculo da conta</td>
</tr>
<tr>
    <td><code>ssh-add ~/.ssh/id_rsa</code></td>
    <td>Vínculo da conta</td>
</tr>
<tr>
    <td><code>clip < ~/.ssh/id_rsa.pub</code></td>
    <td>Vínculo da conta</td>
</tr>
</tbody>
</table>

- Criação de repositório:
  `mkdir FOLDERNAME`
  `git init`
  `touch index.html`
  `git add .`
  `git config --global user.email "EMAIL"`
  `git config --golbal user.name "USER"`
  `git commit -m "first-commit"`
  `git remote add origin https://github.com/user/folder-name`
  `git push --set-upstream origin master`
  `git push`
  `code .`

- Criação de branch:
  `git add .`
  `git commit -m "add README.md"`
  `git push`
  `git push -u origin origin dev (git push --set-upstream origin dev)`

- Instalação pacote node:
  `npm init -y`

- Clone:
  `git clone github.com/repositorio.git`
  `git branch`
  `git checkout -b BRANCHNAME`
  `git pull origin BRANCHNAME`

`git add .`
`git commit -m 'BRANCHNAME'`
`git push origin BRANCHNAME`

- Remover packags:
  `npm uninstall PACKAGENAME`
