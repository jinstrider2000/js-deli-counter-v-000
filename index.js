function takeANumber(deliLine, name) {
  deliLine.push(name)
  return `Welcome, ${name}. You are number ${deliLine.length} in line.`
}

function currentLine(deliLine) {

}

function nowServing(deliLine) {
  var name = deliLine.shift()
  return `Currently serving ${name}.`
}
