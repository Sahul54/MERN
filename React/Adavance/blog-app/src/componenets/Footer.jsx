import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Footer = () => {
  const {page, handlePageChange, totalPage} = useContext(AppContext);
  return (
    <div>
      {
        page > 1 &&
          (<button onClick={ ()=> handlePageChange(page-1)}> Privious </button>

          )
      }

      {
        page < totalPage && 
          (<button onClick={ ()=> handlePageChange(page+1)}> Next </button>)
      }

      <p>
        Page {page} of {totalPage}
      </p>
    </div>
  )
}

export default Footer