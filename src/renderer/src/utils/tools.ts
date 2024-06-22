import { Debugger } from 'ts-debug'

const IS_DEVELOPEMENT: boolean = process.env.NODE_ENV === 'development'

export const Logger: Debugger = new Debugger(console, IS_DEVELOPEMENT, '[DEBUG] ')
