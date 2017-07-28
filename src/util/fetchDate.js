import 'isomorphic-fetch'

const parseData = values => {
  if (typeof values !== 'object') {
    throw new Error(`${values}  is not an object`)
  }
  var params = ''
  for ( let key in values ) {
    params += `&&${key}=${values[key]}`
  }
  return params.replace('&&','')
}

export function postData(url, values = {}){
  console.log('%c post to backend values is','background: #222; color: #bada55',values);
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: parseData(values)

  }
  return fetch(url, options)
          .then(res => {
            return res.json().then(values => values)
          })
}
