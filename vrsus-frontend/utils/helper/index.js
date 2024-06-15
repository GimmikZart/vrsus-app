function enumToSelectOptions(codes, labels, from, to) {
  const options = []
  for (let i = 0; i < codes.length; i++) {
    const code = codes[i]
    const label = labels[i]
    if (from && code < from)
      continue
    if (to && code >= to)
      continue
    options.push({ value: code, title: label })
  }
  return options
}

function enumCodeToLabel(codes, labels, code) {
  for (let i = 0; i < codes.length; i++) {
    if (codes[i] === code)
      return labels[i]
  }

  return ''
}

function enumLabelToCode(codes, labels, label) {
  for (let i = 0; i < labels.length; i++) {
    if (String(labels[i]).toLowerCase() === String(label).toLowerCase())
      return codes[i]
  }

  return ''
}

export { enumToSelectOptions, enumCodeToLabel, enumLabelToCode }
