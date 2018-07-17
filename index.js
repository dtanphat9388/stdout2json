let {spawnSync} = require('child_process')


/**
 * @param {String} stdout 
 */
function stdout2json(stdout){
    let trimedStdout = stdout.trim()
    // line[]
    let lines = trimedStdout.split('\n')
    // line[item[]]
    let itemsOfLines = lines.map(line => line.split(/\s{2,}/))
    let titles = itemsOfLines.shift()

    return itemsOfLines.map(line => {
        let obj = {}
        titles.forEach((title, i) => {
            obj[title] = line[i]
        })
        return obj
    })   
}

class shell {
    static exec(command) {
        let [executable, ...params] = command.split(' ', 10000)
        let output = spawnSync(executable, params, {encoding: 'utf8'})
        return stdout2json(output.stdout)
    }
}

module.exports = shell