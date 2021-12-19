import { AutoComplete } from 'antd'
const { Option } = AutoComplete

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}
function handleChange(value) {
  console.log(`selected ${value}`);
}
export default function SY_select(props) {
  return (
    <AutoComplete onSelect = {handleChange} style={{ width: '100%' }}>
    {children}
    </AutoComplete>
  )
}