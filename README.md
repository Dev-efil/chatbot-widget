<h1 align="center">Chat Widget</h1>
<div align="center">
    
![HTML](https://img.shields.io/badge/HTML-e54b20?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-%231572B6?style=flat&logo=css3&logoColor=white&color=1572B6)
![JavaScript](https://img.shields.io/badge/JavaScript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E&)
![Socket.io](https://img.shields.io/badge/-Socket.io-010101?style=flat&logo=socket.io)
![React.js](https://img.shields.io/badge/React.js-%23169fca?style=flat&logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-5fa04f?style=flat&logo=node.js&logoColor=white&labelColor=#323330)
![Express.js](https://img.shields.io/badge/Express.js-%23404d59.svg?style=flate&logo=express&logoColor=%2361DAFB)
    
</div>
## Description
Real-time chatbot widget with script-based deployment for multiple sites, built using React.js, Node.js, and Socket.io.

### How to setup the chat widget in your client/your site

#### First Step
Add this to the end of the `<head>` tag.
`chatAccountKey` is unique for every client, and it is used to track which client's user is chatting.
```js
<script type="text/javascript"> 
    var chatAccountKey = 'xxxxxxxxxxxx';
    (function() {
        var x = document.createElement('script');
        x.type = 'text/javascript',
        x.async = !0,
        x.src = 'https://chat.example.com/chat-source/source.js',
        x.charset = 'UTF-8',
        x.setAttribute('crossorigin', '*');
        var e = document.getElementsByTagName('script')[0];
        e.parentNode.insertBefore(x, e);
    })();
</script>
```
#### Second Step
Add this below the opening of the `<body>` tag.
```HTML
<body>
    <div id="chatbot"></div>
</body>
```
&nbsp;
### How to setup the project
In order to run this project, you will need to make sure that the following steps are configured:
> [!IMPORTANT]
> `https://chat.example.com/chat-source/source.js` : Dynamically loading `JavaScript` and `CSS` resources and initializing a React application, this sets up the environment and dependencies for a chatbot application.
>
> In `source.js` - `https://chat.example.com/chat/static/js/main.xxxxxxxx.js` & `https://chat.example.com/chat/static/css/main.xxxxxxxx.css` : You will obtain the `JavaScript` and `CSS` files after building your React application using the `npm run build` command. Update it with exact file names(`main.xxxxxxxx.js` & `main.xxxxxxxx.css`). 

#### Step 01
Clone the project, navigate to the project folder, and run the following command to install dependencies in both the client and server directories. `PATH /client` & `PATH /server`
```console
npm install
```

#### Step 02
In your `source.js` file, add below the code block to load the necessary `JavaScript` and `CSS` resources from your hosted React application. Make sure to use the correct file names and URLs (`main.xxxxxxxx.js` & `main.xxxxxxxx.css`).
```js
(function (global) {
  var linkJS = [
    'https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js',
    'https://chat.example.com/chat/static/js/main.xxxxxxxx.js'
  ];
  var x1 = document.getElementsByTagName('script')[0];
  for (var i = 0; i < linkJS.length; i++) {
    var x2 = document.createElement('script');
    x2.src = linkJS[i];
    x2.charset = 'UTF-8';
    x2.setAttribute('crossorigin', '*');
    x1.parentNode.insertBefore(x2, x1);
  }
  var linkCSS = document.createElement('link');
  linkCSS.rel = 'stylesheet';
  linkCSS.href = 'https://chat.example.com/chat/static/css/main.xxxxxxxx.css';
  document.head.appendChild(linkCSS);
  ReactDOM.render(
    React.createElement(App),
    document.getElementById('chatbot')
  );
})(window);
```

#### Step 03
In the `PATH /client/src/api/base.js` file, set the `base URL` of your hosted `Node.js` server.
```js
// server url
export const chatSocket = io.connect('https://chatbot.host.com');
```

#### Step 04
This chat widget was developed to get message responses from an `API`. You can send the client's response to the API and get the reply from the API. This allows you to manually set up your customized response structure or you can add an `AI-based API` like `ChatGPT` to handle the response & reply. Update the API base URL in `PATH /server/config/routeConfig.js`.
```js
const BASE_URL = 'https://api.example.com';
```

#### Step 05
In the PATH /client/src/index.css file, after running the npm run build command, add the generated font file name to your index.css for @font-face, and link it accordingly as shown below. Afterward, re-run the build command and use that build for deployment.
```css
 @font-face {
    font-family: "chatbot";
    src: url("https://chat.example.com/chat/static/media/Exo2-Bold.xxxxxxxx.ttf") format("truetype");
  }
```
