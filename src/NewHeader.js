import { Link, useLocation } from "react-router-dom";
import React from 'react';
import { Button, Flex } from 'antd';

export default function NewHeader() {
  const location = useLocation();

  return (
   
      
        <div >
          {location.pathname === "/" && (
            <div className="col-md-12 t">
              <Link to="/NewHeader">
              <Flex gap="small" wrap>
              <Button type="primary">Sign in </Button>
              </Flex>

              </Link>
            </div>
          )}
        </div>
     
  
  );
}

