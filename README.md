# 🛡️ Classificador de Nível do Herói - TypeScript

Projeto desenvolvido como parte de desafio na DIO para classificar o nível de um herói com base na experiência (XP).

## 💻 Tecnologias

- TypeScript
- Node.js
- readline-sync (entrada via terminal)

## 🚀 Como executar

1️⃣ Clone o repositório:
```bash
git clone https://github.com/Paczitos/DIO-classificador-heroi-ts
cd classificador-heroi-ts
```

2️⃣ Instale as dependências:
```bash
npm install
```

3️⃣ Instale as tipagens do `readline-sync` para o TypeScript:
```bash
npm install --save-dev @types/readline-sync
```

4️⃣ Rode o projeto em modo desenvolvimento:
```bash
npx ts-node hero.ts
```

✅ **Ou compile e rode com Node.js**
```bash
npm run build
npm start
```

## 📌 Regras de classificação

| XP                 | Nível      |
|--------------------|------------|
| < 1000             | Ferro      |
| 1001 - 2000        | Bronze     |
| 2001 - 5000        | Prata      |
| 5001 - 7000        | Ouro       |
| 7001 - 8000        | Platina    |
| 8001 - 9000        | Ascendente |
| 9001 - 10000       | Imortal    |
| >= 10001           | Radiante   |

## ✨ Exemplo de uso

```
Digite o nome do herói: Artemis
Digite a quantidade de XP do herói: 8500
O Herói de nome Artemis está no nível de Ascendente
```