<h1 align="center">
📄<br>Padrões de projetos
</h1>

Documentação de como aprendi e relacionei os métodos de criação de projetos front-end e back-end.

Abaixo alguns comandos básicos e essenciais de Git.

## 🦄 Tipos e Descrição

- :smile: Ativar usuário:
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
    <td>Vincular conta</td>
</tr>
<tr>
    <td><code>eval $(ssh-agent -s)</code></td>
    <td>Vincular conta</td>
</tr>
<tr>
    <td><code>ssh-add ~/.ssh/id_rsa</code></td>
    <td>Vincular conta</td>
</tr>
<tr>
    <td><code>clip < ~/.ssh/id_rsa.pub</code></td>
    <td>Vincular conta</td>
</tr>
<tr>
    <td><code>git config --global user.email "EMAIL"</code></td>
    <td>Vincular conta</td>
</tr>
<tr>
    <td><code>git config --golbal user.name "USER"</code></td>
    <td>Vincular conta</td>
</tr>
</tbody>
</table>

- :star_struck: Criação de repositório:
<table>
<thead>
<tr>
    <th>Comando</th>
    <th>Resultado/Explicação</th>
</tr>
</thead>

<tbody>
<tr>
    <td><code>mkdir FOLDERNAME</code></td>
    <td>Criar pasta/diretório</td>
</tr>
<tr>
    <td><code>git init</code></td>
    <td>Criar repositório</td>
</tr>
<tr>
    <td><code>touch index.html</code></td>
    <td>Criar arquivo</td>
</tr>
<tr>
    <td><code>git add .</code></td>
    <td>Preparar arquivo</td>
</tr>
<tr>
    <td><code>git commit -m "first-commit"</code></td>
    <td>Commit Git</td>
</tr>
<tr>
    <td><code>git remote add origin https://github.com/user/folder-name</code></td>
    <td>Criar entrada no repositório</td>
</tr>
<tr>
    <td><code>git push --set-upstream origin master</code></td>
    <td>Branch do repositório</td>
</tr>
<tr>
    <td><code>git push</code></td>
    <td>Enviar ao repositório remoto</td>
</tr>
<tr>
    <td><code>git clone URLPATH</code></td>
    <td>Clonar repositório</td>
</tr>
<tr>
    <td><code>code .</code></td>
    <td>Abrir editor</td>
</tr>
</tbody>
</table>

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
