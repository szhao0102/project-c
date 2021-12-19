
export default function ConfigHead(props) {
  const { meta_data, feature }  = props
  let fields = meta_data[feature]['fields'] 
  let meta_keys = Object.keys(fields)
  let s = meta_keys.map( key =>  <span key = {key} >{fields[key]['name']}</span>)
  return (<div>
    {s}
  </div>)
}