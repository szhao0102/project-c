import React from 'react'
import ConfigHead from '../components/confighead'
import ConfigBody from '../components/configbody'
const ConfigContext = React.createContext()

export default function Config(props) {
  const { meta_data, json_data } = props
  return (
    <ConfigContext.Provider value = {json_data, meta_data}>
      <ConfigHead meta = {meta_data} />
      <ConfigBody />
    </ConfigContext.Provider>
    
  )
}

export async function getServerSideProps(context){
  let query = context.query
  let res = await fetch('http://127.0.0.1:3000/api/config/query_config')
  let query_data = await res.json()
  return {
    props: {
      meta_data : query_data.meta_data,
      json_data   : query_data.json_data
    }
  }
} 