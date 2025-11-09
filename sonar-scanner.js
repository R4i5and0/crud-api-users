const scanner = require('sonarqube-scanner');

scanner.init(
  {
    serverUrl: 'https://sonarcloud.io',
    token: '79888366b063f897d33b1e7bb611e2116ccfa94b',
    options: {
      'sonar.projectKey': 'R4i5and0_crud-api-users',
      'sonar.organization': 'r4i5and0',
      'sonar.sources': 'src',
      'sonar.tests': 'src',
      'sonar.test.inclusions': '**/*.test.js',
      'sonar.exclusions': '**/*.test.js,**/node_modules/**',
      'sonar.javascript.lcov.reportPaths': 'coverage/lcov.info'
    }
  },
  (error) => {
    if (error) {
      console.error('Erro ao enviar para o SonarCloud:', error);
      process.exit(1);
    } else {
      console.log('Análise enviada com sucesso ao SonarCloud!');
      process.exit(0);
    }
  }
);