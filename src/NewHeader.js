import { Outlet,Link } from "react-router-dom"

export default function NewHeader () {



    return(


        <header class="blog-header py-3">
      
        <div class="row flex-nowrap justify-content-between align-items-center">
    
            <div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div class="col-md-3 mb-2 mb-md-0">
        <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
          <svg class="bi" width="40" height="32" role="img" aria-label="Bootstrap"><use ></use></svg>
        </a>
      </div>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" class="nav-link px-2 link-secondary">Home</a></li>
        <li><a href="#" class="nav-link px-2">Features</a></li>
        <li><a href="#" class="nav-link px-2">Pricing</a></li>
        <li><a href="#" class="nav-link px-2">FAQs</a></li>
        <li><a href="#" class="nav-link px-2">About</a></li>
      </ul>

      <div class="col-md-3 text-end">
      <Link to= "/Login">
        <button type="button" class="btn btn-outline-primary me-2">Login</button>
        </Link>
        <Link to="/NewHeader" >
        <button type="button" class="btn btn-primary">Sign-up</button>
        </Link>
      </div>
    </header>
  </div>
            {/* <Link to="/NewHeader" >
            <a class="btn btn-sm btn-outline-danger" href="#" style={{marginRight:"30px" ,height:"35px" ,width:"100px"}}>Sign up</a>
            </Link>
            <Link to= "/Login">
            <a class="btn btn-sm btn-outline-danger" href="#" style={{marginLeft:"10px",height:"35px" ,width:"100px"}}>Login</a>
            </Link> */}


         
          <div class="col-4 text-center">
            <a class="blog-header-logo text-dark" href="#"></a>
            </div>
            

        </div>
      </header>
    )
}