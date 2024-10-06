import createReport from 'docx-templates'
import fs from 'fs'

const template = fs.readFileSync('./uploads/Doc.doc')

const buffer = async (data: { [key: string]: unknown }) =>
  await createReport({
    template,
    data,
  })

export default buffer
