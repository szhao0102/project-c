import React from 'react'
import ConfigHead from '../components/confighead'
import ConfigBody from '../components/configbody'
const ConfigContext = React.createContext()

export default function Config(props) {
  const { meta_data, json_data, feature } = props
  return (
    <ConfigContext.Provider value = {json_data, meta_data}>
      <ConfigHead meta_data = {meta_data} feature = {feature} />
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
      feature   : query.feature,
      server_id : query.sid, 
      meta_data : query_data.meta_data,
      json_data : query_data.json_data
    }
  }
} 