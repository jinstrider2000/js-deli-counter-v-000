function takeANumber(deliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function currentLine(deliLine) {

}

function nowServing(deliLine) {
  var name = deliLine.shift()
  return `Currently serving ${name}.`
}
