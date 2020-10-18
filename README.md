# Testcafe Bootcamp

<p align="center">
    <a href="https://devexpress.github.io/testcafe">
        <img src="https://raw.githubusercontent.com/DevExpress/testcafe/master/media/testcafe-logo.svg?sanitize=true" alt="testcafe" />
    </a>
</p>

<p align="center">
    <a href="https://devexpress.github.io/testcafe">
        <img src="https://qaminds.com/wp-content/uploads/2017/10/Logo_QAmindsLAB2-360x235.png" alt="qaminds">
    </a>
</p>

<p align="center">
<i>A Node.js tool to automate end-to-end web testing.<br/>Write tests in JS or TypeScript, run them and view results.</i>
</p>

<p align="center">
<i>This is a testcafe project for QA Minds Bootcamp where we are going to be able to learn about how testcafe works and how we can create a simple way to automate any Javascript application.</i>
</p>


## How to clone the project

  - Go to [Github](https://github.com/LuisYairAquino)
  - Go to 'Repositories'
  - Search: "Testcafe_Bootcamp"
  - Click on "Code"
  - Clone the project as [HTTPS](https://github.com/LuisYairAquino/TestCafe_Bootcamp.git)
  - Open your terminal
  - Create a folder
  - Type: `git clone repo_link_name` to copy the entire project.

# Steps to install it

* **Install Node.js**: You have to install [Node.js](https://nodejs.org/es/download/), please ensure Node.js and [npm](https://www.npmjs.com/) are installed on the computer.
* **How to set up?**: You do not need WebDriver or any other testing software. Install TestCafe with one command, and you are ready to test: `npm install -g testcafe`
* **How to verify the version?**: To verify the node.js version you have to type: `node -v` and to verify testcafe version: `testcafe -v


# Testcafe Documentation

You can find here all the documentation [Testcafe Doc](https://devexpress.github.io/testcafe/) 

### Create your first test

As an example, we are going to test the [https://devexpress.github.io/testcafe/example](https://devexpress.github.io/testcafe/example) page.

Create a `.js` or `.ts` file on your computer.
Note that it needs to have a specific structure: tests must be organized into fixtures.
You can paste the following code to see the test in action:

```js
import { Selector } from 'testcafe'; // first import testcafe selectors
 
fixture `Getting Started`// declare the fixture
    .page `https://devexpress.github.io/testcafe/example`;  // specify the start page
 
 
//then create a test and place your code there
test('My first test', async t => {
    await t
        .typeText('#developer-name', 'Luis Aquino')
        .click('#submit-button')
 
        // Use the assertion to check if the actual header text is equal to the expected one
        .expect(Selector('#article-header').innerText).eql('Thank you, Luis Aquino!)
});
```

### How to run the test

Call the following command in a command shell.

```sh
testcafe chrome test1.js
```

## Thanks to QA Minds and Testcafe

I'm greateful with QA Minds for this bootcamp and with Testcafe for all the information and documentation.
