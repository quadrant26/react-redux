This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


# 无状态组件的改写
    
    首先我们不在需要引入React中的{ Component }，删除就好。  
    然后些一个TodoListUI函数,里边只返回JSX的部分就好，这步可以复制。
    函数传递一个props参数，之后修改里边的所有props，去掉this。

# 配置Redux-thunk组件

    需要在创建store的地方引入redux-thunk，对于我们的目录来说，就是/store/index.js文件。

    1.引入applyMiddleware,如果你要使用中间件，就必须在redux中引入applyMiddleware.

        import { createStore , applyMiddleware } from 'redux' 

    2.引入redux-thunk库

        import thunk from 'redux-thunk'

        如果你按照官方文档来写，你直接把thunk放到createStore里的第二个参数就可以了，但以前我们配置了Redux Dev Tools，已经占用了第二个参数。

    官方文档给的方法:

        const store = createStore(
            reducer,
            applyMiddleware(thunk)
        ) // 创建数据存储仓库
    
    这样写是完全没有问题的，但是我们的Redux Dev Tools插件就不能使用了，如果想两个同时使用，需要使用增强函数。使用增加函数前需要先引入compose。

        import { createStore , applyMiddleware ,compose } from 'redux' 
        
        然后利用compose创造一个增强函数，就相当于建立了一个链式函数，代码如下:

            const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
                window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
        
        有了增强函数后，就可以把thunk加入进来了，这样两个函数就都会执行了。

            const enhancer = composeEnhancers(applyMiddleware(thunk))

        这时候直接在createStore函数中的第二个参数，使用这个enhancer变量就可以了，相当于两个函数都执行了。

            const store = createStore( reducer, enhancer) // 创建数据存储仓库

    这样就算把Redux的中间件配置好了

        import { createStore , applyMiddleware ,compose } from 'redux'  //  引入createStore方法
        import reducer from './reducer'    
        import thunk from 'redux-thunk'

        const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

        const enhancer = composeEnhancers(applyMiddleware(thunk))

        const store = createStore( reducer, enhancer) // 创建数据存储仓库
        export default store   //暴露出去

# 配置Redux-saga组件

    import createSagaMiddleware  from 'redux-saga'
    import mySagas from './sagas.js'
    
    const sagaMiddleware = createSagaMiddleware()
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
    const enhancers = composeEnhancers(applyMiddleware(sagaMiddleware))
    const store = createStore(
        reducer, 
        enhancers
    )
    sagaMiddleware.run(mySagas)