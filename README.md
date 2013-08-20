App aAura
=========

Este é um app de teste que utiliza a API [randomuser.me](http://randomuser.me/)

## Requisitos para Desenvolvimento

 - Node.js
 - Ruby

## Instalação para Desenvolvimento

Instalando os requisitos:

**Compass**

	gem update --system --no-ri --no-rdoc
	gem install compass --no-ri --no-rdoc
	
**Grunt**

	npm install -g grunt-cli
	
**Bower**

	npm install -g bower
	
**ReuireJS**

	npm install -g requirejs

## Instalando módulos e componentes

Na raiz do projeto digite:

	npm install -d
	bower install
	
Execute o `grunt` para executar as tarefas e gerar os arquivos necesários:

	grunt
	
Para otimizar o código utilize `r.js`:

	r.js -o js/builds/semente-build.js

## Deploy

Abra o arquivo `bin/deploy` e faça os ajustes necessários e depois execute:

	bin/deploy
