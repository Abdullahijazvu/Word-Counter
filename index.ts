#!usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const sleep = () => {
    return new Promise ((res, rej) => {
        setTimeout(res, 1000)
            
    })
}

async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow(`.....lets start Program.......`)
    await sleep()
    rainbowTitle.stop()
}

//welcome()

async function askQuestion() {
    await welcome()
    let que = await inquirer.prompt([
        {
            type: "input",
            name: "str",
            message: chalk.rgb(187,189,205)(`Please enter the paragraph you want to convert: `)
        }
    ])
    const word_arr = que.str.split(" ")
    // console.log(word_arr);
    console.log(`Words in Paragraph: ${word_arr.length}`);
    
    const chr_withoutspaces = que.str.replace(/ /g, "")
    // console.log(chr_withoutspaces);
    console.log(`Characters in paragraph: ${chr_withoutspaces.length}`);
    
}

//askQuestion()

async function startAgain() {
    do{
        await askQuestion()
        var playAgain = await inquirer .prompt({
            type: "input",
            name: "restart",
            message: chalk.rgb(187,189,205)(`Do you want to restart the program: `)
        })

    }while(playAgain.restart === 'y' || playAgain.restart === 'yes' || playAgain.restart === 'Yes' || playAgain.restart === 'YES')
}

startAgain()