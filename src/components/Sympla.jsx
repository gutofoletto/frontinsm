import React from 'react'

class Sympla extends React.Component {
  render = () => {
    const { id } = this.props
    return (
      <iframe
        className='sympla'
        id='symplaw'
        src={`https://www.sympla.com.br/tickets-grid-widget?eid=${id}&lang=pt`}
        title='symplaw'
        frameBorder='0'
        vspace='0'
        hspace='0'
        marginHeight='0'
        marginWidth='0'
        width='100%'
        height='450px'
      />
    )
  }
}

export default Sympla
