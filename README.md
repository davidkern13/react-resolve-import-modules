# React resolve import modules

In next couple of minutes, we learn how to remove '../' from import module in ReactApp for better codding.

When we develop a React app we will use the models what we create to make our project more modular and easier to develop.

But I'm sure every developer has a problem because we want to attach a module to the file we're working on, we'll have to use '../../', to access the same module in the project from hierarchy folder. 

But we can go straight to the folder name and improve our code writing!

Let's see how we do it.

First of all I use the **NPM** command to install the React project -> **npm init react-app my-app**

Now when we have the project, I want to access webpack! But I don't see the webpack in my project! 😕

So what are we going to do?
There is a command in a React project -> **run eject**

run this command -> npm run eject.

**Remmember if you dont need it you dont have it!**

after run command you get next message -> Are you sure you want to eject? This action is permanent. [y/N] 

-> press y.

Ejecting...

"Running npm run eject copies all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them." [Source to read](https://github.com/satendra02/react-chrome-extension/wiki/What-happens-when-you-eject-Create-React-App)

⛔️ *IF make the command **npm run eject** you may encounter an error * -> Remove untracked files, stash or commit any changes, and try again or check the next solutions its will help to resolve the problem.

[Check this solution for error](https://stackoverflow.com/questions/48854585/error-with-run-npm-run-eject-error-remove-untracked-files-stash-or-commit-a) <br>
[Check another solution for error](https://github.com/facebook/create-react-app/issues/2797)

When you are done, you will see all the files of **webpack** in your project, under **config** folder.

![config](https://www.imageupload.net/upload-image/2020/02/06/kjkkjkj5.png)

Great you did IT! Webpack available in our project 🔥🔥😊

Now we did the magic 🎉

After we created the Webpack.config file, We need to take the next steps.

-> Open config folder <br>
-> Find webpack.config.js  <br>
-> Find module.exports = {
  //...
  resolve: {
    // configuration options
  }
};
 <br>
 
![config](https://www.imageupload.net/upload-image/2020/02/06/Capturekokohh.png)

Read this source for better understand, [Webpack Resolve Source](https://github.com/facebook/create-react-app/issues/2797)

After we find the file all we have left is write down the name we want to use and the place of the folder.

![config components](https://www.imageupload.net/upload-image/2020/02/08/Captureklolhlkui.png)

We created two additional components into our component folder.

![config](https://www.imageupload.net/upload-image/2020/02/08/Capturennmb.png)

Now we test our component. i am import the ComponentB into ComponentA but without using '../', just we using in component the name what we are declarating in alias.

![config](https://www.imageupload.net/upload-image/2020/02/08/bgnfgnfn.png)

Test in browser..

![config](https://www.imageupload.net/upload-image/2020/02/08/workkoko.png)

Its work, my congratulations 🎉🎉🎉🎉. 

Now your code will be cleaner and more readable and more professional, you are a 🚀 in your imports.

Thank you,
David Kern
