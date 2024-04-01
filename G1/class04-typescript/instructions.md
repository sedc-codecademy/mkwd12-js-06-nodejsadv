How to init the project:

1. Run `npm init -y` in your terminal in the project directory to create a package.json file.
2. Run `npm install typescript ts-node @types/node --save-dev` to install TypeScript, ts-node (for running TypeScript files directly with Node.js), and the Node.js types.
3. Run `npx tsc --init` to generate a `tsconfig.json` file. You might want to adjust some settings, but the defaults are a good start.
4. Add the following to scripts:
   ```json
   {
   	"scripts": {
   		"start": "ts-node index.ts",
   		"build": "tsc"
   	}
   }
   ```
5. Create Your `index.ts` file.
6. Use `npm start` to compile and run your TypeScript application directly.
7. To compile the TypeScript into JavaScript, run `npm run build`. This will create a `dist` folder with the compiled JavaScript, based on your tsconfig.json settings.
