# projects-default

Vinculando conta com usuário:
`ssh-keygen -t rsa -b 4096 -C "EMAIL"`
`eval $(ssh-agent -s)`
`ssh-add ~/.ssh/id_rsa`
`clip < ~/.ssh/id_rsa.pub`

Criação de repositório:
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

Criação de branch:
`git add .`
`git commit -m "add README.md"`
`git push`
`git push -u origin origin dev (git push --set-upstream origin dev)`

Instalação pacote node:
`npm init -y`

Clone:
`git clone github.com/repositorio.git`
