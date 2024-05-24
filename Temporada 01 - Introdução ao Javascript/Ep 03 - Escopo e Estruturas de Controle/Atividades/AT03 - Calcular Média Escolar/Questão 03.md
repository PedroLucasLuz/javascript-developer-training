# Análise de Desempenho Escolar 📚📊

faça um programa que analisa o desempenho escolar de um aluno com base em suas notas nas duas primeiras avaliações (N1 e N2). O programa solicitará o nome, idade e notas do aluno, calculará sua média e determinará seu conceito de acordo com a média obtida. Além disso, o programa informará o status do aluno (APROVADO ou REPROVADO) e, caso o aluno tenha média máxima e conceito A, exibirá uma mensagem especial de "Aprovado com Distinção".

## Requisitos
1. O programa deve solicitar ao usuário o nome, idade e notas do aluno.
2. As notas devem ser validadas para garantir que sejam números válidos.
3. O programa deve calcular a média das notas (N1 e N2).
4. O programa deve determinar o conceito do aluno de acordo com a média:

    - A : de 9.0 a 10.0
    - B : de 7.5 a menos de 9.0
    - C : de 6.0 a menos de 7.5
    - D : de 4.0 a menos de 6.0
    - E : abaixo de 4.0

5. O programa deve determinar o status do aluno como APROVADO se o conceito for A, B ou C, caso contrário, será REPROVADO.
6. Caso o aluno tenha média máxima e conceito A, exibir a mensagem especial "Aprovado com Distinção".
7. Exibir os dados do aluno, incluindo nome, idade, notas, média, conceito e status.
## Exemplo de Entrada e Saída

Informe o nome do aluno: João

Informe a idade do aluno: 18

Informe a nota da N1: 8.5

Informe a nota da N2: 7.0


    -- Dados do Aluno --
    Nome: João
    Idade: 18
    Nota da N1: 8.5
    Nota da N2: 7.0
    Média: 7.75
    Conceito: B
    Status: APROVADO
