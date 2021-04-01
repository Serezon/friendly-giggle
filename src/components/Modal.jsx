import ReactDOM from 'react-dom'

const MyModal = ({ children }) =>
  ReactDOM.createPortal(
    <div>{children}</div>,
    document.getElementById('modals'),
  )

export default MyModal
