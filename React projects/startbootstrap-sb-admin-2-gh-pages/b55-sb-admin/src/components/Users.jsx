import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Table from './Table'

function Users() {
  return (
     <div> 
     <Link to="/users-create" className="btn btn-primary"> Create User</Link>
     <Table/>
     </div>
  )
}

export default Users