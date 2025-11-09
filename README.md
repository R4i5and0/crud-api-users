# Atividade Prática — Testes Unitários e Análise com SonarQube

**Aluna:** Raissa Anunciação
**Disciplina:** Métricas e Qualidade de Software
**Professor:** Giovanni Cunha de Amorim

---

## 1. Objetivo da Atividade

Implementar testes unitários com Jest para os arquivos `userController.js` e `userService.js`, executar os testes, enviar os resultados ao SonarQube, e analisar os indicadores de qualidade e cobertura de código.

## 1.5. Versionamento do Projeto com Git/GitHub

[Inserir print do GitHub atualizado: **image_d0e956.jpg**]

**Descrição:**
O projeto foi clonado do repositório base e atualizado no GitHub pessoal da aluna. O print exibe a estrutura final do projeto após a conclusão da atividade, com todos os novos arquivos e configurações, como `jest.config.js` e `sonar-project.properties`.

O último commit, "Corrige configuração para SonarQube local e atualização análise", confirma que todas as alterações, incluindo a implementação dos testes com Jest e a configuração para o SonarQube local, foram devidamente versionadas.

**Link do Repositório:** `https://github.com/R4i5and0/crud-api-users`

---

## 2. Configuração do Jest

[Inserir print do `npm install jest`: **image_d00bc1.jpg**]

**Descrição:**
O comando `npm install --save-dev jest` foi executado com sucesso no terminal do Visual Studio Code, dentro do diretório do projeto `crud-api-users`. A instalação concluiu-se sem erros, indicando que o Jest foi adicionado como dependência de desenvolvimento ao projeto. O terminal confirma que 383 pacotes foram auditados e nenhuma vulnerabilidade foi encontrada.

[Inserir print do `package.json`: **image_d00fbe.jpg**]

**Descrição:**
No arquivo `package.json`, foi adicionado o script `"test": "jest --coverage"` dentro da seção `"scripts"`. Esse comando permite executar os testes unitários com o Jest e gerar um relatório de cobertura de código, essencial para análise posterior no SonarQube. A configuração está correta e alinhada com as boas práticas de testes automatizados em projetos Node.js.

---

## 3. Estrutura dos Arquivos de Teste

[Inserir print da estrutura de pastas: **image_d06ce1.png**]

**Descrição:**
O print exibe a estrutura de pastas e arquivos do projeto no VS Code. Conforme a convenção do Jest, os arquivos de teste `userController.test.js` e `userService.test.js` foram criados dentro das suas respectivas pastas (`controllers` e `services`), ao lado dos arquivos que eles testam. Essa organização facilita a manutenção e a localização dos testes, mantendo o código-fonte e o código de teste próximos.

---

## 4. Exemplos de Testes Criados

[Inserir print do `userController.test.js`: **image_d012ea.jpg**]

**Descrição:**
O arquivo `userController.test.js` contém uma série de testes unitários que verificam a existência e o tipo das funções principais expostas pelo controlador de usuários. Os testes validam se as funções `listUsers`, `getUserById`, `createUser`, `updateUser` e `deleteUser` estão definidas como funções, garantindo que o controlador esteja corretamente estruturado. Essa abordagem testa a interface do controlador, garantindo que as funções esperadas estejam disponíveis e acessíveis.

[Inserir print do `userService.test.js`: **image_d01340.jpg**]

**Descrição:**
O arquivo `userService.test.js` contém testes unitários mais robustos que validam a lógica de negócio do serviço de usuários. Os testes cobrem cenários como listagem de usuários, busca por ID (com e sem sucesso) e criação de novo usuário.

Um ponto importante é o uso de **mocks** para simular o modelo de dados (`UserModel`), permitindo que os testes sejam executados de forma isolada, sem depender de um banco de dados real. O uso de `beforeEach()` para resetar os mocks antes de cada teste demonstra boas práticas, evitando efeitos colaterais entre os testes.

---

## 5. Execução dos Testes

[Inserir print do `npm test`: **image_d06959.jpg**]

**Descrição:**
Ao executar o comando `npm test`, o Jest rodou com sucesso os testes unitários. Foram executados **13 testes** em **2 suítes** (conjuntos de testes), todos passando sem falhas.

O relatório de cobertura mostra que:
* 41,73% das declarações (Statements) foram cobertas;
* 41,66% dos ramos (Branches);
* 40,9% das funções (Functions);
* 38,88% das linhas (Lines).

Esses dados refletem um bom progresso inicial, e a execução rápida (0.936s) é ideal para feedback imediato durante o desenvolvimento.

### 5.1. Configuração do Relatório de Cobertura (jest.config.js)

[Inserir print do `jest.config.js`: **image_d06617.jpg**]

**Descrição:**
O arquivo `jest.config.js` define a configuração global do Jest. Ele define que os arquivos analisados para cobertura são os da pasta `src`, que o diretório de saída do relatório é `coverage` e, o mais importante, que os formatos de relatório gerados são `lcov` e `text-summary`. O formato `lcov` é essencial para a integração com ferramentas externas, como o SonarQube.

---

## 6. Análise no SonarQube

[Inserir print do Dashboard do SonarQube: **image_d070a2.png**]

**Descrição:**
Após a execução do `sonar-scanner`, o painel do SonarQube local (`http://localhost:9000`) exibe o resultado da análise do projeto. A análise foi **Aprovada** no "Portão de Qualidade" (Quality Gate), indicando que o código atende aos critérios mínimos de qualidade.

O painel destaca os seguintes indicadores:
* **Cobertura (Coverage): 39,2%** - Mostra que os testes unitários cobrem 39,2% do código, uma melhora drástica em relação aos 0% da análise anterior (que resultava em "Fracassado").
* **Confiabilidade (Reliability): C (3 problemas)**
* **Manutenibilidade (Maintainability): A (3 problemas)**

[Inserir print dos Problemas no SonarQube: **image_d070c2.png**]

**Descrição (Continuação):**
Ao detalhar, identificamos que os 3 "Code Smells" encontrados são o uso de `Number.parseInt()` em vez de `parseInt()`. Embora não sejam bugs críticos (como o que foi corrigido da primeira entrega), a correção melhoraria a nota de qualidade do código.

---

## 7. Análise dos Resultados

**Resumo dos resultados após testes unitários:**

* **Número de testes executados:** **13** (Coletado do print do `npm test`)
* **Cobertura de código:** **39,2%** (Coletado do painel do SonarQube)
* **Problemas críticos corrigidos:** **1** (O Bug crítico da análise anterior foi corrigido)

**Explicação:**
Nesta atividade, os testes unitários foram implementados para as funções principais do `userController` e `userService`. Os **13 testes** criados validam cenários-chave, como a listagem de usuários, a busca por ID e a definição das funções do controller.

Os resultados no SonarQube mostram uma melhora drástica na qualidade: a cobertura de código, que era 0.0% na análise inicial, subiu para **39,2%**. Além disso, o Bug crítico que existia foi corrigido, e a análise agora passa no "Portão de Qualidade" (Quality Gate).

---

## 8. Conclusão

Nesta atividade, foi possível compreender o uso do Jest para criar **13 testes unitários**, validando o comportamento das funções do projeto, e também configurar um servidor SonarQube local para análise de qualidade.

Ao verificar via SonarQube, vimos os impactos positivos da cobertura de testes: o "Quality Gate" que antes falhava ("Fracassado") agora foi **Aprovado**. O projeto saiu de 0% para **39,2% de cobertura** e o bug crítico foi eliminado, o que aumenta muito a confiabilidade e a qualidade do código.
