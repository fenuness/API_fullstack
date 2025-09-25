Projeto API  (Express.js)

---
1. Descrição do Projeto
Este projeto é uma **API REST** desenvolvida em **Node.js** utilizando o framework **Express.js**.  
Ela permite gerenciar tarefas escolares, possibilitando **criar, listar, atualizar e excluir tarefas**(CRUD)



2. Pré-requisitos
Antes de executar o projeto, verifique se você possui os seguintes itens instalados na sua máquina:
- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- [npm](https://www.npmjs.com/) (gerenciador de pacotes do Node.js)
- Opcional: [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/) para testar as rotas



 3. Instruções para Instalar Dependências
Dentro da pasta do projeto, rode o seguinte comando no terminal:

bash
npm install express






4.Comando para iniciar o servidor

1.	Adicione o script no package.json
"scripts": {
  "dev": "nodemon index.js",
  "start": "node index.js"
}
	Execute no terminal
2.	npm run dev

coloque no navegador ou no postman
3.	http://localhost:200




5.  Rotas disponíveis da API
Método		Rota	Descrição
GET		/	    Lista todas as tarefas
POST		/	    Cria uma nova tarefa
PUT		/tasks/:id	   Atualiza uma tarefa existente pelo ID
DELETE		/tasks/:id	   Exclui uma tarefa existente pelo ID






6. Exemplo do JSON

   {
  "id": 1,
  "materia": "Matemática"
}


			
7. Como testar no postman

   
1.	Abra o Postman e crie uma nova requisição.
2.	Escolha o método (GET, POST, PUT ou DELETE).
3.	Informe a URL, por exemplo:
o	GET http://localhost:200/
o	POST http://localhost:200/
o	PUT http://localhost:200/tasks/1
o	DELETE http://localhost:200/tasks/1
4.	Para métodos POST e PUT, vá em Body > raw > JSON e insira o JSON da tarefa.
5.	Clique em Send e veja a resposta retornada pela API.



prints do postman

<img width="1366" height="722" alt="image" src="https://github.com/user-attachments/assets/a88342f0-7a7f-40b7-ac8a-564fd19c2801" />

<img width="1366" height="724" alt="image" src="https://github.com/user-attachments/assets/734efed4-cd57-4583-8ebd-39eae6659413" />

<img width="1348" height="727" alt="image" src="https://github.com/user-attachments/assets/f4e75d2c-0cf9-4875-8252-c523ecce4a7e" />

<img width="1271" height="725" alt="image" src="https://github.com/user-attachments/assets/d6570f70-d4c1-4e50-9528-b319014d8a2e" />





