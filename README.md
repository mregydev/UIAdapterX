# Target 
- Have frontend library that support multiple ui libraries ( like <b> Material UI </b> and <b>React bootstrap</b>) at build time through use of enviroments variables 
- This project expose simple button componenet that can be created either with react or material ui

# How to run 
- In <b>frontend-lib </b> to build material ui version run <code>npm run buildMaterialUI</code> and to build react bootstrap version run <code> npm run buildBootstrap</code>
- In mainapp run <code>npm run start</code>

# How frontend-lib work 
- Based on passed enviroment variable <b> UIType </b> , webpack determines which library to include 
- To ensure all componenets in the different ui libraries use unified props we are including adapters for each ui library and so in this case if we changed ui library , it will not affect running project using our componenets cause they use same props and in this case our change will be backward compatible for sure 
![Support Multiple UI](https://github.com/mregydev/MultipleUIExample/assets/28675823/db41b42f-9a5b-4865-a3b5-4b5dd01b9593)