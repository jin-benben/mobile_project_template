import { Suspense, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import {AutoCenter, Button, CenterPopup, Space, SpinLoading} from 'antd-mobile'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import { Link, Outlet } from 'react-router-dom'
import request from '../utils/request'

function getGoods(){
  return request('/api/goods_search/goods_list',{
    params:{
      page: 1,
      size: 150,
      cate_id: 1816,
      SystemName: 'pc',
      storeid: 1,
    }
  })
}


export default function App() {
  const [count, setCount] = useState(0)
  useQuery({queryKey:['queryGoods'],queryFn:getGoods})
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Button color="primary" onClick={() => getGoods()}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        
        <Space>
        <Link to="/a"><Button color="primary">a</Button></Link>
        <Link to="/b"><Button color="primary">b</Button></Link>
        </Space>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Suspense fallback={<AutoCenter><SpinLoading /></AutoCenter>}>
        <Outlet />
      </Suspense>
    </div>
  )
}

