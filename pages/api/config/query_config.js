
const json_data = [
  {
    "id": 1,
    "number_data": 100,
    "string_data": "hello world",
    "boolean_data": true
  }
]

// const json_data = [
//   {
//     "id": 1,
//     "number_data": 100,
//     "string_data": "hello world",
//     "boolean_data": true,
//     // "array_string_data": ["array_1", "array_2"],
//     // "array_number_data": [1,2,3,4],
//     // "array_object_data": [{
//     //   "key1": 123,
//     //   "key2": "456"
//     // }],
//     // "array_array_data": [
//     //   [1,2,3],[23,24,25]
//     // ],
//     // "object_data": {
//     //   "key1": 123,
//     //   "key2": "456",
//     //   "key3": {
//     //     "kkey1": 111
//     //   }
//     // }
//   }
// ]

const meta_data = {
  "item_config": {
    "name": "测试配置",
    "type": "array_object",
    "fields": {
        "id": {
            "name": "ID",
            "edit_type": "number",
            "attrs": {
                "readonly": true,
            },
            "type": "number"
        },
        "number_data": {
            "name": "数字",
            "edit_type": "number",
            "attrs": {
              "jingdu": 1,
              "min": 0,
              "max": 100,
            },
            "type": "number"
        },
        "string_data": {
          "name": "字符串",
          "edit_type": "string",
          "attrs": {
            "deft": "50"
          },
          "key_rules": {
            "_unique": true
          },
          "type": "string"
        },
        "boolean_data": { 
            "name": "布尔类型",
            "edit_type": 'switch',
            "attrs": {
              "deft": false
            },
            "type": "boolean"
        }
    }
  }
}
export default function handler(req, res) {
  res.status(200).json({
      json_data : json_data,
      meta_data : meta_data
    })
}
