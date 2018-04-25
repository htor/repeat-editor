import * as fixes from './fixes'
import { graphics } from './graphics'
import { random, compose } from './tools'
import * as editor from './editor'
import scratch from 'scratch'

scratch.register(graphics)
window.onclick = editor.focus
window.onresize = graphics.resize
window.onload = compose(graphics.resize, editor.init, editor.focus)
window.onpopstate = editor.init
window.requestAnimationFrame(function loop() {
    if (frameReset)
        graphics.clearRect(0, 0, w, h) 
    editor.evaluate()
    setTimeout(requestAnimationFrame, 1000 / frameRate, loop)
})
const message = 'https://github.com/htor/scratch-editor' + '\n' + 
                'https://github.com/htor/scratch'
console.log(message)
