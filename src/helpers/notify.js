import { toast } from 'react-toastify'
// minified version is also included
// import 'react-toastify/dist/ReactToastify.min.css';

export const success = message => toast.success(message)

export const warning = message => toast.warn(message)

export const error = message => toast.error(message)

export const info = message => toast.info(message)
