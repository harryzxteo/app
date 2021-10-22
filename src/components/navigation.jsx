export const Navigation = (props) => {
  console.log(props)

  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
          </a>{' '}<div class="vertical-line"></div>
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>

          {props.data
            ? props.data.map((d, i) => (
              <li>
                <a href={`#${d.link}`} className='page-scroll'>
                  {`${d.name}`}
                </a>
              </li>
              ))
            : 'Loading...'}
          </ul>
        </div>
      </div>
    </nav>
  )
}
