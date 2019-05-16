// const glob = require('glob')
// const {resolve} = require('path')
// const apis = glob.sync(resolve(__dirname,'./api','**/*.js')).forEach(import)

import apiCertificateType from './api/certificateType'
import apiEnvironmentDetect from './api/environmentDetect'
import apiReason from './api/reason'
import apiUser from './api/user'

export { apiCertificateType, apiEnvironmentDetect, apiReason, apiUser }
