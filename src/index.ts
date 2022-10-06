/**
 * This is the main code that runs
 * with the MrCoxallStack.
 * By:      Daria Bernice Calitis
 * Version: 1.0
 * Since:   2022-10-03
 */

import MrCoxallStack from './MrCoxallStack'
import promptSync from 'prompt-sync'

// use MrCoxallStack and promptSync classes
const prompt = promptSync()
const myStack = new MrCoxallStack()

// Input & Process
const userNum1 = Number(prompt('Enter a number: '))
myStack.pushItem(userNum1)

const userNum2 = Number(prompt('Enter a second number: '))
myStack.pushItem(userNum2)

const userNum3 = Number(prompt('Enter a third number: '))
myStack.pushItem(userNum3)

// Output
console.log(myStack.getStack())

console.log(`\nPopped number: ${String(myStack.popItem())}`)

console.log(myStack.getStack())

console.log('\nDone.')
